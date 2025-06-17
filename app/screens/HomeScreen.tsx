// React and React Native
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import { useRouter } from "expo-router";

// Constants
import colors from "@/constants/colors";
import images from "@/constants/images";
import layouts from "@/constants/layouts";

// Components
import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import BaseHeader from "@/components/headers/BaseHeader";
import GameBoard from "@/components/status/GameBoard";
import TargetWord from "@/components/status/TargetWord";

// Styles
import buttons from "@/styles/buttons";
import gameBoard from "@/styles/gameBoard";
import headers from "@/styles/headers";

/**
 * Home screen
 * - Displays game boards, action buttons, and target word
 */
function HomeScreen() {
  const router = useRouter();
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.defaultScreen}
        resizeMode="cover"
      >
        {/* Title Header */}
        <BaseHeader
          title="LEXICON"
          subtitle="Merge the letters and spell the"
          boldText=" word!"
          containerStyle={headers.home.container}
          titleStyle={headers.home.title}
          subtitleStyle={headers.home.subtitle}
          boldTextStyle={headers.home.boldSubtitle}
        />

        <View style={styles.boardGroup}>
          {/* TODO: Change score and pops dynamically */}
          {/* Score Board */}
          <GameBoard
            title="SCORE"
            count="0"
            style={gameBoard}
            styleAdjust={{ width: layouts.SCORE_BOARD_WIDTH }}
          />
          {/* Pops Board */}
          <GameBoard
            title="POPS"
            count="3"
            style={gameBoard}
            styleAdjust={{ width: layouts.POPS_BOARD_WIDTH }}
          />
        </View>

         {/* Grid (Used to visualize game layout) 
        <Image source={images.grids.home} style={styles.grid} /> */}

        {/* Target Word */}
        <TargetWord />

        <View style={styles.buttonGroup}>
          {/* New Game */}
          <GameButton
            title="New Game"
            style={buttons.home}
            onPress={() => {
              playClickSound();
              generateNewWord(currentTheme);
            }}
            styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON }}
          />

          {/* Menu */}
          <NavigationButton
            title="Menu"
            style={buttons.home}
            soundEffect={playClickSound}
            toScreen="MenuScreen"
            fromScreen="HomeScreen"
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
  grid: {
    width: 390,
    height: 390,
    alignSelf: "center",
    position: "absolute",
    top: 240,
    zIndex: 0,
  },
  background: {
    flex: 1,
  },
  boardGroup: {
    flexDirection: "row",
    justifyContent: "center",
    top: layouts.GAME_BOARD_TOP, // Vertical offset
    columnGap: layouts.GAME_BOARD_GAP, // Space between
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    top: layouts.HOME_BUTTON_TOP, // Vertical offset
    columnGap: layouts.HOME_BUTTON_GAP, // Space between
  },
});

export default HomeScreen;
