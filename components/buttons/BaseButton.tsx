import { asEntry } from "@/util/animations";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
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
}): React.JSX.Element {
  return (
    <Animated.View entering={asEntry(entering)}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <View style={textRowStyle}>
          {icon && <Image source={icon} style={iconStyle} resizeMode="contain" />}
          <View style={textColumnStyle}>
            <Text style={titleStyle}>{title}</Text>
            {subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default BaseButton;
