import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import useLayouts from "@/constants/layouts";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";

import animations from "@/constants/animations";
import colors from "@/constants/colors";
import images from "@/constants/images";
import useButtons from "@/styles/buttons";
import { asEntry } from "@/util/animations";

/**
 * DifficultySelection
 * - Lets users choose between Easy, Normal, or Hard difficulty.
 */

function DifficultySelection() {
  const router = useRouter();
  const { startNewGame } = useGame();
  const { generateNewWord, setTheme } = useWord();
  const { playClickSound, playPopSound } = useSound();
  const layouts = useLayouts();
  const buttons = useButtons();

  // Handle difficulty button press
  const handleButtonPress = (mode: string) => {
    playPopSound();
    setTheme(mode);
    generateNewWord(mode);
    startNewGame();
    router.push("/screens/HomeScreen");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      backgroundColor: colors.WHITE,
    },
    buttonGroup: {
      flex: 1,
      top: layouts.DIFFICULTY_BUTTON_TOP,
      alignItems: "center",
    },
  });

  return (
    <ImageBackground
      source={images.backgrounds.difficultySelectionScreen}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Back button */}
      <NavigationButton
        icon={images.icons.backButton}
        style={buttons.backButton}
        toScreen="MenuScreen"
        fromScreen="DifficultyScreen"
        soundEffect={playClickSound}
        accessibilityRole="button"
        accessibilityLabel="Go back to menu"
      />

      <View style={styles.buttonGroup}>
        {/* Easy */}
        <GameButton
          icon={images.labels.easy}
          style={buttons.difficulty}
          styleAdjust={{ backgroundColor: colors.EASY_BUTTON_BG }}
          iconAdjust={{
            transform: [{ scale: layouts.EASY_BUTTON_SCALE }],
            position: "absolute",
            alignContent: "center",
          }}
          entering={asEntry(animations.BOUNCE_IN)}
          onPress={() => handleButtonPress("easy")}
          accessibilityRole="button"
          accessibilityLabel="Select easy"
        />

        {/* Normal */}
        <GameButton
          icon={images.labels.normal}
          style={buttons.difficulty}
          styleAdjust={{ backgroundColor: colors.NORMAL_BUTTON_BG }}
          iconAdjust={{
            transform: [{ scale: layouts.NORMAL_BUTTON_SCALE }],
            position: "absolute",
            alignContent: "center",
          }}
          entering={asEntry(animations.BOUNCE_IN)}
          onPress={() => handleButtonPress("normal")}
          accessibilityRole="button"
          accessibilityLabel="Select normal"
        />

        {/* Hard */}
        <GameButton
          icon={images.labels.hard}
          style={buttons.difficulty}
          styleAdjust={{ backgroundColor: colors.HARD_BUTTON_BG }}
          iconAdjust={{
            transform: [{ scale: layouts.HARD_BUTTON_SCALE }],
            position: "absolute",
            alignContent: "center",
          }}
          entering={asEntry(animations.BOUNCE_IN)}
          onPress={() => handleButtonPress("hard")}
          accessibilityRole="button"
          accessibilityLabel="Select hard"
        />
      </View>
    </ImageBackground>
  );
}

export default DifficultySelection;
