import GameButton from "@/components/buttons/GameButton";
import colors from "@/constants/colors";
import images from "@/constants/images";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import buttons from "@/styles/buttons";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * InstructionScreen
 * - Displays how to play the game
 */
function FirstInstructionScreen() {
  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();
  const { startNewGame } = useGame();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.instructionScreen}
        resizeMode={isTablet ? "contain" : "cover"}
      >
        <GameButton
          title="New Game"
          style={buttons.firstInstruction}
          onPress={() => {
            playClickSound();
            generateNewWord(currentTheme);
            startNewGame();
          }}
          styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON_BG }}
          accessibilityRole={"button"}
          accessibilityLabel={"Start a new game"}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  background: {
    flex: 1,
  },
});

export default FirstInstructionScreen;
