import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

/**
 * BaseHeader
 * - Reusable header component with a title and subtitle
 * - Supports optional bold text appended to the subtitle
 * - Accepts custom styles for layout and text
 */
function BaseHeader({
  title,
  subtitle,
  boldText,
  containerStyle,
  titleStyle,
  subtitleStyle,
  boldTextStyle,
}: {
  title?: string;
  subtitle?: string;
  boldText?: string; // Optional bold text appended to subtitle
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  boldTextStyle?: TextStyle;
}): React.JSX.Element {
  return (
    <View style={containerStyle}>
      {/* Title */}
      <Text style={titleStyle}>{title}</Text>

      {/* Subtitle */}
      <Text style={subtitleStyle}>
        {subtitle}
        {boldText && <Text style={boldTextStyle}>{boldText}</Text>}
      </Text>
    </View>
  );
}

export default BaseHeader;
