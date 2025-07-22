import { asEntry } from "@/util/animations";
import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

/**
 * GameBoard
 * - Animated UI block that displays a scrore and pops
 * - Supports custom styling and entry animation
 */

function GameBoard({
  title,
  count,
  entering,
  style: style,
  styleAdjust: styleAdjust,
  width,
}: {
  title?: string;
  count?: string;
  entering?: EntryExitAnimationFunction | LayoutAnimation;

  style: {
    board: ViewStyle;
    container: StyleProp<ViewStyle>;
    countWrapper: StyleProp<ViewStyle>;
    title?: TextStyle;
    count?: TextStyle;
  };
  // Style override for themed packs
  styleAdjust?: {
    board: ViewStyle;
    text: TextStyle;
  };
  width: ViewStyle;
}): React.JSX.Element {
  return (
    <Animated.View
      style={[style.board, styleAdjust?.board, width]}
      entering={asEntry(entering)}
      accessible={true}
      accessibilityRole="text"
      accessibilityLabel={`${title}: ${count}`}
    >
      <View style={style.container}>
        {/* Title label */}
        <Text style={[style.title, styleAdjust?.text]}>{title}</Text>

        {/* Count value */}
        <View style={style.countWrapper}>
          <Text
            style={[style.count, styleAdjust?.text]}
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.5}
          >
            {count}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default GameBoard;
