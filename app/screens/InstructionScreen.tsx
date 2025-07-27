import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const [hasPlayedBefore, setHasPlayedBefore] = useState(false);
  const layouts = useLayouts();
  const buttons = useButtons();

  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  const title = hasPlayedBefore ? "Resume" : "New Game";
  const accessibilityLabel = hasPlayedBefore ? "Resume your game" : "Start a new game";

  const baseTop = hasPlayedBefore
    ? layouts.INSTRUCTION_BUTTON_TOP
    : layouts.INSTRUCTION_BUTTON_TOP_NEW;

  const adjustedTop = Platform.OS === "android" && !isTablet ? baseTop + 40 : baseTop;

  useEffect(() => {
    const checkIfPlayed = async () => {
      const stored = await AsyncStorage.getItem("gameState");
      if (stored) setHasPlayedBefore(true);
    };
    checkIfPlayed();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.backgrounds.instructionScreen}
        style={styles.background}
        resizeMode={isTablet ? "contain" : "cover"}
      >
        {/* Back button */}
        {hasPlayedBefore && (
          <NavigationButton
            icon={images.icons.backButton}
            style={buttons.backButton}
            toScreen="MenuScreen"
            fromScreen="InstructionScreen"
            soundEffect={playClickSound}
            accessibilityRole="button"
            accessibilityLabel="Go back to menu"
          />
        )}

        {/* Action button: "New Game" or "Resume" */}
        <NavigationButton
          title={title}
          soundEffect={playClickSound}
          toScreen="HomeScreen"
          fromScreen="DifficultyScreen"
          style={buttons.instruction}
          styleAdjust={{ top: adjustedTop }}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  background: {
    flex: 1,
  },
});

export default InstructionScreen;
