import { asEntry } from "@/util/animations";
import React from "react";
import type { AccessibilityRole } from "react-native";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

/**
 * BaseButton
 * - Reusable animated button with support for:
 *   - Customizable title, subtitle, and icon
 *   - Style overrides for layout and text
 *   - Optional entry animation using Reanimated
 */
function BaseButton({
  title,
  subtitle,
  onPress,
  icon,
  buttonStyle,
  iconStyle,
  titleStyle,
  subtitleStyle,
  textRowStyle,
  textColumnStyle,
  entering,
  accessibilityRole,
  accessibilityLabel,
}: {
  title?: string;
  subtitle?: string;
  onPress: () => void;
  icon?: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  textRowStyle?: ViewStyle;
  textColumnStyle?: ViewStyle;
  entering?: EntryExitAnimationFunction | LayoutAnimation;
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
}): React.JSX.Element {
  return (
    <Animated.View entering={asEntry(entering)}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [buttonStyle, { opacity: pressed ? 0.7 : 1 }]}
        accessible={true}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
      >
        <View style={textRowStyle}>
          {icon && <Image source={icon} style={iconStyle} resizeMode="contain" />}
          <View style={textColumnStyle}>
            <Text style={titleStyle}>{title}</Text>
            {subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default BaseButton;
