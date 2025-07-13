// React and React Native
import React, { useEffect } from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

// Animation
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

// Context Hooks
import { useSound } from "@/context/SoundContext";
import usePreviousProps from "@/hooks/usePreviousProps";

// Constants
import colors from "@/constants/colors";
import game from "@/constants/game";
import { useGame } from "@/context/GameContext";
import { useWord } from "@/context/WordContext";

type TileComponentProps = {
  tileStyle: ViewStyle;
  tileAdjust?: ViewStyle;
  letterStyle: TextStyle;
  letterAdjust?: TextStyle;
  position: [number, number];
  value: string;
  justCreated?: boolean;
  tileID?: string;
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
  tileID,
}: TileComponentProps): React.JSX.Element {
  const TILE_DIMENSION = game.CONTAINER_WIDTH / game.TILE_COUNT_PER_DIMENSION;
  const previousValue = usePreviousProps(value);
  const hasChanged = previousValue !== value && previousValue != null;
  const { playWhooshSound, playPopSound, playWinSound } = useSound();

  const { targetWord } = useWord();
  const { status, gameWinningTiles, popTile } = useGame();
  const targetCharArray = Array.from(targetWord);
  const tileInTarget = targetCharArray.includes(value);

  // Shared values for animated positioning and scaling
  const left = useSharedValue(position[0] * TILE_DIMENSION);
  const top = useSharedValue(position[1] * TILE_DIMENSION);
  const scale = useSharedValue(1);

  // Handle long presses (popping tile)

  const handleLongPress = () => (
    popTile()

  )

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

      if (status === "WON" && tileID && gameWinningTiles?.includes(tileID)) {
        playWinSound();
        // Looping pulse animation for winning tiles
        scale.value = withRepeat(
          withSequence(
            withTiming(1.05, { duration: 500 }),
            withTiming(1, { duration: 500 })
          ),
          -1,
          true
        );
      } else if (justCreated || hasChanged) {
        // Merge/new tile animation
        scale.value = withSequence(
          withTiming(1.2, { duration: game.MERGE_ANIMATION_DURATION / 2 }),
          withTiming(1, { duration: game.MERGE_ANIMATION_DURATION / 2 })
        );

        if (hasChanged) playPopSound();
        else playWhooshSound();
      } else {
        playWhooshSound();
      }
    };

    animateTile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, justCreated, hasChanged, value, status, gameWinningTiles]);

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
      <Pressable
        style={[
          tileStyle,
          tileAdjust,
          tileInTarget && { backgroundColor: colors.TARGET_GRID_TILE },
        ]}
        onLongPress={handleLongPress}
        delayLongPress={game.POP_ANIMATION_DURATION}
      >
        <Text style={[letterStyle, letterAdjust]}>{value}</Text>
      </Pressable>
    </Animated.View>
  );
}

export default Tile;
