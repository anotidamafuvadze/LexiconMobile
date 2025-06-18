import React from "react";
import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import BaseButton from "./BaseButton";

/**
 * GameButton
 * - Reusable button component with icon, title, and subtitle
 * - Accepts a styleSet for layout and optional overrides via imageAdjust/styleAdjust
 * - Supports optional entry animations
 */
function GameButton({
  title,
  subtitle,
  icon,
  onPress,
  entering,
  style,
  iconAdjust,
  styleAdjust,
}: {
  title?: string;
  subtitle?: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
  entering?: EntryExitAnimationFunction | LayoutAnimation;
  style: {
    button: ViewStyle;
    icon?: ImageStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
    textRow?: ViewStyle;
    textColumn?: ViewStyle;
  };
  iconAdjust?: ImageStyle;
  styleAdjust?: ViewStyle;
}): React.JSX.Element {
  return (
    <BaseButton
      title={title}
      subtitle={subtitle}
      icon={icon}
      onPress={onPress}
      entering={entering}
      buttonStyle={[style.button, styleAdjust]}
      iconStyle={[style.icon, iconAdjust]}
      titleStyle={style.title}
      subtitleStyle={style.subtitle}
      textRowStyle={style.textRow}
      textColumnStyle={style.textColumn}
    />
  );
}

export default GameButton;
