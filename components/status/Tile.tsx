// React and React Native
import React, { useEffect, useRef, useState } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

// Animation
import LottieView from "lottie-react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import usePreviousProps from "@/hooks/usePreviousProps";

// Constants
import game from "@/constants/game";
import layouts from "@/constants/layouts";

type TileComponentProps = {
  tileStyle: ViewStyle;
  tileAdjust?: ViewStyle;
  letterStyle: TextStyle;
  letterAdjust?: TextStyle;
  position: [number, number];
  value: string;
  justCreated?: boolean;
};

/**
 * Tile
 * - Displays a letter tile with animated movement and scale
 * - Plays sound effects on move and merge
 */
function Tile({
  tileStyle,
  tileAdjust,
  letterStyle,
  letterAdjust,
  position,
  value,
  justCreated = false,
}: TileComponentProps): React.JSX.Element {
  const TILE_DIMENSION = game.CONTAINER_WIDTH / game.TILE_COUNT_PER_DIMENSION;
  const previousValue = usePreviousProps(value);
  const hasChanged = previousValue !== value && previousValue != null;
  const { playWhooshSound, playPopSound } = useSound();

  // Shared values for animated positioning and scaling
  const left = useSharedValue(position[0] * TILE_DIMENSION);
  const top = useSharedValue(position[1] * TILE_DIMENSION);
  const scale = useSharedValue(1);

  // Trigger animation when position or tile state changes
  useEffect(() => {
    const animateTile = () => {
      const x = position[0] * TILE_DIMENSION;
      const y = position[1] * TILE_DIMENSION;

      left.value = withTiming(x, {
        duration: game.MOVE_ANIMATION_DURATION,
        easing: Easing.out(Easing.quad),
      });

      top.value = withTiming(y, {
        duration: game.MOVE_ANIMATION_DURATION,
        easing: Easing.out(Easing.quad),
      });

      // Scale up and down for new or merged tiles
      if (justCreated || hasChanged) {
        scale.value = withSequence(
          withTiming(1.2, { duration: game.MERGE_ANIMATION_DURATION / 2 }),
          withTiming(1, { duration: game.MERGE_ANIMATION_DURATION / 2 })
        );

        // Play pop sound on merge
        if (hasChanged) {
          playPopSound();
        }
      } else {
        // Play whoosh sound for normal moves
        playWhooshSound();
      }
    };

    animateTile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, justCreated, hasChanged, value]);

  // Compose animated styles for position and scale
  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: left.value,
    top: top.value,
    width: 100,
    height: 100,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <View style={[tileStyle, tileAdjust]}>
        <Text style={[letterStyle, letterAdjust]}>{value}</Text>
      </View>
    </Animated.View>
  );
}

export default Tile;
