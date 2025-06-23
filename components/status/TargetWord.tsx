// Core React and React Native
import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

// Context
import { useWord } from "@/context/WordContext";

/**
 * TargetWord
 * - Displays the current target word from context
 * - Supports optional style overrides for label and word text
 */
function TargetWord({
  style,
  styleAdjust,
}: {
  style: {
    container: ViewStyle;
    title: TextStyle;
    word: TextStyle;
  };
  styleAdjust?: {
    title: TextStyle;
    word: TextStyle;
  };
}): React.JSX.Element {
  const { targetWord } = useWord();

  return (
    <View style={style.container}>
      <Text style={[style.title, styleAdjust?.title]}>YOUR WORD:</Text>
      <Text style={[style.word, styleAdjust?.word]}>{targetWord}</Text>
    </View>
  );
}

export default TargetWord;
