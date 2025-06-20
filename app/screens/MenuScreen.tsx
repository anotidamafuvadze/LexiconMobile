// React and React Native
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";

// Constants
import images from "@/constants/images";
import layouts from "@/constants/layouts";

// Components
import GameButton from "@/components/buttons/GameButton";
import SoundButton from "@/components/buttons/SoundButton";

// Styles
import buttons from "@/styles/buttons";

/**
 * Main menu screen
 * - Allows users to resume play, access Word Packs, Game Lab, instructions, and rate the app.
 */
function MenuScreen() {
  const router = useRouter();
  const { playClickSound } = useSound();
  const { currentTheme } = useWord();

  // Handle menu button presses
  const handleButtonPress = (buttonPressed: string) => () => {
    playClickSound();

    switch (buttonPressed) {
      // Resume play
      case "Resume":
        if (["Default", "Easy", "Normal", "Hard"].includes(currentTheme)) {
          router.replace("/screens/HomeScreen"); // Go to Home Screen for default difficulty
        } else {
          router.replace({
            pathname: "/screens/PackHomeScreen", // Go to Pack screen for custom theme
            params: { packName: currentTheme },
          });
        }
        break;

      // Navigate buttons
      case "WordPack":
      case "GameLab":
      case "Instruction":
        router.replace(`/screens/${buttonPressed}Screen`);
        break;

      // App Rating
      case "Rate":
        // TODO: Open app store for rating
        break;

      default:
        if (__DEV__) console.warn(`Unhandled MenuScreen button press: ${buttonPressed}`);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.menuScreen}
        resizeMode="cover"
      >
        {/* Sound toggle */}
        <View style={styles.soundWrapper}>
          <SoundButton />
        </View>

        <View style={styles.buttonGroup}>
          {/* Resume */}
          <GameButton
            title="Resume"
            icon={images.icons.resumeButton}
            onPress={handleButtonPress("Resume")}
            style={buttons.menuScreen}
            styleAdjust={{
              transform: [{ scale: layouts.RESUME_BUTTON_SCALE }],
              marginBottom: layouts.RESUME_BUTTON_MARGIN_BOTTOM,
            }}
          />

          {/* Word Packs */}
          <GameButton
            title="Word Packs"
            onPress={handleButtonPress("WordPack")}
            style={buttons.menuScreen}
          />

          {/* Game Lab */}
          <GameButton
            title="Game Lab"
            onPress={handleButtonPress("GameLab")}
            style={buttons.menuScreen}
          />

          {/* Instructions */}
          <GameButton
            title="How To Play"
            onPress={handleButtonPress("Instruction")}
            style={buttons.menuScreen}
          />

          {/* App Rating */}
          <GameButton
            title="Rate Us"
            onPress={handleButtonPress("Rate")}
            style={buttons.menuScreen}
            styleAdjust={{
              transform: [{ scale: layouts.RATE_BUTTON_SCALE }],
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
  soundWrapper: {
    position: "absolute",
    top: layouts.SOUND_BUTTON_TOP,
    alignSelf: "center",
    zIndex: 10,
  },
  buttonGroup: {
    top: layouts.MENU_BUTTON_TOP, // Vertical offset
    alignItems: "center",
  },
});

export default MenuScreen;
