// React and React Native
import React from "react";
import { View, Text } from "react-native";

// Styles
import splash from "@/styles/splash";

/**
 * Splash
 * - Displays a congratulatory overlay message (e.g., "You Won!")
 * - Accepts optional custom heading text
 */
function Splash({ heading = "You Won!" }: { heading?: string }) {
  return (
    <View style={splash.container}>
      <Text style={splash.splashText}>{heading}</Text>
    </View>
  );
}

export default Splash;
