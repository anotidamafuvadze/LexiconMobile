import { useRouter } from "expo-router";
import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import * as StoreReview from "expo-store-review";

import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import SoundButton from "@/components/buttons/SoundButton";

import useLayouts from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";

import LinkingButton from "@/components/buttons/LinkingButton";
import images from "@/constants/images";
import useButtons from "@/styles/buttons";

// TODO: turn game buttons into navigation buttons and get rid of handle button press

/**
 * MenuScreen
 * - Main menu: choose word pack, change difficulty, view instructions, rate app
 */

function MenuScreen() {
  const { playClickSound } = useSound();
  const layouts = useLayouts();
  const buttons = useButtons();

  // Handle menu button presses
  const handleRatePress = () => async () => {
    playClickSound();
    try {
      const available = await StoreReview.isAvailableAsync();
      if (available) {
        StoreReview.requestReview();
      } else {
        Alert.alert(
          "Thanks!",
          "Ratings will be available once the app is live."
        );
      }
    } catch {
      Alert.alert("Thanks!", "Ratings will be available once the app is live.");
    }
  };

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
    buttonWrapper: {
      top: layouts.MENU_BUTTON_TOP,
      alignItems: "center",
    },
  });

  return (
    <ImageBackground
      source={images.backgrounds.menuScreen}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Sound toggle */}
      <View style={styles.soundWrapper}>
        <SoundButton />
      </View>

      <View style={styles.buttonWrapper}>
        {/* Resume */}
        <NavigationButton
          title="Resume"
          soundEffect={playClickSound}
          toScreen="HomeScreen"
          fromScreen="MenuScreen"
          icon={images.icons.resumeButton}
          style={buttons.menuScreen}
          styleAdjust={{
            transform: [{ scale: layouts.RESUME_BUTTON_SCALE }],
            marginBottom: layouts.RESUME_BUTTON_MARGIN_BOTTOM,
          }}
          accessibilityRole="button"
          accessibilityLabel="Resume your game"
        />

        {/* Word Packs */}
        <NavigationButton
          title="Word Packs"
          soundEffect={playClickSound}
          toScreen="WordPackScreen"
          fromScreen="MenuScreen"
          style={buttons.menuScreen}
          accessibilityRole="button"
          accessibilityLabel="Choose a word pack"
        />

        {/* Difficulty */}
        <NavigationButton
          title="Difficulty"
          soundEffect={playClickSound}
          toScreen="DifficultyScreen"
          fromScreen="MenuScreen"
          style={buttons.menuScreen}
          accessibilityRole="button"
          accessibilityLabel="Change the difficulty"
        />

        {/* Instructions */}
        <NavigationButton
          title="How To Play"
          soundEffect={playClickSound}
          toScreen="InstructionScreen"
          fromScreen="MenuScreen"
          style={buttons.menuScreen}
          accessibilityRole="button"
          accessibilityLabel="Learn how to play"
        />

        {/* Rate Us */}
        <GameButton
          title="Rate Us"
          onPress={handleRatePress()}
          style={buttons.menuScreen}
          accessibilityRole="button"
          accessibilityLabel="Rate this app"
        />

        {/* Social Media Links */}

        <View style={{ flexDirection: "row" }}>
          <LinkingButton
            icon={images.icons.tiktokLogo}
            buttonStyle={buttons.menuScreen.socialMediaButton}
            iconStyle={buttons.menuScreen.socialMediaIcon}
            appUrl={"tiktok://user/@lexiconthegame"}
            webUrl={"https://www.tiktok.com/@lexiconthegame"}
            accessibilityRole={"none"}
            accessibilityLabel={""}
          />
          <LinkingButton
            icon={images.icons.instagramLogo}
            buttonStyle={buttons.menuScreen.socialMediaButton}
            iconStyle={buttons.menuScreen.socialMediaIcon}
            appUrl={"instagram://user?username=lexiconthegame"}
            webUrl={"https://www.instagram.com/lexiconthegame"}
            accessibilityRole={"none"}
            accessibilityLabel={""}
          />
          <LinkingButton
            icon={images.icons.xLogo}
            buttonStyle={buttons.menuScreen.socialMediaButton}
            iconStyle={buttons.menuScreen.socialMediaIcon}
            appUrl={"twitter://user?screen_name=lexiconthegame"}
            webUrl={"https://x.com/lexiconthegame"}
            accessibilityRole={"none"}
            accessibilityLabel={""}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default MenuScreen;
