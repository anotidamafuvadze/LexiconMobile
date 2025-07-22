import BackButton from "@/components/buttons/BackButton";
import GameButton from "@/components/buttons/GameButton";
import BaseHeader from "@/components/headers/BaseHeader";
import animations from "@/constants/animations";
import images from "@/constants/images";
import layouts from "@/constants/layouts";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import buttons from "@/styles/buttons";
import headers from "@/styles/headers";
import { asEntry } from "@/util/animations";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Word Pack selection screen
 * - Allows users to choose themed word categories
 */
function WordPacks() {
  const router = useRouter();
  const { playClickSound, playWhooshSound } = useSound();
  const { setTheme, generateNewWord } = useWord();
  const { startNewGame } = useGame();

  // Handle word pack selection
  const handleButtonPress = (pack: string) => {
    console.log("PACK: " + pack);
    setTheme(pack);
    generateNewWord(pack); // Update word bank and theme
    startNewGame();

    if (pack === "default") {
      playClickSound();
      router.push("/screens/HomeScreen"); // Go to Home Screen
    } else {
      playWhooshSound();
      router.push({
        pathname: "/screens/PackHomeScreen", // Go to selected Pack screen
        params: { packName: pack },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.wordPackSelectionScreen}
        resizeMode="cover"
      >
        {/* Back Button */}
        <BackButton toScreen="MenuScreen" from="WordPackScreen" />

        {/* Header */}
        <BaseHeader
          title="Pick Your Pack"
          subtitle="Each theme unlocks new words and a different style of play"
          containerStyle={headers.wordPack.container}
          titleStyle={headers.wordPack.title}
          subtitleStyle={headers.wordPack.subtitle}
        />

        <View style={styles.buttonGroup}>
          {/* Nature Pack */}
          <GameButton
            title="NATURE"
            subtitle="TREE, LAKE, RAIN"
            icon={images.icons.naturePack}
            onPress={() => handleButtonPress("nature")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            iconAdjust={{ top: layouts.NATURE_ICON_TOP }} // Move up slightly
            accessibilityRole={"button"}
            accessibilityLabel={"Select nature pack"}
          />

          {/* Food Pack */}
          <GameButton
            title="FOOD"
            subtitle="CAKE, MILK, EGGS"
            icon={images.icons.foodPack}
            onPress={() => handleButtonPress("food")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            iconAdjust={{ top: layouts.FOOD_ICON_TOP }} // Move up slightly
            accessibilityRole={"button"}
            accessibilityLabel={"Select food pack"}
          />

          {/* Animals Pack */}
          <GameButton
            title="ANIMALS"
            subtitle="DEER, BIRD, FROG"
            icon={images.icons.animalsPack}
            onPress={() => handleButtonPress("animals")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            iconAdjust={{ transform: [{ scale: layouts.ANIMALS_ICON_SCALE }] }}
            accessibilityRole={"button"}
            accessibilityLabel={"Select animals pack"}
          />

          {/* Story Pack */}
          <GameButton
            title="STORY"
            subtitle="BOOK, PAGE, TALE"
            icon={images.icons.storyPack}
            onPress={() => handleButtonPress("story")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            accessibilityRole={"button"}
            accessibilityLabel={"Select story pack"}
          />

          {/* Classic Pack */}
          <GameButton
            title="CLASSIC"
            subtitle="CHAT, DEEP, BOLD"
            icon={images.icons.classicPack}
            onPress={() => handleButtonPress("default")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            accessibilityRole={"button"}
            accessibilityLabel={"Select default pack"}
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
  buttonGroup: {
    top: layouts.WORD_PACK_BUTTON_TOP,
    alignItems: "center",
  },
});

export default WordPacks;
