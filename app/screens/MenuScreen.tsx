import GameButton from "@/components/buttons/GameButton";
import SoundButton from "@/components/buttons/SoundButton";
import images from "@/constants/images";
import layouts from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import buttons from "@/styles/buttons";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Main menu screen
 * - Allows users resume, choose Word Packs, change difficulty,
 * view instructions, or rate the app.
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
        if (["default", "easy", "normal", "hard"].includes(currentTheme)) {
          router.push("/screens/HomeScreen"); // Go to Home Screen for default difficulty
        } else {
          router.push({
            pathname: "/screens/PackHomeScreen", // Go to Pack screen for custom theme
            params: { packName: currentTheme },
          });
        }
        break;

      // Navigate buttons
      case "WordPack":
      case "Difficulty":
      case "FirstInstruction":
        router.push(`/screens/${buttonPressed}Screen`);
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
            accessibilityRole={"button"}
            accessibilityLabel="Resume your game"
          />

          {/* Word Packs */}
          <GameButton
            title="Word Packs"
            onPress={handleButtonPress("WordPack")}
            style={buttons.menuScreen}
            accessibilityRole={"button"}
            accessibilityLabel="Choose a word pack"
          />

          {/* Difficulty */}
          <GameButton
            title="Difficulty"
            onPress={handleButtonPress("Difficulty")}
            style={buttons.menuScreen}
            accessibilityRole={"button"}
            accessibilityLabel="Change the difficulty"
          />

          {/* Instructions */}
          <GameButton
            title="How To Play"
            onPress={handleButtonPress("FirstInstruction")}
            style={buttons.menuScreen}
            accessibilityRole={"button"}
            accessibilityLabel="Learn how to play the game"
          />

          {/* App Rating */}
          <GameButton
            title="Rate Us"
            onPress={handleButtonPress("Rate")}
            style={buttons.menuScreen}
            styleAdjust={{
              transform: [{ scale: layouts.RATE_BUTTON_SCALE }],
            }}
            accessibilityRole={"button"}
            accessibilityLabel="Rate this app"
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
  },
  buttonGroup: {
    top: layouts.MENU_BUTTON_TOP,
    alignItems: "center",
  },
});

export default MenuScreen;
