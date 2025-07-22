import game from "@/constants/game";
import splash from "@/styles/splash";
import React, { useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import Animated, { FadeIn } from "react-native-reanimated";

/**
 * WinningSplash
 * Displays a "You Won!" overlay message with a fade-in and confetti animation.
 */
function WinningSplash({ heading = "You Won!" }: { heading?: string }) {
  const confettiRef = useRef<ConfettiCannon | null>(null);
  const [show, setShow] = useState(false);

  // Delay showing splash
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), game.SPLASH_TIMEOUT);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Animated.View
      style={splash.win}
      accessible={true}
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={heading}
      entering={FadeIn.duration(game.SPLASH_DURATION)}
    >
      <ConfettiCannon
        ref={confettiRef}
        count={game.CONFETTI_COUNT}
        fallSpeed={game.CONFETTI_FALL_SPEED}
        origin={game.CONFETTI_ORIGIN}
        autoStart
        fadeOut
        explosionSpeed={game.CONFETTI_EXPLOSION_SPEED}
        colors={game.CONFETTI_COLORS}
      />
      <Text style={splash.text}>{heading}</Text>
    </Animated.View>
  );
}

export default WinningSplash;
