// React and React Native
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

/**
 * GameGrid
 * - Static 4x4 grid layout for displaying letter or number tiles
 * - Accepts custom styling for the grid container and individual cells
 */
function GameGrid({
  style,
  styleAdjust,
}: {
  style: {
    grid: ViewStyle;
    cell: ViewStyle;
  };
  styleAdjust?: { // Style override for themed packs
    grid: ViewStyle;
    cell: ViewStyle;
  };
}): React.JSX.Element {

  // Render 16 empty cells
  const renderCells = () => {
    return Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[style.cell, styleAdjust?.cell]} />
    ));
  };

  return (
    <View style={[style.grid, styleAdjust?.grid]}>
      <View style={styles.container}>{renderCells()}</View>
    </View>
  );
}

// Grid layout wrapper
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default GameGrid;
