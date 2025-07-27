import React from "react";
import { useRouter } from "expo-router";
import { getScreenPath, ScreenName } from "@/util/navigation";
import BaseButton from "./BaseButton";

import type { AccessibilityRole, ImageSourcePropType } from "react-native";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";

/**
 * NavigationButton
 * - Reusable animated button that navigates to a target screen
 */

function NavigationButton({
  title,
  icon,
  soundEffect,
  entering,
  toScreen,
  fromScreen,
  style,
  iconAdjust,
  styleAdjust,
  accessibilityRole,
  accessibilityLabel,
}: {
  title?: string;
  icon?: ImageSourcePropType;
  soundEffect: () => void;
  entering?: EntryExitAnimationFunction | LayoutAnimation;
  toScreen: ScreenName;
  fromScreen: string;
  style: {
    button?: ViewStyle;
    icon?: ImageStyle;
    title?: TextStyle;
    textRow?: ViewStyle;
    textColumn?: ViewStyle;
  };
  iconAdjust?: ImageStyle;
  styleAdjust?: ViewStyle;
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
}): React.JSX.Element {
  const router = useRouter();

  // Play sound and navigate to target screen
  const handlePress = () => {
    soundEffect();
    router.push({
      pathname: getScreenPath(toScreen),
      params: { from: fromScreen },
    });
  };

  return (
    <BaseButton
      title={title}
      icon={icon}
      onPress={handlePress}
      entering={entering}
      buttonStyle={[style.button, styleAdjust]}
      iconStyle={[style.icon, iconAdjust]}
      titleStyle={style.title}
      textRowStyle={style.textRow}
      textColumnStyle={style.textColumn}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export default NavigationButton;
