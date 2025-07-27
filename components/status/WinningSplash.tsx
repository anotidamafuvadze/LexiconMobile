import game from "@/constants/game";
import useSplashStyles from "@/styles/splash";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Text } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Animated, { FadeIn } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const isTablet = Math.min(width, height) >= 768;

/**
 * WinningSplash
 * - Displays a "You Win" overlay
 */

function WinningSplash({ heading = "You Won!" }: { heading?: string }) {
  const [visible, setVisible] = useState(false);
  const confettiRef = useRef<ConfettiCannon | null>(null);
  const splash = useSplashStyles();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), game.SPLASH_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Animated.View
      style={splash.win}
      accessible
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={heading}
      entering={FadeIn.duration(game.SPLASH_DURATION)}
    >
      {!isTablet && (
        <ConfettiCannon
          ref={confettiRef}
          count={game.CONFETTI_COUNT}
          fallSpeed={game.CONFETTI_FALL_SPEED}
          explosionSpeed={game.CONFETTI_EXPLOSION_SPEED}
          origin={game.CONFETTI_ORIGIN}
          colors={game.CONFETTI_COLORS}
          autoStart
          fadeOut
        />
      )}

      <Text style={splash.text}>{heading}</Text>
    </Animated.View>
  );
}

export default WinningSplash;
