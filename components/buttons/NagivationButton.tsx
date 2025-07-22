import { getScreenPath, ScreenName } from "@/util/navigation";
import { useRouter } from "expo-router";
import React from "react";
import type { AccessibilityRole } from "react-native";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type {
  EntryExitAnimationFunction,
  LayoutAnimation,
} from "react-native-reanimated";
import BaseButton from "./BaseButton";

/**
 * NavigationButton
 * - Reusable animated button that plays a sound and navigates to a target screen
 * - Optionally passes a "from" screen parameter to the destination route
 */
function NavigationButton({
  title,
  soundEffect,
  entering,
  toScreen,
  fromScreen,
  style: styleSet,
  styleAdjust,
  accessibilityRole,
  accessibilityLabel,
}: {
  title?: string;
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
  styleAdjust?: ViewStyle;
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
}): React.JSX.Element {
  const router = useRouter();

  // Handles navigation and sound effect
  const handlePress = () => {
    soundEffect();
    router.push({
      pathname: getScreenPath(toScreen as ScreenName),
      params: { from: fromScreen },
    });
  };

  return (
    <BaseButton
      title={title}
      onPress={handlePress}
      entering={entering}
      buttonStyle={[styleSet.button, styleAdjust]}
      titleStyle={styleSet.title}
      textRowStyle={styleSet.textRow}
      textColumnStyle={styleSet.textColumn}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export default NavigationButton;
