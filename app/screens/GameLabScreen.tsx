// React and React Native
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context Hooks
import { useSound } from "@/context/SoundContext";
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
 * Game Lab selection screen
 * - Allows users to explore and select different game modifiers
 */
function GameLab() {
  const router = useRouter();
  const { playClickSound } = useSound();

  // Handle Game Lab button press
  const handleButtonPress = (buttonPressed: string) => {
    playClickSound();
    switch (buttonPressed) {
      case "Difficulty":
        router.replace("/screens/DifficultyScreen"); // Go to difficulty selection screen
        break;
      case "EditTile":
        // TODO: Handle Edit Tile action
        break;
      case "JumpTile":
        // TODO: Handle Teleport Tile action
        break;
      case "EraserTile":
        // TODO: Handle Eraser Tile action
        break;
      case "QuestMode":
        // TODO: Handle Quest Mode action
        break;
      default:
        if (__DEV__) console.warn(`Unhandled GameLab button: ${buttonPressed}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.gameLabScreen}
        resizeMode="cover"
      >
        {/* Back Button */}
        <BackButton toScreen="MenuScreen" from="GameLabScreen" />

        {/* Header */}
        <BaseHeader
          subtitle="Try special tiles, set challenges, and play your way"
          containerStyle={headers.gameLab.title}
          subtitleStyle={headers.gameLab.subtitle}
        />

        <View style={styles.buttonGroup}>
          {/* Difficulty */}
          <GameButton
            title="DIFFICULTY"
            subtitle="Easy, Medium, Hard"
            icon={images.icons.difficulty}
            onPress={() => handleButtonPress("Difficulty")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.gameLab}
            iconAdjust={{ left: layouts.DIFFICULTY_MARGIN_LEFT }}
          />

          {/* Edit Tile */}
          <GameButton
            title="EDIT TILE"
            subtitle="Pick any letter"
            icon={images.icons.editTile}
            onPress={() => handleButtonPress("EditTile")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.gameLab}
            iconAdjust={{ marginTop: layouts.EDIT_TILE_MARGIN_TOP }}
          />

          {/* Jump Tile */}
          <GameButton
            title="JUMP TILE"
            subtitle="Move tile anywhere"
            icon={images.icons.jumpTile}
            onPress={() => handleButtonPress("JumpTile")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.gameLab}
            iconAdjust={{ transform: [{ scale: layouts.JUMP_TILE_ICON_SCALE }] }}
          />

          {/* Eraser Tile */}
          <GameButton
            title="ERASER TILE"
            subtitle="Clear an entire row"
            icon={images.icons.eraserTile}
            onPress={() => handleButtonPress("EraserTile")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.gameLab}
            iconAdjust={{
              marginTop: layouts.ERASER_TILE_MARGIN_TOP,
              transform: [{ scale: layouts.ERASER_TILE_ICON_SCALE }],
            }}
          />

          {/* Quest Mode */}
          <GameButton
            title="QUEST MODE"
            subtitle="Timed levels and stars"
            icon={images.icons.questMode}
            onPress={() => handleButtonPress("QuestMode")}
            entering={asEntry(animations.SLIDE_IN())}
            style={buttons.gameLab}
            iconAdjust={{ left: layouts.QUEST_MODE_MARGIN_LEFT }}
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
    top: layouts.GAME_LAB_BUTTON_TOP, // Vertical offset
    alignItems: "center",
  },
});

export default GameLab;
