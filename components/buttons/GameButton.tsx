import React from "react";
import BaseButton from "./BaseButton";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import type { AccessibilityRole, ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native";

/**
 * GameButton
 * - Reusable animated button
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
  accessibilityRole,
  accessibilityLabel,
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
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
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
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export default GameButton;
