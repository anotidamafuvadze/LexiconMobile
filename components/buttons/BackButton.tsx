import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "@/constants/colors";
import images from "@/constants/images";
import metrics from "@/constants/layouts";
import { useSound } from "@/context/SoundContext";
import { getScreenPath, ScreenName } from "@/util/navigation";

/**
 * BackButton
 * - Navigates to a previous screen
 * - Passes an optional "from" screen parameter
 */
function BackButton({
  toScreen,
  from,
}: {
  toScreen: string;
  from: string;
}): React.JSX.Element {
  const router = useRouter();
  const { playClickSound } = useSound();

  // Handles navigation and sound effect
  const handleButtonPress = () => {
    playClickSound();
    router.push({
      pathname: getScreenPath(toScreen as ScreenName),
      params: { from },
    });
  };

  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <Image source={images.icons.backButton} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  icon: {
    width: metrics.BACK_ICON_SIZE,
    height: metrics.BACK_ICON_SIZE,
    tintColor: colors.BACK_ICON_TINT,
  },
});

export default BackButton;
