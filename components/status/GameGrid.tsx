// React and React Native
import Tile from "@/components/status/Tile";
import { Tile as TileModel } from "@/models/tile";
import gameReducer, { initialState } from "@/reducers/gameReducer";
import React, { useEffect, useReducer, useRef } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

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
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const hasStarted = useRef(false);

  // Render 16 empty cells
  const renderCells = () => {
    return Array.from({ length: 16 }, (_, index) => (
      <View key={index} style={[gridStyle.cell, gridStyleAdjust?.cell]} />
    ));
  };

  const renderTiles = () => {
    return Object.values(gameState.tiles).map((tile: TileModel, index: number) => {
      return (
        <Tile
          key={`${index}`}
          tile={tileStyle.tile}
          tileAdjust={tileStyleAdjust?.tile}
          letter={tileStyle.letter}
          {...tile}
        />
      );
    });
  };

  useEffect(() => {
    if (hasStarted.current == false) {
      dispatch({ type: "CREATE_TILE", tile: { position: [0, 0], value: "A" } });
      dispatch({ type: "CREATE_TILE", tile: { position: [0, 1], value: "A" } });
      hasStarted.current = true;
    }
  }, []);

  return (
    <GestureRecognizer
      style={{ position: "absolute", alignSelf: "center" }}
      onSwipeLeft={() => dispatch({ type: "MOVE_LEFT" })}
      onSwipeRight={() => dispatch({ type: "MOVE_RIGHT" })}
      onSwipeUp={() => dispatch({ type: "MOVE_UP" })}
      onSwipeDown={() => dispatch({ type: "MOVE_DOWN" })}
    >
      <View style={[gridStyle.grid, gridStyleAdjust?.grid]}>
        <View style={styles.tileContainer}>{renderTiles()}</View>
        <View style={styles.gridContainer}>{renderCells()}</View>
      </View>
    </GestureRecognizer>
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
  },
});

export default GameGrid;
