import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export default function useTileStyles() {
  const layouts = useLayouts();
  const fonts = useFonts();

  return useMemo(() => ({
    // ======================= Tile Container =======================
    tile: {
      marginTop: layouts.TILE_MARGIN_TOP,
      marginBottom: layouts.TILE_MARGIN_BOTTOM,
      marginLeft: layouts.TILE_MARGIN_LEFT,
      marginRight: layouts.TILE_MARGIN_RIGHT,
      borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
      backgroundColor: colors.DEFAULT_GRID_TILE,
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,

    // ======================= Letter Inside Tile =======================
    letter: {
      fontSize: fonts.size.tileLetter,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.primary,
      color: colors.DEFAULT_GRID_LETTER,
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.tileLetter,
      textShadowRadius: 0,
    } as TextStyle,
  }), [layouts]);
}
