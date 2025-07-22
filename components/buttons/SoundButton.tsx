import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import images from "@/constants/images";
import metrics from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";
import React from "react";
import { Image, Pressable, StyleSheet, Text, TextStyle } from "react-native";

/**
 * SoundButton
 * - Toggles app sound on/off
 * - Manages background music state
 */
function SoundButton() {
  const {
    soundOn,
    setSoundOn,
    playClickSound,
    playBackgroundMusic,
    stopBackgroundMusic,
  } = useSound();

  // Handles toggle between sound on/off
  const handlePress = () => {
    const isTurningSoundOn = !soundOn;
    setSoundOn(isTurningSoundOn);

    if (isTurningSoundOn) {
      playClickSound(true);
      playBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={styles.button}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={soundOn ? "Turn sound off" : "Turn sound on"}
    >
      {/* Sound icon */}
      <Image
        source={soundOn ? images.icons.soundOn : images.icons.soundOff}
        style={styles.icon}
        resizeMode="contain"
      />
      {/* Sound label */}
      <Text style={styles.title}>{soundOn ? "Sound On" : "Sound Off"}</Text>
    </Pressable>
  );
}

// Styles
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  title: {
    fontSize: fonts.size.soundButton,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.SOUND_BUTTON_TITLE,
    letterSpacing: metrics.LETTER_SPACING_SMALL,
    textAlign: "center",
  },
  icon: {
    width: metrics.SOUND_ICON_SIZE,
    height: metrics.SOUND_ICON_SIZE,
    tintColor: colors.SOUND_ICON_TINT,
  },
});

export default SoundButton;
