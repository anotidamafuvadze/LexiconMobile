import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import metrics from "@/constants/layouts";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const buttons = {
  // ============================
  // Home Screen Button
  // ============================
  home: {
    button: {
      paddingVertical: metrics.HOME_BUTTON_PADDING_VERTICAL,
      paddingHorizontal: metrics.HOME_BUTTON_PADDING_HORIZONTAL,
      borderRadius: metrics.HOME_BUTTON_BORDER_RADIUS,
      borderColor: colors.HOME_BUTTON_BORDER_COLOR,
      borderWidth: metrics.HOME_BUTTON_BORDER_WIDTH,
      backgroundColor: colors.MENU_BUTTON_BG,
      boxShadow: fonts.shadow.homeButton,
    } as ViewStyle,

    title: {
      fontSize: fonts.size.homeButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.WORD_PACK_TITLE,
      letterSpacing: metrics.LETTER_SPACING_SMALL,
      textAlign: "center",
    } as TextStyle,
  },

  // ============================
  // Menu Screen Button
  // ============================
  menuScreen: {
    button: {
      paddingVertical: metrics.MENU_BUTTON_PADDING_VERTICAL,
      paddingHorizontal: metrics.MENU_BUTTON_PADDING_HORIZONTAL,
      backgroundColor: colors.MENU_SCREEN_BUTTON_BG,
      borderColor: colors.MENU_BUTTON_BORDER,
      borderWidth: metrics.MENU_BUTTON_BORDER_WIDTH,
      borderRadius: metrics.MENU_BUTTON_BORDER_RADIUS,
      boxShadow: fonts.shadow.menuButton,
      marginTop: metrics.MENU_BUTTON_MARGIN_TOP,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,

    icon: {
      width: metrics.RESUME_ICON_SIZE,
      height: metrics.RESUME_ICON_SIZE,
      marginRight: metrics.MENU_ICON_MARGIN_RIGHT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.menuButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.WORD_PACK_TITLE,
      letterSpacing: metrics.LETTER_SPACING_SMALL,
      textAlign: "center",
    } as TextStyle,
  },

  // ============================
  // Word Pack Screen Button
  // ============================
  wordPack: {
    button: {
      backgroundColor: colors.WORD_PACK_BUTTON_BG,
      borderColor: colors.WORD_PACK_BUTTON_BORDER,
      borderRadius: metrics.WORD_PACK_BUTTON_BORDER_RADIUS,
      borderWidth: metrics.WORD_PACK_BUTTON_BORDER_WIDTH,
      height: metrics.WORD_PACK_BUTTON_HEIGHT,
      width: metrics.WORD_PACK_BUTTON_WIDTH,
      marginTop: metrics.WORD_PACK_BUTTON_MARGIN_TOP,
      boxShadow: fonts.shadow.wordPackButton,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      alignItems: "center",
    } as ViewStyle,

    textColumn: {
      marginTop: metrics.WORD_PACK_TEXT_MARGIN_TOP,
      marginLeft: metrics.WORD_PACK_TEXT_MARGIN_LEFT,
    } as ViewStyle,

    icon: {
      width: metrics.WORD_PACK_ICON_SIZE,
      height: metrics.WORD_PACK_ICON_SIZE,
      marginLeft: metrics.WORD_PACK_ICON_MARGIN_LEFT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.wordPackButtonTitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      color: colors.WORD_PACK_BUTTON_TITLE,
      letterSpacing: metrics.LETTER_SPACING_SMALL,
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.wordPackButtonSubtitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.regular as TextStyle["fontWeight"],
      marginTop: metrics.WORD_PACK_SUBTITLE_MARGIN_TOP,
    } as TextStyle,
  },

  // ============================
  // Game Lab Screen Button
  // ============================
  gameLab: {
    button: {
      backgroundColor: colors.GAME_LAB_BUTTON_BG,
      borderColor: colors.GAME_LAB_BUTTON_BORDER,
      borderWidth: metrics.GAME_LAB_BUTTON_BORDER_WIDTH,
      borderRadius: metrics.GAME_LAB_BUTTON_BORDER_RADIUS,
      height: metrics.GAME_LAB_BUTTON_HEIGHT,
      width: metrics.GAME_LAB_BUTTON_WIDTH,
      marginTop: metrics.GAME_LAB_BUTTON_MARGIN_TOP,
      boxShadow: fonts.shadow.gameLabButton,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      alignItems: "center",
    } as ViewStyle,

    textColumn: {
      marginTop: metrics.GAME_LAB_TEXT_MARGIN_TOP,
      marginLeft: metrics.GAME_LAB_TEXT_MARGIN_LEFT,
    } as ViewStyle,

    icon: {
      width: metrics.GAME_LAB_ICON_SIZE,
      height: metrics.GAME_LAB_ICON_SIZE,
      marginLeft: metrics.GAME_LAB_ICON_MARGIN_LEFT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.gameLabButtonTitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      color: colors.GAME_LAB_BUTTON_TITLE,
      letterSpacing: metrics.LETTER_SPACING_SMALL,
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.gameLabButtonSubtitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.regular as TextStyle["fontWeight"],
      marginTop: metrics.GAME_LAB_SUBTITLE_MARGIN_TOP,
    } as TextStyle,
  },

  // ============================
  // Difficulty Button
  // ============================
  difficulty: {
    button: {
      alignItems: "center",
      width: metrics.DIFFICULTY_BUTTON_WIDTH,
      height: metrics.DIFFICULTY_BUTTON_HEIGHT,
      marginTop: metrics.DIFFICULTY_BUTTON_MARGIN_TOP,
      borderRadius: metrics.DIFFICULTY_BUTTON_BORDER_RADIUS,
      borderWidth: metrics.DIFFICULTY_BUTTON_BORDER_WIDTH,
      borderColor: colors.DIFFICULTY_BUTTON_BORDER,
      boxShadow: fonts.shadow.difficultyButton,
    } as ViewStyle,

    textRow: {
      height: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,

    title: {
      fontSize: fonts.size.difficultyButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.bold,
      color: colors.DIFFICULTY_BUTTON_TEXT,
      textAlign: "center",
      textShadowColor: colors.DIFFICULTY_BUTTON_TITLE_SHADOW,
      textShadowOffset: fonts.shadow.offset.difficultyButton,
    } as TextStyle,
  },
};

export default buttons;
