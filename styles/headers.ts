import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const headers = {
  // ============================
  // Home Screen Header
  // ============================
  home: {
    container: {
      top: layouts.HOME_HEADER_TOP,
      alignItems: "center",
    } as ViewStyle,

    title: {
      fontSize: fonts.size.homeTitle,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.HOME_TITLE,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
      textAlign: "center",
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.homeSubtitle,
      fontFamily: fonts.family.regular,
      color: colors.HOME_SUBTITLE,
      textAlign: "center",
    } as TextStyle,

    boldSubtitle: {
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    } as TextStyle,
  },

  // ============================
  // Word Pack Header
  // ============================
  wordPack: {
    container: {
      alignItems: "center",
    } as ViewStyle,

    title: {
      fontSize: fonts.size.wordPackTitle,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.WORD_PACK_TITLE,
      letterSpacing: layouts.LETTER_SPACING_XS,
      textAlign: "center",
      maxWidth: layouts.WORD_PACK_TITLE_WIDTH,
      lineHeight: layouts.WORD_PACK_TITLE_HEIGHT,
      marginBottom: layouts.WORD_PACK_TITLE_MARGIN_BOTTOM,
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.wordPackSubtitle,
      fontFamily: fonts.family.regular,
      color: colors.BLACK,
      textAlign: "center",
      maxWidth: layouts.WORD_PACK_SUBTITLE_WIDTH,
    } as TextStyle,
  },

  // ============================
  // Game Lab Header
  // ============================
  gameLab: {
    title: {
      alignItems: "center",
      top: layouts.GAME_LAB_HEADER_TOP, 
    } as ViewStyle,

    subtitle: {
      fontSize: fonts.size.gameLabSubtitle,
      fontFamily: fonts.family.regular,
      color: colors.BLACK,
      textAlign: "center",
      maxWidth: layouts.GAME_LAB_SUBTITLE_WIDTH,
    } as TextStyle,
  },
};

export default headers;
