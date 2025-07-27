import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

/**
 * BaseHeader
 * - Reusable title and subtitle header
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
  boldText?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  boldTextStyle?: TextStyle;
}): React.JSX.Element {
  return (
    <View style={containerStyle}>
      {title && <Text style={titleStyle}>{title}</Text>}
      {subtitle && (
        <Text style={subtitleStyle}>
          {subtitle}
          {boldText && <Text style={boldTextStyle}>{boldText}</Text>}
        </Text>
      )}
    </View>
  );
}

export default BaseHeader;
