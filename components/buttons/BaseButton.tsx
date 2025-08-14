import { asEntry } from "@/util/animations";
import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  type AccessibilityRole,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

/**
 * BaseButton
 * - Reusable animated button
 */

function BaseButton({
  title,
  subtitle,
  icon,
  onPress,
  entering,
  accessibilityRole,
  accessibilityLabel,
  buttonStyle,
  iconStyle,
  titleStyle,
  subtitleStyle,
  textRowStyle,
  textColumnStyle,
}: {
  title?: string;
  subtitle?: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
  entering?: EntryExitAnimationFunction | LayoutAnimation;
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
  buttonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  textRowStyle?: ViewStyle;
  textColumnStyle?: ViewStyle;
}): React.JSX.Element {
  return (
    <Animated.View entering={asEntry(entering)}>
      <Pressable
        onPress={onPress}
        accessible
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [buttonStyle, { opacity: pressed ? 0.7 : 1 }]}
      >
        <View style={textRowStyle}>
          {icon && <Image source={icon} style={iconStyle} resizeMode="contain" />}
          <View style={textColumnStyle}>
            <Text allowFontScaling={false} style={titleStyle}>
              {title}
            </Text>
            {subtitle && (
              <Text allowFontScaling={false} style={subtitleStyle}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default BaseButton;
