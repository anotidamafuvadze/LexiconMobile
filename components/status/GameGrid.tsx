import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { useGame } from "@/context/GameContext";
import game from "@/constants/game";
import { Tile as TileModel } from "@/models/tile";
import Tile from "@/components/status/Tile";
import LosingSplash from "./LosingSplash";
import WinningSplash from "./WinningSplash";

/**
 * GameGrid
 * Static 4x4 grid layout displaying letter tiles.
 * Supports custom styling for grid and tiles.
 * Handles swipe gestures to move tiles and update game state.
 */
function GameGrid({
  gridStyle,
  tileStyle,
  tileColor,
  targetTileColor,
  gridStyleAdjust,
}: {
  gridStyle: {
    grid: ViewStyle;
    cell: ViewStyle;
  };
  tileStyle: {
    tile: ViewStyle;
    letter: TextStyle;
  };
  // Style override for themed packs
  gridStyleAdjust?: {
    grid: ViewStyle;
    cell: ViewStyle;
  };
  tileColor: string;
  targetTileColor: string;
}): React.JSX.Element {
  const { getTiles, moveTiles, dispatch, status } = useGame();

  // Render empty cells
  const renderCells = () => {
    return Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[gridStyle.cell, gridStyleAdjust?.cell]} />
    ));
  };

  // Render active tiles
  const renderTiles = () => {
    return getTiles().map((tile: TileModel) => (
      <Tile
        key={tile.id}
        tileID={tile.id}
        tileStyle={tileStyle.tile}
        tileColor={tileColor}
        letterStyle={tileStyle.letter}
        targetTileColor={targetTileColor}
        {...tile}
      />
    ));
  };

  // Handle swipe gestures
  const handleSwiping = (swipeType: string) => {
    switch (swipeType) {
      case "up":
        moveTiles("MOVE_UP");
        break;
      case "down":
        moveTiles("MOVE_DOWN");
        break;
      case "left":
        moveTiles("MOVE_LEFT");
        break;
      case "right":
        moveTiles("MOVE_RIGHT");
        break;
    }

    setTimeout(() => {
      dispatch({ type: "CLEAN_UP" });
      setTimeout(() => {
        dispatch({ type: "CREATE_TILE", tile: { value: "A", justCreated: true } });
      }, 20);
    }, game.MOVE_ANIMATION_DURATION);
  };

  return (
    <GestureRecognizer
      style={{ position: "absolute", alignSelf: "center" }}
      onSwipeUp={() => handleSwiping("up")}
      onSwipeDown={() => handleSwiping("down")}
      onSwipeLeft={() => handleSwiping("left")}
      onSwipeRight={() => handleSwiping("right")}
    >
      {status === "LOST" && <LosingSplash />}
      {status === "WON" && <WinningSplash />}
      <View style={[gridStyle.grid, gridStyleAdjust?.grid]}>
        <View style={styles.tileContainer}>{renderTiles()}</View>
        <View style={styles.gridContainer}>{renderCells()}</View>
      </View>
    </GestureRecognizer>
  );
}

// Styles
const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  tileContainer: {
    position: "absolute",
    zIndex: 2,
    margin: 7,
  },
});

export default GameGrid;
