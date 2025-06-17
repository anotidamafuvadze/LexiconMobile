// React and React Native
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// Constants
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import metrics from "@/constants/layouts";

// Context
import { useSound } from "@/context/SoundContext";
import images from "@/constants/images";

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
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.button}>
          {/* Sound icon */}
          <Image
            source={
              soundOn
                ? images.icons.soundOn
                : images.icons.soundOff
            }
            style={styles.icon}
            resizeMode="contain"
          />
          {/* Sound label */}
          <Text style={styles.title}>{soundOn ? "Sound On" : "Sound Off"}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Sound label
  title: {
    fontSize: fonts.size.soundButton,
    fontWeight: fonts.weight.bold as TextStyle["fontWeight"],
    fontFamily: fonts.family.regular,
    color: colors.SOUND_BUTTON_TITLE,
    letterSpacing: metrics.LETTER_SPACING_SMALL,
    textAlign: "center",
  },
  // Sound icon
  icon: {
    width: metrics.SOUND_ICON_SIZE,
    height: metrics.SOUND_ICON_SIZE,
    tintColor: colors.SOUND_ICON_TINT,
  },
});

export default SoundButton;
