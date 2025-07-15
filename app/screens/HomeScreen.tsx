import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import colors from "@/constants/colors";
import images from "@/constants/images";
import layouts from "@/constants/layouts";
import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import BaseHeader from "@/components/headers/BaseHeader";
import GameBoard from "@/components/status/GameBoard";
import TargetWord from "@/components/status/TargetWord";
import GameGrid from "@/components/status/GameGrid";
import { useGame } from "@/context/GameContext";
import buttons from "@/styles/buttons";
import gameBoard from "@/styles/gameBoard";
import gameGrid from "@/styles/gameGrid";
import headers from "@/styles/headers";
import targetWord from "@/styles/targetWord";
import tile from "@/styles/tile";

/**
 * Home screen
 * - Displays game boards, action buttons, and target word
 */
function HomeScreen() {
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();
  const { startNewGame, score, pops } = useGame();

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
          {/* Score Board */}
          <GameBoard
            title="SCORE"
            count={String(score)}
            style={gameBoard}
            width={{ width: layouts.SCORE_BOARD_WIDTH }}
          />
          {/* Pops Board */}
          <GameBoard
            title="POPS"
            count={String(pops)}
            style={gameBoard}
            width={{ width: layouts.POPS_BOARD_WIDTH }}
          />
        </View>

        {/* Grid */}
        <GameGrid
          gridStyle={gameGrid}
          tileStyle={tile}
          targetTileColor={colors.HOME_GRID_TARGET_TILE}
          tileColor={colors.HOME_GRID_TILE}
        />

        {/* Target Word */}
        <TargetWord style={targetWord} />

        <View style={styles.buttonGroup}>
          {/* New Game */}
          <GameButton
            title="New Game"
            style={buttons.home}
            onPress={() => {
              playClickSound();
              generateNewWord(currentTheme);
              startNewGame();
            }}
            styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON_BG }}
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
    backgroundColor: "#FFFFFF",
  },
  background: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  boardGroup: {
    flexDirection: "row",
    justifyContent: "center",
    top: layouts.GAME_BOARD_TOP,
    columnGap: layouts.GAME_BOARD_GAP,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    top: layouts.HOME_BUTTON_TOP,
    columnGap: layouts.HOME_BUTTON_GAP,
  },
});

export default HomeScreen;
