import React from "react";
import { Dimensions, ImageBackground, Platform, StyleSheet } from "react-native";

import NavigationButton from "@/components/buttons/NagivationButton";
import useLayouts from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";

import colors from "@/constants/colors";
import images from "@/constants/images";
import useButtons from "@/styles/buttons";

/**
 * InstructionScreen
 * - Displays how to play the game.
 * - Shows "New Game" if first time, otherwise "Resume".
 */

function InstructionScreen() {
  const { playClickSound } = useSound();
  const layouts = useLayouts();
  const buttons = useButtons();

  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  return (
    <ImageBackground
      source={images.backgrounds.instructionScreen}
      style={styles.background}
      resizeMode={isTablet ? "contain" : "cover"}
    >
      {/* Resume Button */}
      <NavigationButton
        title="Resume"
        soundEffect={playClickSound}
        toScreen="HomeScreen"
        fromScreen="InstructionScreen"
        style={buttons.instruction}
        styleAdjust={{ top: layouts.INSTRUCTION_BUTTON_TOP }}
        accessibilityRole="button"
        accessibilityLabel="Resume your game"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});

export default InstructionScreen;
