// React and React Native
import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

// Context Hooks
import { useGame } from "@/context/GameContext";

// Constants
import game from "@/constants/game";

// Models
import { Tile as TileModel } from "@/models/tile";

// Components
import Tile from "@/components/status/Tile";
import Splash from "./Splash";

/**
 * GameGrid
 * - Static 4x4 grid layout displaying letter tiles
 * - Supports custom styling for grid and tiles
 * - Handles swipe gestures to move tiles and update game state
 */
function GameGrid({
  gridStyle,
  tileStyle,
  gridStyleAdjust,
  tileStyleAdjust,
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
  tileStyleAdjust?: {
    tile: ViewStyle;
    letter: TextStyle;
  };
}): React.JSX.Element {
  const { getTiles, moveTiles, dispatch, status } = useGame();

  // Render 16 empty cells
  const renderCells = () => {
    return Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[gridStyle.cell, gridStyleAdjust?.cell]} />
    ));
  };

  // Render active tiles on top of the grid
  const renderTiles = () => {
    return getTiles().map((tile: TileModel) => {
      return (
        <Tile
          tileStyle={tileStyle.tile}
          letterStyle={tileStyle.letter}
          key={tile.id}
          tileID={tile.id}
          {...tile}
        />
      );
    });
  };



  // Handle swipe gestures to move tiles and update state
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

    // Wait for move animation to finish before cleaning and adding tiles
    setTimeout(() => {
      dispatch({ type: "CLEAN_UP" });

      setTimeout(() => {
        dispatch({
          type: "CREATE_TILE",
          tile: { value: "A", justCreated: true },
        });
      }, 20); // small delay to let CLEAN_UP finish
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
      {status === "WON" && <Splash />}
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
