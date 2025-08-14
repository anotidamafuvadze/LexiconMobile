import { useWord } from "@/context/WordContext";
import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

/**
 * TargetWord
 * - Displays the current target word
 */
function TargetWord({
  style,
  styleAdjust,
}: {
  style: ViewStyle;
  styleAdjust?: {
    title: TextStyle;
    word: TextStyle;
  };
}): React.JSX.Element {
  const { targetWord } = useWord();

  return (
    <View style={style}>
      <Text allowFontScaling={false} style={styleAdjust?.title}>
        YOUR WORD:
      </Text>
      <Text allowFontScaling={false} style={styleAdjust?.word}>
        {targetWord}
      </Text>
    </View>
  );
}

export default TargetWord;
