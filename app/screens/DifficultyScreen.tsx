
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import animations from "@/constants/animations";
import { asEntry } from "@/util/animations";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import colors from "@/constants/colors";
import images from "@/constants/images";
import BackButton from "@/components/buttons/BackButton";
import GameButton from "@/components/buttons/GameButton";
import buttons from "@/styles/buttons";
import { useGame } from "@/context/GameContext";

/**
 * Difficulty selection screen
 * - Allows users to choose between an Easy, Normal, or Hard difficulty
 */
function DifficultySelection() {
  const router = useRouter();
  const { generateNewWord, setTheme } = useWord();
  const { startNewGame } = useGame();
  const { playPopSound } = useSound();

  // Handles difficulty selection
  const handleButtonPress = (mode: string) => {
    playPopSound();
    setTheme(mode);
    generateNewWord(mode); // Update theme and word
    startNewGame();
    router.push("/screens/HomeScreen"); // Go to home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.difficultySelectionScreen}
        resizeMode="cover"
      >
        {/* Back Button */}
        <BackButton toScreen="MenuScreen" from="DifficultyScreen" />

        <View style={styles.buttonGroup}>
          {/* Easy */}
          <GameButton
            icon={images.labels.easy}
            onPress={() => handleButtonPress("easy")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.EASY_BUTTON }}
            iconAdjust={{
              transform: [{ scale: 0.23 }],
              alignContent: "center",
              position: "absolute",
            }}
          />

          {/* Normal */}
          <GameButton
            icon={images.labels.normal}
            onPress={() => handleButtonPress("normal")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.NORMAL_BUTTON }}
            iconAdjust={{
              transform: [{ scale: 0.3 }],
              alignContent: "center",
              position: "absolute",
            }}
          />

          {/* Hard */}
          <GameButton
            icon={images.labels.hard}
            onPress={() => handleButtonPress("hard")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.HARD_BUTTON }}
            iconAdjust={{
              transform: [{ scale: 0.32 }],
              alignContent: "center",
              position: "absolute",
            }}
          />
        </View>
      </ImageBackground>
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
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DifficultySelection;
