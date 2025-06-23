// React and React Native
import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Tile from "./Tile";

/**
 * GameGrid
 * - Static 4x4 grid layout for displaying letter or number tiles
 * - Accepts custom styling for the grid container and individual cells
 */
function GameGrid({
  gridStyle,
  gridStyleAdjust,
  tileStyle,
  tileStyleAdjust,
}: {
  // Styling for the game grid
  gridStyle: {
    grid: ViewStyle;
    cell: ViewStyle;
  };
  gridStyleAdjust?: {
    // Style override for themed packs
    grid: ViewStyle;
    cell: ViewStyle;
  };

  // Styling for the tiles
  tileStyle: {
    tile: ViewStyle;
    letter: TextStyle;
  };

  tileStyleAdjust?: {
    tile: ViewStyle;
    letter: TextStyle;
  };
}): React.JSX.Element {
  // Render 16 empty cells
  const renderCells = () => {
    return Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[gridStyle.cell, gridStyleAdjust?.cell]} />
    ));
  };

  return (
    <View style={[gridStyle.grid, gridStyleAdjust?.grid]}>
      <View style={styles.tileContainer}>
        <Tile
          tile={tileStyle.tile}
          tileAdjust={tileStyleAdjust?.tile}
          letter={tileStyle.letter}
          letterAdjust={tileStyleAdjust?.letter}
        />
      </View>
      <View style={styles.gridContainer}>{renderCells()}</View>
    </View>
  );
}

// Grid layout wrapper
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
  }
});

export default GameGrid;
