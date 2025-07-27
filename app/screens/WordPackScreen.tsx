import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GameButton from "@/components/buttons/GameButton";
import NavigationButton from "@/components/buttons/NagivationButton";
import BaseHeader from "@/components/headers/BaseHeader";

import useLayouts from "@/constants/layouts";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";

import animations from "@/constants/animations";
import images from "@/constants/images";
import { asEntry } from "@/util/animations";
import useButtons from "@/styles/buttons";
import useHeaderStyles from "@/styles/headers";

/**
 * WordPacks
 * - Lets users choose a themed word pack (nature, food, animals, etc.)
 */

function WordPacks() {
  const router = useRouter();
  const { playClickSound, playWhooshSound } = useSound();
  const { setTheme, generateNewWord } = useWord();
  const { startNewGame } = useGame();
  const layouts = useLayouts();
  const buttons = useButtons();
  const headers = useHeaderStyles();

  // Handle word pack selection
  const handleButtonPress = (pack: string) => {
    setTheme(pack);
    generateNewWord(pack);
    startNewGame();
    playWhooshSound();
    router.push({ pathname: "/screens/HomeScreen" });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
    },
    buttonWrapper: {
      top: layouts.WORD_PACK_BUTTON_TOP,
      alignItems: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.backgrounds.wordPackSelectionScreen}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Back Button */}
        <NavigationButton
          soundEffect={playClickSound}
          icon={images.icons.backButton}
          toScreen="MenuScreen"
          fromScreen="DifficultyScreen"
          style={buttons.backButton}
          accessibilityRole="button"
          accessibilityLabel="Go back to menu"
        />

        {/* Header */}
        <BaseHeader
          title={"Pick Your\nPack"}
          subtitle="Each theme unlocks new words and a different style of play"
          containerStyle={headers.wordPack.container}
          titleStyle={headers.wordPack.title}
          subtitleStyle={headers.wordPack.subtitle}
        />

        <View style={styles.buttonWrapper}>
          {/* Nature */}
          <GameButton
            title="NATURE"
            subtitle="TREE, LAKE, RAIN"
            icon={images.icons.naturePack}
            onPress={() => handleButtonPress("nature")}
            entering={asEntry(animations.SLIDE_IN)}
            style={buttons.wordPack}
            iconAdjust={{ top: layouts.NATURE_ICON_TOP }}
            accessibilityRole="button"
            accessibilityLabel="Select nature pack"
          />

          {/* Food */}
          <GameButton
            title="FOOD"
            subtitle="CAKE, MILK, EGGS"
            icon={images.icons.foodPack}
            onPress={() => handleButtonPress("food")}
            entering={asEntry(animations.SLIDE_IN)}
            style={buttons.wordPack}
            iconAdjust={{ top: layouts.FOOD_ICON_TOP }}
            accessibilityRole="button"
            accessibilityLabel="Select food pack"
          />

          {/* Animals */}
          <GameButton
            title="ANIMALS"
            subtitle="DEER, BIRD, FROG"
            icon={images.icons.animalsPack}
            onPress={() => handleButtonPress("animals")}
            entering={asEntry(animations.SLIDE_IN)}
            style={buttons.wordPack}
            iconAdjust={{ transform: [{ scale: layouts.ANIMALS_ICON_SCALE }] }}
            accessibilityRole="button"
            accessibilityLabel="Select animals pack"
          />

          {/* Story */}
          <GameButton
            title="STORY"
            subtitle="BOOK, PAGE, TALE"
            icon={images.icons.storyPack}
            onPress={() => handleButtonPress("story")}
            entering={asEntry(animations.SLIDE_IN)}
            style={buttons.wordPack}
            accessibilityRole="button"
            accessibilityLabel="Select story pack"
          />

          {/* Classic */}
          <GameButton
            title="CLASSIC"
            subtitle="CHAT, DEEP, BOLD"
            icon={images.icons.classicPack}
            onPress={() => handleButtonPress("default")}
            entering={asEntry(animations.SLIDE_IN)}
            style={buttons.wordPack}
            accessibilityRole="button"
            accessibilityLabel="Select default pack"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default WordPacks;
