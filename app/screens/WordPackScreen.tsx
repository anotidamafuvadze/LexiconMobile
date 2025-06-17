// React and React Native
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import { useRouter } from "expo-router";

// Constants
import animations from "@/constants/animations";
import images from "@/constants/images";
import layouts from "@/constants/layouts";
import { asEntry } from "@/util/animations";

// Components
import BackButton from "@/components/buttons/BackButton";
import GameButton from "@/components/buttons/GameButton";
import BaseHeader from "@/components/headers/BaseHeader";

// Styles
import buttons from "@/styles/buttons";
import headers from "@/styles/headers";

/**
 * Word Pack selection screen
 * - Allows users to choose themed word categories
 */
function WordPacks() {
  const router = useRouter();
  const { playClickSound, playWhooshSound } = useSound();
  const { setCurrentTheme, generateNewWord } = useWord();

  // Handle word pack selection
  const handleButtonPress = (pack: string) => {
    setCurrentTheme(pack);
    generateNewWord(pack); // Update word bank and theme

    if (pack === "Default") {
      playClickSound();
      router.replace("/screens/HomeScreen"); // Go to Home Screen
    } else {
      playWhooshSound();
      router.replace({
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
            iconAdjust={{top: layouts.NATURE_ICON_TOP}} // Move up slightly
          />

          {/* Food Pack */}
          <GameButton
            title="FOOD"
            subtitle="CAKE, MILK, EGGS"
            icon={images.icons.foodPack}
            onPress={() => handleButtonPress("food")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
            iconAdjust={{top: layouts.FOOD_ICON_TOP}} // Move up slightly
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
          />

          {/* Story Pack */}
          <GameButton
            title="STORY"
            subtitle="BOOK, PAGE, TALE"
            icon={images.icons.storyPack}
            onPress={() => handleButtonPress("story")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
          />

          {/* Classic Pack */}
          <GameButton
            title="CLASSIC"
            subtitle="CHAT, DEEP, BOLD"
            icon={images.icons.classicPack}
            onPress={() => handleButtonPress("Default")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.wordPack}
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
    top: layouts.WORD_PACK_BUTTON_TOP, // Vertical offset
    alignItems: "center",
  },
});

export default WordPacks;
