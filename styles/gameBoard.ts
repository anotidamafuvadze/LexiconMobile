import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts";

export default function useGameBoardStyles() {
  const layouts = useLayouts();
  const fonts = useFonts();

  const styles = useMemo(() => ({
    // ======================= Outer Container =======================
    container: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,

    // ======================= Board =======================
    board: {
      height: layouts.GAME_BOARD_HEIGHT,
      borderRadius: layouts.GAME_BOARD_BORDER_RADIUS,
      borderWidth: layouts.GAME_BOARD_BORDER_WIDTH,
      borderColor: colors.GAME_BOARD_BORDER,
      backgroundColor: colors.DEFAULT_BOARD_BG,
      justifyContent: "flex-start",
      alignItems: "center",
    } as ViewStyle,

    // ======================= Score/Pop Wrapper =======================
    countWrapper: {
      width: "100%",
      height: layouts.GAME_BOARD_COUNT_HEIGHT,
      justifyContent: "flex-end",
      alignItems: "center",
    } as ViewStyle,

    // ======================= Score/Pop Label =======================
    title: {
      fontSize: fonts.size.scoreLabel,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.primary,
      color: colors.DEFAULT_BOARD_TEXT,
      textAlign: "center",
    } as TextStyle,

    // ======================= Score/Pop Number =======================
    count: {
      fontSize: fonts.size.scoreValue,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.secondary,
      color: colors.DEFAULT_BOARD_TEXT,
      textAlign: "center",
      textAlignVertical: "bottom",
      paddingHorizontal: layouts.GAME_BOARD_PADDING_HORIZONTAL,
    } as TextStyle,
  }), [layouts]);

  return styles;
}
