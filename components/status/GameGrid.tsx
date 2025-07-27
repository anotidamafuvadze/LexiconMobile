import Tile from "@/components/status/Tile";
import game from "@/constants/game";
import { useGame } from "@/context/GameContext";
import { Tile as TileModel } from "@/models/tile";
import React from "react";
import { StyleSheet, TextStyle, useWindowDimensions, View, ViewStyle } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import LosingSplash from "./LosingSplash";
import WinningSplash from "./WinningSplash";

/**
 * GameGrid
 * - 4×4 grid with tiles over empty cells
 * - Handles swipe gestures to move tiles
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
  gridStyleAdjust?: {
    grid: ViewStyle;
    cell: ViewStyle;
  };
  tileColor: string;
  targetTileColor: string;
}): React.JSX.Element {
  const { getTiles, moveTiles, dispatch, status } = useGame();
  const { width, height } = useWindowDimensions();

  // Render empty cells
  const renderCells = () =>
    Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[gridStyle.cell, gridStyleAdjust?.cell]} />
    ));

  // Render active tiles
  const renderTiles = () =>
    getTiles().map((tile: TileModel) => (
      <Tile
        key={`${tile.id}-${width}-${height}`}
        tileID={tile.id}
        tileStyle={tileStyle.tile}
        tileColor={tileColor}
        letterStyle={tileStyle.letter}
        targetTileColor={targetTileColor}
        {...tile}
      />
    ));

  // Handle swipes
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
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel="Game grid"
      accessibilityHint="Swipe up, down, left, or right to move tiles"
      onSwipeUp={() => handleSwiping("up")}
      onSwipeDown={() => handleSwiping("down")}
      onSwipeLeft={() => handleSwiping("left")}
      onSwipeRight={() => handleSwiping("right")}
    >
      {status === "LOST" && <LosingSplash />}
      {status === "WON" && <WinningSplash />}

      <View style={[gridStyle.grid, gridStyleAdjust?.grid]} accessible={false}>
        <View style={styles.tileContainer}>{renderTiles()}</View>
        <View style={styles.gridContainer}>{renderCells()}</View>
      </View>
    </GestureRecognizer>
  );
}

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
