import { useMemo } from "react";
import { ViewStyle } from "react-native";

import colors from "@/constants/colors";
import useLayouts from "@/constants/layouts";

export default function useGameGridStyles() {
  const layouts = useLayouts();

  const styles = useMemo(() => ({
    // ======================= Grid Container =======================
    grid: {
      position: "absolute",
      top: layouts.GAME_GRID_TOP,
      alignSelf: "center",
      width: layouts.GAME_GRID_SIZE,
      height: layouts.GAME_GRID_SIZE,
      padding: layouts.GAME_GRID_PADDING,
      borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
      backgroundColor: colors.DEFAULT_GRID_BG,
    } as ViewStyle,

    // ======================= Individual Empty Tile Cell =======================
    cell: {
      width: layouts.GAME_GRID_SIZE / layouts.GAME_GRID_CELL_DIVISOR,
      height: layouts.GAME_GRID_SIZE / layouts.GAME_GRID_CELL_DIVISOR,
      marginTop: layouts.GAME_GRID_CELL_MARGIN,
      marginBottom: layouts.GAME_GRID_CELL_MARGIN,
      marginLeft: layouts.GAME_GRID_CELL_MARGIN,
      marginRight: layouts.GAME_GRID_CELL_MARGIN,
      borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
      borderWidth: layouts.GAME_GRID_CELL_BORDER_WIDTH,
      borderColor: colors.BLACK,
      backgroundColor: colors.DEFAULT_GRID_CELL,
    } as ViewStyle,
  }), [layouts]);

  return styles;
}
