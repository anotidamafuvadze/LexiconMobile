// React and React Native
import React, { useRef } from "react";
import { Text, View } from "react-native";

// Animation
import ConfettiCannon from "react-native-confetti-cannon";

// Styles
import splash from "@/styles/splash";

/**
 * Splash
 * - Displays a congratulatory overlay message (e.g., "You Won!")
 * - Accepts optional custom heading text
 */

// TODO: Put variables (confetti colors, amount of confetti, speed, origin in game constant)
function Splash({ heading = "You Won!" }: { heading?: string }) {
  const confettiRef = useRef<ConfettiCannon | null>(null);
  const confettiColors = [
    "#B8D9C4", // soft pale green
    "#A6CBB3", // gentle sage green
    "#95BD9F", // muted mint green
    "#85AF8B", // earthy leafy green
    "#729F7A", // subdued olive green
    "#618967", // dusty forest green
    "#506F56", // deeper muted green
    "#7F9E8A", // soft moss green
    "#9EB99C", // pastel green with a bit more saturation
    "#B2C8B0", // light gray-green with some richness
  ];

  // TODO: PLAY WINNING SOUND EFFECT

  return (
    <View style={splash.container}>
      <ConfettiCannon
        ref={confettiRef}
        count={100}
        fallSpeed={3000}
        origin={{ x: 0, y: 800 }}
        autoStart={true}
        fadeOut={true}
        explosionSpeed={5}
        colors={confettiColors}
      />
      <Text style={splash.splashText}>{heading}</Text>
    </View>
  );
}

export default Splash;
