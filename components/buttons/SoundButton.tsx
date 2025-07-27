import colors from "@/constants/colors";
import useFonts from "@/constants/fonts";
import images from "@/constants/images";
import useLayouts from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";
import React from "react";
import { Image, Pressable, StyleSheet, Text, TextStyle } from "react-native";

/**
 * SoundButton
 * - Toggles app sound on/off
 */

function SoundButton() {
  const {
    soundOn,
    setSoundOn,
    playClickSound,
    playBackgroundMusic,
    stopBackgroundMusic,
  } = useSound();
  const layouts = useLayouts();
  const fonts = useFonts();

  // Toggle sound and background music
  const handlePress = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);

    if (nextState) {
      playClickSound(true);
      playBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
  };

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
    },
    icon: {
      width: layouts.SOUND_ICON_SIZE,
      height: layouts.SOUND_ICON_SIZE,
      tintColor: colors.SOUND_ICON_BG,
    },
    title: {
      fontSize: fonts.size.soundButton,
      fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
      fontFamily: fonts.family.primary,
      color: colors.SOUND_BUTTON_TITLE,
      letterSpacing: layouts.LETTER_SPACING_SMALL,
      textAlign: "center",
    },
  });

  return (
    <Pressable
      onPress={handlePress}
      style={styles.button}
      accessible
      accessibilityRole="button"
      accessibilityLabel={soundOn ? "Turn sound off" : "Turn sound on"}
    >
      <Image
        source={soundOn ? images.icons.soundOn : images.icons.soundOff}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.title}>{soundOn ? "Sound On" : "Sound Off"}</Text>
    </Pressable>
  );
}

export default SoundButton;
