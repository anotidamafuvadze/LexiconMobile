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
import buttons from "@/styles/buttons";
import gameBoard from "@/styles/gameBoard";
import headers from "@/styles/headers";

/**
 * Pack screen
 * - Displays themed pack (Nature, Food, etc.) based on navigation params
 */
function PackHomeScreen() {
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme, targetWord } = useWord();

  const { packName } = useLocalSearchParams<{ packName: string }>();
  const theme = packThemes[packName as keyof typeof packThemes];
  
  // Background images to be changed
  const backgroundImage =
    images.backgrounds.packs[packName as keyof typeof images.backgrounds.packs];
  const gridImage = images.grids[`${packName}` as keyof typeof images.grids];

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
            styleAdjust={{
              width: layouts.SCORE_BOARD_WIDTH,
              ...theme?.gameBoard,
            }}
            textAdjust={{ ...theme.text }}
          />

          {/* Pops Board */}
          <GameBoard
            title="POPS"
            count="0"
            entering={asEntry(animations.FALL_SLOW)}
            style={gameBoard}
            styleAdjust={{
              width: layouts.POPS_BOARD_WIDTH,
              ...theme?.gameBoard,
            }}
            textAdjust={{ ...theme.text }}
          />
        </View>

        {/* Grid (Used to visualize game layout)
        <Image source={gridImage} style={styles.grid} /> */}

        {/* Target Word */}
        <TargetWord
          targetLabelStyle={theme.targetLabel}
          targetWordStyle={theme.targetWord}
        />

        <View style={styles.buttonGroup}>
          <GameButton
            title="New Game"
            style={buttons.home}
            onPress={() => {
              playClickSound();
              generateNewWord(currentTheme);
            }}
            styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON }}
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
