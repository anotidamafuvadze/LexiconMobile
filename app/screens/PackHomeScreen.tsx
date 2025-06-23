// React and React Native
import { useLocalSearchParams } from "expo-router";
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
import layouts from "@/constants/layouts";
import packThemes from "@/styles/themes";

// Components
import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import BaseHeader from "@/components/headers/BaseHeader";
import GameBoard from "@/components/status/GameBoard";
import TargetWord from "@/components/status/TargetWord";

// Styles
import GameGrid from "@/components/status/GameGrid";
import buttons from "@/styles/buttons";
import gameBoard from "@/styles/gameBoard";
import gameGrid from "@/styles/gameGrid";
import headers from "@/styles/headers";
import targetWord from "@/styles/targetWord";
import tile from "@/styles/tile";

/**
 * Pack screen
 * - Displays themed pack (Nature, Food, etc.) based on navigation params
 */
function PackHomeScreen() {
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();

  const { packName } = useLocalSearchParams<{ packName: string }>();
  const theme = packThemes[packName as keyof typeof packThemes];
  const backgroundImage =
    images.backgrounds.packs[packName as keyof typeof images.backgrounds.packs];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={backgroundImage}
        resizeMode="cover"
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
            count="0"
            entering={asEntry(animations.FALL_FAST)}
            style={gameBoard}
            styleAdjust={theme.gameBoard}
            width={{ width: layouts.SCORE_BOARD_WIDTH }}
          />

          {/* Pops Board */}
          <GameBoard
            title="POPS"
            count="0"
            entering={asEntry(animations.FALL_SLOW)}
            style={gameBoard}
            styleAdjust={theme.gameBoard}
            width={{ width: layouts.POPS_BOARD_WIDTH }}
          />
        </View>

        {/* Grid */}
        <GameGrid gridStyle={gameGrid} gridStyleAdjust={theme.gameGrid} tileStyle={tile} />

        {/* Target Word */}
        <TargetWord style={targetWord} styleAdjust={theme.targetWord} />

        <View style={styles.buttonGroup}>
          <GameButton
            title="New Game"
            style={buttons.home}
            onPress={() => {
              playClickSound();
              generateNewWord(currentTheme);
            }}
            styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON_BG }}
          />

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
  background: {
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
