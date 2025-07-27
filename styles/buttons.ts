import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import useLayouts from "@/constants/layouts"; // or "@/constants/layouts" if defined there
import { useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export default function useButtons() {
  const layouts = useLayouts();
  const fonts = useFonts();

  return useMemo(() => ({
    // ======================= Home Screen =======================
    home: {
      button: {
        paddingVertical: layouts.HOME_BUTTON_PADDING_VERTICAL,
        paddingHorizontal: layouts.HOME_BUTTON_PADDING_HORIZONTAL,
        borderRadius: layouts.HOME_BUTTON_BORDER_RADIUS,
        borderWidth: layouts.HOME_BUTTON_BORDER_WIDTH,
        borderColor: colors.HOME_BUTTON_BORDER,
        backgroundColor: colors.MENU_BUTTON_BG,
        shadowColor: fonts.shadow.homeButton.color,
        shadowOpacity: fonts.shadow.homeButton.opacity,
        shadowRadius: fonts.shadow.homeButton.radius,
        shadowOffset: fonts.shadow.offset.homeButton,
      } as ViewStyle,

      title: {
        fontSize: fonts.size.homeButton,
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
        fontFamily: fonts.family.primary,
        color: colors.HOME_BUTTON_TITLE,
        letterSpacing: layouts.LETTER_SPACING_SMALL,
        textAlign: "center",
      } as TextStyle,
    },

    // ======================= Menu Screen =======================
    menuScreen: {
      button: {
        marginTop: layouts.MENU_BUTTON_MARGIN_TOP,
        paddingVertical: layouts.MENU_BUTTON_PADDING_VERTICAL,
        paddingHorizontal: layouts.MENU_BUTTON_PADDING_HORIZONTAL,
        borderRadius: layouts.MENU_BUTTON_BORDER_RADIUS,
        borderWidth: layouts.MENU_BUTTON_BORDER_WIDTH,
        borderColor: colors.MENU_BUTTON_BORDER,
        backgroundColor: colors.MENU_SCREEN_BUTTON_BG,
        shadowColor: fonts.shadow.menuButton.color,
        shadowOpacity: fonts.shadow.menuButton.opacity,
        shadowRadius: fonts.shadow.menuButton.radius,
        shadowOffset: fonts.shadow.offset.menuButton,
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
        fontFamily: fonts.family.primary,
        color: colors.MENU_BUTTON_TITLE,
        letterSpacing: layouts.LETTER_SPACING_SMALL,
        textAlign: "center",
      } as TextStyle,
    },

    // ======================= Word Pack Screen =======================
    wordPack: {
      button: {
        marginTop: layouts.WORD_PACK_BUTTON_MARGIN_TOP,
        width: layouts.WORD_PACK_BUTTON_WIDTH,
        height: layouts.WORD_PACK_BUTTON_HEIGHT,
        borderRadius: layouts.WORD_PACK_BUTTON_BORDER_RADIUS,
        borderWidth: layouts.WORD_PACK_BUTTON_BORDER_WIDTH,
        borderColor: colors.WORD_PACK_BUTTON_BORDER,
        backgroundColor: colors.WORD_PACK_BUTTON_BG,
        shadowColor: fonts.shadow.wordPackButton.color,
        shadowOpacity: fonts.shadow.wordPackButton.opacity,
        shadowRadius: fonts.shadow.wordPackButton.radius,
        shadowOffset: fonts.shadow.offset.wordPackButton,
    
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
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
        fontFamily: fonts.family.primary,
        color: colors.WORD_PACK_BUTTON_TITLE,
        letterSpacing: layouts.LETTER_SPACING_SMALL,
      } as TextStyle,

      subtitle: {
        fontSize: fonts.size.wordPackButtonSubtitle,
        fontFamily: fonts.family.primary,
        marginTop: layouts.WORD_PACK_SUBTITLE_MARGIN_TOP,
      } as TextStyle,
    },

    // ======================= Difficulty Button =======================
    difficulty: {
      button: {
        marginTop: layouts.DIFFICULTY_BUTTON_MARGIN_TOP,
        width: layouts.DIFFICULTY_BUTTON_WIDTH,
        height: layouts.DIFFICULTY_BUTTON_HEIGHT,
        alignItems: "center",
        borderRadius: layouts.DIFFICULTY_BUTTON_BORDER_RADIUS,
        borderWidth: layouts.DIFFICULTY_BUTTON_BORDER_WIDTH,
        borderColor: colors.DIFFICULTY_BUTTON_BORDER,
        shadowColor: fonts.shadow.difficultyButton.color,
        shadowOpacity: fonts.shadow.difficultyButton.opacity,
        shadowRadius: fonts.shadow.difficultyButton.radius,
        shadowOffset: fonts.shadow.offset.difficultyButton,
      } as ViewStyle,

      textRow: {
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      } as ViewStyle,
    },

    // ======================= Instruction Screen =======================
    instruction: {
      button: {
        alignSelf: "center",
        width: layouts.INSTRUCTION_BUTTON_WIDTH,
        paddingVertical: layouts.HOME_BUTTON_PADDING_VERTICAL,
        paddingHorizontal: layouts.HOME_BUTTON_PADDING_HORIZONTAL,
        borderRadius: layouts.HOME_BUTTON_BORDER_RADIUS,
        borderWidth: layouts.HOME_BUTTON_BORDER_WIDTH,
        borderColor: colors.HOME_BUTTON_BORDER,
        backgroundColor: colors.NEW_GAME_BUTTON_BG,
        shadowColor: fonts.shadow.homeButton.color,
        shadowOpacity: fonts.shadow.homeButton.opacity,
        shadowRadius: fonts.shadow.homeButton.radius,
        shadowOffset: fonts.shadow.offset.homeButton,
      } as ViewStyle,

      title: {
        fontSize: fonts.size.instruction,
        fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
        fontFamily: fonts.family.primary,
        color: colors.HOME_BUTTON_TITLE,
        letterSpacing: layouts.LETTER_SPACING_SMALL,
        textAlign: "center",
      } as TextStyle,
    },

    // ======================= Back Navigation =======================
    backButton: {
      icon: {
        position: "absolute",
        width: layouts.BACK_ICON_SIZE,
        height: layouts.BACK_ICON_SIZE,
        tintColor: colors.BACK_ICON_BG,
      } as ImageStyle,
    },
  }), [layouts]);
}
