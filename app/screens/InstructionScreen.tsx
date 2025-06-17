// React and React Native
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Constants
import images from "@/constants/images";

/**
 * InstructionScreen
 * - Displays how to play the game
 */
function InstructionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.defaultScreen}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});

export default InstructionScreen;
