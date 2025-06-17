// React and React Native
import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

// Animation
import { asEntry } from "@/util/animations";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

/**
 * GameBoard
 * - Animated UI block that displays a title and a count value (e.g., remaining pops or score)
 * - Supports custom styling and entry animation
 */
function GameBoard({
  title,
  count,
  entering,
  style: styleSet,
  styleAdjust,
  textAdjust,
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
  styleAdjust?: ViewStyle;
  textAdjust?: TextStyle;
}): React.JSX.Element {
  return (
    <Animated.View style={[styleSet.board, styleAdjust]} entering={asEntry(entering)}>
      <View style={styleSet.container}>
        {/* Title label */}
        <Text style={[styleSet.title, textAdjust]}>{title}</Text>

        {/* Count value */}
        <View style={styleSet.countWrapper}>
          <Text
            style={[styleSet.count, textAdjust]}
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
