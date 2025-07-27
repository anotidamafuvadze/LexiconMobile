import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts";

export default function useSplashStyles() {
  const layouts = useLayouts();
  const fonts = useFonts();

  const styles = useMemo(() => ({
    // ======================= Win Overlay =======================
    win: {
      position: "absolute",
      top: layouts.GAME_GRID_TOP,
      zIndex: 3,
      alignSelf: "center",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: layouts.GAME_GRID_SIZE,
      height: layouts.GAME_GRID_SIZE,
      borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
      backgroundColor: "rgba(197, 188, 147, 0.05)", // light overlay
    } as ViewStyle,

    // ======================= Lose Overlay =======================
    lost: {
      position: "absolute",
      top: layouts.GAME_GRID_TOP,
      zIndex: 3,
      alignSelf: "center",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: layouts.GAME_GRID_SIZE,
      height: layouts.GAME_GRID_SIZE,
      borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
      backgroundColor: "rgba(0, 0, 0, 0.2)", // dark overlay
    } as ViewStyle,

    // ======================= Overlay Text =======================
    text: {
      fontSize: fonts.size.splash,
      fontWeight: fonts.weight.bold,
      fontFamily: fonts.family.primary,
      textAlign: "center",
      color: "rgba(240, 240, 240, 1)",
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.splash,
    } as TextStyle,
  }), [layouts]);

  return styles;
}
