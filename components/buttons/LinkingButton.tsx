import React, { useEffect } from "react";
import {
  Image,
  Linking,
  Pressable,
  View,
  type AccessibilityRole,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
} from "react-native-reanimated";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
/**
 * Linking Button
 * - Links to social media accounts
 */

// TODO: test on android
// TODO: make button animate slightly bounce up every few seconds

function LinkingButton({
  icon,
  buttonStyle,
  iconStyle,
  appUrl,
  webUrl,
  accessibilityRole,
  accessibilityLabel,
}: {
  icon: ImageSourcePropType;
  buttonStyle: StyleProp<ViewStyle>;
  iconStyle: StyleProp<ImageStyle>;
  appUrl: string;
  webUrl: string;
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
}): React.JSX.Element {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const handleOnPress = () => {
    const openSocialLink = async (appUrl: string, webUrl: string) => {
      try {
        const supported = await Linking.canOpenURL(appUrl);
        await Linking.openURL(supported ? appUrl : webUrl);
      } catch (error) {
        console.error("Failed to open social link:", error);
      }
    };
    openSocialLink(appUrl, webUrl);
  };

useEffect(() => {
  opacity.value = withSpring(1);

  const bounceUp = withSpring(-10, {
    damping: 8,
    stiffness: 120,
    mass: 0.5,
  });

  const bounceDown = withSpring(0, {
    damping: 10,
    stiffness: 150,
    mass: 0.5,
  });

  // Bounce + scale together → delay → repeat
  translateY.value = withRepeat(
    withSequence(
      bounceUp,
      withDelay(50, bounceDown),  // optional delay at top
      withDelay(1500, withSpring(0)) // idle at bottom
    ),
    -1
  );
}, []);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value}],
    };
  });

  return (
    <AnimatedPressable style={animatedStyle}>
      <Pressable
        onPress={handleOnPress}
        accessible
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [buttonStyle, { opacity: pressed ? 0.7 : 1 }]}
      >
        <View style={buttonStyle}>
          <Image source={icon} style={iconStyle} resizeMode="contain" />
        </View>
      </Pressable>
    </AnimatedPressable>
  );
}

export default LinkingButton;
