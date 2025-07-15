import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const targetWord = {
  container: {
    alignItems: "center",
    top: layouts.TARGET_WORD_TOP,
  } as ViewStyle,

  // "YOUR WORD:" label
  title: {
    fontSize: fonts.size.targetTitle,
    fontWeight: fonts.weight.lightBold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.HOME_TARGET_WORD,
    letterSpacing: layouts.LETTER_SPACING_SMALL,
  } as TextStyle,
  word: {
    fontSize: fonts.size.targetWord,
    fontWeight: fonts.weight.lightBold as TextStyle["fontWeight"],
    fontFamily: fonts.family.targetWord,
    color: colors.HOME_TARGET_WORD,
    letterSpacing: layouts.LETTER_SPACING_SMALL,
  } as TextStyle,

}

export default targetWord