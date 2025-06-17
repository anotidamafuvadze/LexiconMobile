// Core React and React Native
import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

// Context
import { useWord } from "@/context/WordContext";

// Constants
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import metrics from "@/constants/layouts";

/**
 * TargetWord
 * - Displays the current target word from context
 * - Supports optional style overrides for label and word text
 */
function TargetWord({
  targetLabelStyle = styles.title,
  targetWordStyle = styles.targetWord,
}: {
  targetLabelStyle?: TextStyle;
  targetWordStyle?: TextStyle;
}): React.JSX.Element {
  const { targetWord } = useWord();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, targetLabelStyle]}>YOUR WORD:</Text>
      <Text style={[styles.targetWord, targetWordStyle]}>{targetWord}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    top: metrics.TARGET_WORD_TOP,
  } as ViewStyle,

  // "YOUR WORD:" label
  title: {
    fontSize: fonts.size.targetTitle,
    fontWeight: fonts.weight.lightBold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.WORD_PACK_TITLE,
    letterSpacing: metrics.LETTER_SPACING_SMALL,
  } as TextStyle,

  // Target word text
  targetWord: {
    fontSize: fonts.size.targetWord,
    fontWeight: fonts.weight.lightBold as TextStyle["fontWeight"],
    fontFamily: fonts.family.targetWord,
    color: colors.WORD_PACK_TITLE,
    letterSpacing: metrics.LETTER_SPACING_SMALL,
    marginTop: metrics.TARGET_WORD_MARGIN_TOP,
  } as TextStyle,
});

export default TargetWord;
