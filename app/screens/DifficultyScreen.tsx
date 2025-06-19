// React and React Native
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Animation
import animations from "@/constants/animations";
import { asEntry } from "@/util/animations";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";

// Constants
import colors from "@/constants/colors";
import images from "@/constants/images";

// Components
import BackButton from "@/components/buttons/BackButton";
import GameButton from "@/components/buttons/GameButton";
import buttons from "@/styles/buttons";

/**
 * Difficulty selection screen
 * - Allows users to choose between an Easy, Normal, or Hard difficulty
 */
function DifficultySelection() {
  const router = useRouter();
  const { generateNewWord, setCurrentTheme } = useWord();
  const { playPopSound } = useSound();

  // Handles difficulty selection
  const handleButtonPress = (mode: string) => {
    playPopSound();
    setCurrentTheme(mode);
    generateNewWord(mode); // Update theme and word
    router.replace("/screens/HomeScreen"); // Go to home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.difficultySelectionScreen}
        resizeMode="cover"
      >
        {/* Back Button */}
        <BackButton toScreen="GameLabScreen" from="DifficultyScreen" />

        <View style={styles.buttonGroup}>
          {/* Easy */}
          <GameButton
            title="EASY"
            onPress={() => handleButtonPress("Easy")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.EASY_BUTTON }}
          />

          {/* Normal */}
          <GameButton
            title="NORMAL"
            onPress={() => handleButtonPress("Normal")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.NORMAL_BUTTON }}
          />

          {/* Hard */}
          <GameButton
            title="HARD"
            onPress={() => handleButtonPress("Hard")}
            style={buttons.difficulty}
            entering={asEntry(animations.BOUNCE_IN)}
            styleAdjust={{ backgroundColor: colors.HARD_BUTTON }}
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
