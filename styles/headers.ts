import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts";

export default function useHeaderStyles() {
  const layouts = useLayouts();
  const fonts = useFonts();

  const styles = useMemo(() => ({
    // ======================= Home Screen =======================
    home: {
      container: {
        top: layouts.HOME_HEADER_TOP,
        alignItems: "center",
      } as ViewStyle,

      title: {
        fontSize: fonts.size.homeTitle,
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
        fontFamily: fonts.family.primary,
        color: colors.HOME_TITLE,
        letterSpacing: layouts.LETTER_SPACING_SMALL,
        textAlign: "center",
      } as TextStyle,

      subtitle: {
        fontSize: fonts.size.homeSubtitle,
        fontFamily: fonts.family.primary,
        color: colors.HOME_SUBTITLE,
        textAlign: "center",
      } as TextStyle,

      boldSubtitle: {
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      } as TextStyle,
    },

    // ======================= Word Pack =======================
    wordPack: {
      container: {
        top: layouts.WORD_PACK_TITLE_TOP,
        alignItems: "center",
      } as ViewStyle,

      title: {
        fontSize: fonts.size.wordPackTitle,
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
        fontFamily: fonts.family.primary,
        color: colors.WORD_PACK_BUTTON_TITLE,
        letterSpacing: layouts.LETTER_SPACING_XS,
        textAlign: "center",
        maxWidth: layouts.WORD_PACK_TITLE_WIDTH,
        lineHeight: layouts.WORD_PACK_TITLE_HEIGHT,
        marginBottom: layouts.WORD_PACK_TITLE_MARGIN_BOTTOM,
      } as TextStyle,

      subtitle: {
        fontSize: fonts.size.wordPackSubtitle,
        fontFamily: fonts.family.primary,
        color: colors.BLACK,
        textAlign: "center",
        maxWidth: layouts.WORD_PACK_SUBTITLE_WIDTH,
      } as TextStyle,
    },
  }), [layouts]);

  return styles;
}
