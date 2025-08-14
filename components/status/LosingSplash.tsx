import game from "@/constants/game";
import useSplashStyles from "@/styles/splash";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

/**
 * LosingSplash
 * - Displays a "You Lost" overlay
 */
function LosingSplash({ heading = "You Lost" }: { heading?: string }) {
  const [visible, setVisible] = useState(false);
  const splash = useSplashStyles();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), game.SPLASH_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Animated.View
      style={splash.lost}
      entering={FadeIn.duration(game.SPLASH_DURATION)}
      accessible
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={heading}
    >
      <Text allowFontScaling={false} style={splash.text}>
        {heading}
      </Text>
    </Animated.View>
  );
}

export default LosingSplash;
