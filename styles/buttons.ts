import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

const buttons = {
  // ============================
  // Home Screen Button
  // ============================
  home: {
    button: {
      paddingVertical: layouts.HOME_BUTTON_PADDING_VERTICAL,
      paddingHorizontal: layouts.HOME_BUTTON_PADDING_HORIZONTAL,
      borderRadius: layouts.HOME_BUTTON_BORDER_RADIUS,
      borderColor: colors.HOME_BUTTON_BORDER_COLOR,
      borderWidth: layouts.HOME_BUTTON_BORDER_WIDTH,
      backgroundColor: colors.MENU_BUTTON_BG,
      boxShadow: fonts.shadow.homeButton,
    } as ViewStyle,

    title: {
      fontSize: fonts.size.homeButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.WORD_PACK_TITLE,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
      textAlign: "center",
    } as TextStyle,
  },

  // ============================
  // Menu Screen Button
  // ============================
  menuScreen: {
    button: {
      paddingVertical: layouts.MENU_BUTTON_PADDING_VERTICAL,
      paddingHorizontal: layouts.MENU_BUTTON_PADDING_HORIZONTAL,
      backgroundColor: colors.MENU_SCREEN_BUTTON_BG,
      borderColor: colors.MENU_BUTTON_BORDER,
      borderWidth: layouts.MENU_BUTTON_BORDER_WIDTH,
      borderRadius: layouts.MENU_BUTTON_BORDER_RADIUS,
      boxShadow: fonts.shadow.menuButton,
      marginTop: layouts.MENU_BUTTON_MARGIN_TOP,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,

    icon: {
      width: layouts.RESUME_ICON_SIZE,
      height: layouts.RESUME_ICON_SIZE,
      marginRight: layouts.MENU_ICON_MARGIN_RIGHT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.menuButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.regular,
      color: colors.MENU_SCREEN_BUTTON,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
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
      borderRadius: layouts.WORD_PACK_BUTTON_BORDER_RADIUS,
      borderWidth: layouts.WORD_PACK_BUTTON_BORDER_WIDTH,
      height: layouts.WORD_PACK_BUTTON_HEIGHT,
      width: layouts.WORD_PACK_BUTTON_WIDTH,
      marginTop: layouts.WORD_PACK_BUTTON_MARGIN_TOP,
      boxShadow: fonts.shadow.wordPackButton,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      alignItems: "center",
    } as ViewStyle,

    textColumn: {
      marginTop: layouts.WORD_PACK_TEXT_MARGIN_TOP,
      marginLeft: layouts.WORD_PACK_TEXT_MARGIN_LEFT,
    } as ViewStyle,

    icon: {
      width: layouts.WORD_PACK_ICON_SIZE,
      height: layouts.WORD_PACK_ICON_SIZE,
      marginLeft: layouts.WORD_PACK_ICON_MARGIN_LEFT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.wordPackButtonTitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      color: colors.WORD_PACK_BUTTON_TITLE,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.wordPackButtonSubtitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.regular as TextStyle["fontWeight"],
      marginTop: layouts.WORD_PACK_SUBTITLE_MARGIN_TOP,
    } as TextStyle,
  },

  // ============================
  // Game Lab Screen Button
  // ============================
  gameLab: {
    button: {
      backgroundColor: colors.GAME_LAB_BUTTON_BG,
      borderColor: colors.GAME_LAB_BUTTON_BORDER,
      borderWidth: layouts.GAME_LAB_BUTTON_BORDER_WIDTH,
      borderRadius: layouts.GAME_LAB_BUTTON_BORDER_RADIUS,
      height: layouts.GAME_LAB_BUTTON_HEIGHT,
      width: layouts.GAME_LAB_BUTTON_WIDTH,
      marginTop: layouts.GAME_LAB_BUTTON_MARGIN_TOP,
      boxShadow: fonts.shadow.gameLabButton,
    } as ViewStyle,

    textRow: {
      flexDirection: "row",
      alignItems: "center",
    } as ViewStyle,

    textColumn: {
      marginTop: layouts.GAME_LAB_TEXT_MARGIN_TOP,
      marginLeft: layouts.GAME_LAB_TEXT_MARGIN_LEFT,
    } as ViewStyle,

    icon: {
      width: layouts.GAME_LAB_ICON_SIZE,
      height: layouts.GAME_LAB_ICON_SIZE,
      marginLeft: layouts.GAME_LAB_ICON_MARGIN_LEFT,
    } as ImageStyle,

    title: {
      fontSize: fonts.size.gameLabButtonTitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      color: colors.GAME_LAB_BUTTON_TITLE,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
    } as TextStyle,

    subtitle: {
      fontSize: fonts.size.gameLabButtonSubtitle,
      fontFamily: fonts.family.regular,
      fontWeight: fonts.weight.regular as TextStyle["fontWeight"],
      marginTop: layouts.GAME_LAB_SUBTITLE_MARGIN_TOP,
    } as TextStyle,
  },

  // ============================
  // Difficulty Button
  // ============================
  difficulty: {
    button: {
      alignItems: "center",
      width: layouts.DIFFICULTY_BUTTON_WIDTH,
      height: layouts.DIFFICULTY_BUTTON_HEIGHT,
      marginTop: layouts.DIFFICULTY_BUTTON_MARGIN_TOP,
      borderRadius: layouts.DIFFICULTY_BUTTON_BORDER_RADIUS,
      borderWidth: layouts.DIFFICULTY_BUTTON_BORDER_WIDTH,
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
      textShadowColor: colors.BLACK,
      textShadowOffset: fonts.shadow.offset.difficultyLabel,
    } as TextStyle,
  },
};

export default buttons;
