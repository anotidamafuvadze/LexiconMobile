import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, useWindowDimensions, View } from "react-native";
import ViewShot from "react-native-view-shot";

import animations from "@/constants/animations";
import colors from "@/constants/colors";
import images from "@/constants/images";

import useLayouts from "@/constants/layouts";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";

import GameButton from "@/components/buttons/GameButton";
import BaseHeader from "@/components/headers/BaseHeader";
import GameBoard from "@/components/status/GameBoard";
import GameGrid from "@/components/status/GameGrid";
import TargetWord from "@/components/status/TargetWord";

import game from "@/constants/game";
import usePackThemes from "@/styles/themes";

import useButtons from "@/styles/buttons";
import useGameBoardStyles from "@/styles/gameBoard";
import useGameGridStyles from "@/styles/gameGrid";
import useHeaderStyles from "@/styles/headers";
import useTileStyles from "@/styles/tile";
import { asEntry } from "@/util/animations";
import Share from "react-native-share";

/**
 * HomeScreen
 * - Displays game board, target word, controls, and handles win sharing
 */
function HomeScreen() {
  const { playClickSound } = useSound();
  const { generateNewWord, currentTheme } = useWord();
  const { startNewGame, score, pops, status } = useGame();
  const router = useRouter();
  const layouts = useLayouts();
  const buttons = useButtons();
  const gameBoard = useGameBoardStyles();
  const headers = useHeaderStyles();
  const gameGrid = useGameGridStyles();
  const packThemes = usePackThemes();
  const tile = useTileStyles();

  //Default theme for built-in packs
  const effectiveTheme = ["easy", "normal", "hard"].includes(currentTheme)
    ? "default"
    : currentTheme;

  const theme = packThemes[effectiveTheme as keyof typeof packThemes];
  const backgroundImage =
    images.backgrounds.packs[effectiveTheme as keyof typeof images.backgrounds.packs];
  const tileColor = theme.gameGrid.tileColor;
  const targetTileColor = theme.gameGrid.targetTileColor;

  const { width, height } = useWindowDimensions();
  const isTablet = Math.min(width, height) >= 768;
  const [canClick, setCanClick] = useState(true);
  const hasSharedWin = useRef(false);
  const viewShotRef = useRef<ViewShot>(null);

  const captureScreenshot = async () => {
    try {
      const uri = await viewShotRef.current?.capture?.();
      return uri;
    } catch (error) {
      console.error("Failed to capture screenshot:", error);
      return null;
    }
  };

  const shareScreenshot = async (uri: string) => {
    try {
      const shareOptions = {
        title: "I beat Lexicon the Game",
        message: "Clearly better than you.",
        url: `file://${uri}`,
        type: "image/png",
      };

      await Share.open(shareOptions);
    } catch (error: any) {}
  };

  useEffect(() => {
    if (status === "WON" && !hasSharedWin.current) {
      setCanClick(false);
      hasSharedWin.current = true;

      const timer = setTimeout(async () => {
        const uri = await captureScreenshot();
        if (uri) await shareScreenshot(uri);
        setCanClick(true);
      }, game.SHARE_TIMEOUT);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
    },
    background: {
      flex: 1,
      width: "100%", // Add this
      height: "100%",
    },
    boardWrapper: {
      top: layouts.GAME_BOARD_TOP,
      flexDirection: "row",
      justifyContent: "center",
      columnGap: layouts.GAME_BOARD_GAP,
    },
    buttonWrapper: {
      top: layouts.HOME_BUTTON_TOP,
      flexDirection: "row",
      justifyContent: "center",
      columnGap: layouts.HOME_BUTTON_GAP,
    },
  });

  return (
    <>
      <ViewShot
        ref={viewShotRef}
        style={{ flex: 1 }}
        options={{ result: "tmpfile", format: "png", quality: 1 }}
      >
        <ImageBackground
          source={backgroundImage}
          style={StyleSheet.absoluteFill}
          resizeMode={isTablet ? "contain" : "cover"}
        >
          <View style={{ flex: 1 }}>
            {/* Header */}
            <BaseHeader
              title={effectiveTheme === "default" ? "LEXICON" : " "}
              subtitle={
                effectiveTheme === "default" ? "Merge the letters and spell the" : " "
              }
              boldText={effectiveTheme === "default" ? " word!" : undefined}
              containerStyle={headers.home.container}
              titleStyle={headers.home.title}
              subtitleStyle={headers.home.subtitle}
              boldTextStyle={headers.home.boldSubtitle}
            />

            {/* Score and Pops */}
            <View style={styles.boardWrapper}>
              <GameBoard
                title="SCORE"
                count={String(score)}
                style={gameBoard}
                styleAdjust={theme.gameBoard}
                width={{ width: layouts.SCORE_BOARD_WIDTH }}
                entering={asEntry(animations.FALL_FAST)}
              />
              <GameBoard
                title="POPS"
                count={String(pops)}
                style={gameBoard}
                styleAdjust={theme.gameBoard}
                width={{ width: layouts.POPS_BOARD_WIDTH }}
                entering={asEntry(animations.FALL_SLOW)}
              />
            </View>

            {/* Game Grid */}
            <GameGrid
              gridStyle={gameGrid}
              gridStyleAdjust={theme.gameGrid}
              tileStyle={tile}
              tileColor={tileColor}
              targetTileColor={targetTileColor}
            />

            {/* Target Word */}
            <TargetWord
              style={{ top: layouts.HOME_TARGET_WORD_TOP }}
              styleAdjust={theme.targetWord}
            />

            {/* Buttons */}
            <View style={styles.buttonWrapper}>
              <GameButton
                title="New Game"
                style={buttons.home}
                styleAdjust={{ backgroundColor: colors.NEW_GAME_BUTTON_BG }}
                onPress={async () => {
                  if (canClick) {
                    hasSharedWin.current = false;
                    playClickSound();
                    generateNewWord(currentTheme);
                    startNewGame();
                  }
                }}
                accessibilityRole="button"
                accessibilityLabel="Start a new game"
              />

              <GameButton
                title="Menu"
                style={buttons.home}
                onPress={async () => {
                  if (canClick) {
                    playClickSound();
                    router.push("/screens/MenuScreen");
                  }
                }}
                accessibilityRole="button"
                accessibilityLabel="Go to menu"
              />
            </View>
          </View>
        </ImageBackground>
      </ViewShot>
    </>
  );
}

export default HomeScreen;
