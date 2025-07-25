import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import BaseHeader from "@/components/headers/BaseHeader";
import GameBoard from "@/components/status/GameBoard";
import GameGrid from "@/components/status/GameGrid";
import TargetWord from "@/components/status/TargetWord";
import animations from "@/constants/animations";
import colors from "@/constants/colors";
import images from "@/constants/images";
import layouts from "@/constants/layouts";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import buttons from "@/styles/buttons";
import gameBoard from "@/styles/gameBoard";
import gameGrid from "@/styles/gameGrid";
import headers from "@/styles/headers";
import targetWord from "@/styles/targetWord";
import packThemes from "@/styles/themes";
import tile from "@/styles/tile";
import { asEntry } from "@/util/animations";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Pack screen
 * - Displays themed pack (Nature, Food, etc.) based on navigation params
 */
function PackHomeScreen() {
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();
  const { startNewGame, score, pops } = useGame();
  const { packName } = useLocalSearchParams<{ packName: string }>();

  const theme = packThemes[packName as keyof typeof packThemes];
  const backgroundImage =
    images.backgrounds.packs[packName as keyof typeof images.backgrounds.packs];
  const tileColor = theme.gameGrid.tileColor;
  const targetTileColor = theme.gameGrid.targetTileColor;
  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={backgroundImage}
        resizeMode={isTablet ? "contain" : "cover"}
      >
        {/* Empty Header for alignment */}
        <BaseHeader
          containerStyle={headers.home.container}
          titleStyle={headers.home.title}
          subtitleStyle={headers.home.subtitle}
        />

        <View style={styles.boardGroup}>
          {/* Score Board */}
          <GameBoard
            title="SCORE"
            count={String(score)}
            entering={asEntry(animations.FALL_FAST)}
            style={gameBoard}
            styleAdjust={theme.gameBoard}
            width={{ width: layouts.SCORE_BOARD_WIDTH }}
          />

          {/* Pops Board */}
          <GameBoard
            title="POPS"
            count={String(pops)}
            entering={asEntry(animations.FALL_SLOW)}
            style={gameBoard}
            styleAdjust={theme.gameBoard}
            width={{ width: layouts.POPS_BOARD_WIDTH }}
          />
        </View>

        {/*  TODO: Adjust tile color in packs */}

        {/* Grid */}
        <GameGrid
          gridStyle={gameGrid}
          gridStyleAdjust={theme.gameGrid}
          tileStyle={tile}
          tileColor={tileColor}
          targetTileColor={targetTileColor}
        />

        {/* Target Word */}
        <TargetWord style={targetWord} styleAdjust={theme.targetWord} />

        <View style={styles.buttonGroup}>
          <GameButton
            title="New Game"
            style={buttons.home}
            onPress={() => {
              playClickSound();
              generateNewWord(currentTheme);
              startNewGame();
            }}
            styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON_BG }}
            accessibilityRole={"button"}
            accessibilityLabel={"Start a new game"}
          />

          <NavigationButton
            title="Menu"
            style={buttons.home}
            soundEffect={playClickSound}
            toScreen="MenuScreen"
            fromScreen="HomeScreen"
            accessibilityRole={"button"}
            accessibilityLabel="Open menu"
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
    backgroundColor: colors.WHITE,
  },
  background: {
    flex: 1,
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

export default PackHomeScreen;
