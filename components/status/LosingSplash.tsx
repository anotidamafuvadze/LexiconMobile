import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import splash from "@/styles/splash";
import game from "@/constants/game";

/**
 * LosingSplash
 * Displays a "You Lost" overlay message with a fade-in animation.
 */
function LosingSplash({ heading = "You Lost" }: { heading?: string }) {
  const [show, setShow] = useState(false);

  // Delay showing splash
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), game.SPLASH_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Animated.View
      style={splash.lost}
      accessible={true}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={heading}
      entering={FadeIn.duration(game.SPLASH_DURATION)}
    >
      <Text style={splash.text}>{heading}</Text>
    </Animated.View>
  );
}

export default LosingSplash;
