import BackButton from "@/components/buttons/BackButton";
import colors from "@/constants/colors";
import images from "@/constants/images";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * InstructionScreen
 * - Displays how to play the game
 */
function InstructionScreen() {
  const { width, height } = Dimensions.get("window");
  const isTablet = Math.min(width, height) >= 768;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={images.backgrounds.instructionScreen}
        resizeMode={isTablet ? "contain" : "cover"}
      >
        {/* Back Button */}
        <BackButton toScreen="MenuScreen" from="InstructionScreen" />
      </ImageBackground>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  background: {
    flex: 1,
  },
});

export default InstructionScreen;
