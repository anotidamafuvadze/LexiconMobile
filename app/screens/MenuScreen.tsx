import { useRouter } from "expo-router";
import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import SoundButton from "@/components/buttons/SoundButton";

import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import useLayouts from "@/constants/layouts";

import images from "@/constants/images";
import useButtons from "@/styles/buttons";
import LinkingButton from "@/components/buttons/LinkingButton";


/**
 * MenuScreen
 * - Main menu: choose word pack, change difficulty, view instructions, rate app
 */

function MenuScreen() {
  const router = useRouter();
  const { playClickSound } = useSound();
  const { currentTheme } = useWord();
  const layouts = useLayouts();
  const buttons = useButtons();

  // Handle menu button presses
  const handleButtonPress = (button: string) => () => {
    playClickSound();

    switch (button) {
      case "Resume":
        router.push({
          pathname: "/screens/HomeScreen",
          params: { packName: currentTheme },
        });
        break;

      case "WordPack":
      case "Difficulty":
      case "Instruction":
        router.push(`/screens/${button}Screen`);
        break;

      case "Rate":
        Alert.alert("Coming Soon", "You'll be able to rate the app once it's live!");
        break;

      default:
        if (__DEV__) console.warn(`Unhandled MenuScreen button: ${button}`);
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
    <SafeAreaView style={styles.container}>
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
            soundEffect={playClickSound}
            title="Resume"
            icon={images.icons.resumeButton}
            toScreen="HomeScreen"
            fromScreen="MenuScreen"
            style={buttons.menuScreen}
            styleAdjust={{
              transform: [{ scale: layouts.RESUME_BUTTON_SCALE }],
              marginBottom: layouts.RESUME_BUTTON_MARGIN_BOTTOM,
            }}
            accessibilityRole="button"
            accessibilityLabel="Resume your game"
          />

          {/* Word Packs */}
          <GameButton
            title="Word Packs"
            onPress={handleButtonPress("WordPack")}
            style={buttons.menuScreen}
            accessibilityRole="button"
            accessibilityLabel="Choose a word pack"
          />

          {/* Difficulty */}
          <GameButton
            title="Difficulty"
            onPress={handleButtonPress("Difficulty")}
            style={buttons.menuScreen}
            accessibilityRole="button"
            accessibilityLabel="Change the difficulty"
          />

          {/* Instructions */}
          <GameButton
            title="How To Play"
            onPress={handleButtonPress("Instruction")}
            style={buttons.menuScreen}
            accessibilityRole="button"
            accessibilityLabel="Learn how to play"
          />

          {/* Rate Us */}
          <GameButton
            title="Rate Us"
            onPress={handleButtonPress("Rate")}
            style={buttons.menuScreen}
            accessibilityRole="button"
            accessibilityLabel="Rate this app"
          />

          {/* Social Media Links */}

          <View style={{flexDirection: "row"}}>
            <LinkingButton icon={images.icons.tiktokLogo} buttonStyle={buttons.menuScreen.socialMediaButton} iconStyle={buttons.menuScreen.socialMediaIcon} appUrl={"tiktok://user/@lexiconthegame"} webUrl={"https://www.tiktok.com/@lexiconthegame"} accessibilityRole={"none"} accessibilityLabel={""}/>
            <LinkingButton icon={images.icons.instagramLogo} buttonStyle={buttons.menuScreen.socialMediaButton} iconStyle={buttons.menuScreen.socialMediaIcon} appUrl={"instagram://user?username=lexiconthegame"} webUrl={"https://www.instagram.com/lexiconthegame"} accessibilityRole={"none"} accessibilityLabel={""}/>
            <LinkingButton icon={images.icons.xLogo} buttonStyle={buttons.menuScreen.socialMediaButton} iconStyle={buttons.menuScreen.socialMediaIcon} appUrl={"twitter://user?screen_name=lexiconthegame"} webUrl={"https://x.com/lexiconthegame"} accessibilityRole={"none"} accessibilityLabel={""}/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default MenuScreen;
