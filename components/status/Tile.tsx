import React, { useEffect } from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import usePreviousProps from "@/hooks/usePreviousProps";
import game from "@/constants/game";

type TileComponentProps = {
  tileStyle: ViewStyle;
  tileColor: string;
  letterStyle: TextStyle;
  targetTileColor: string;
  position: [number, number];
  value: string;
  justCreated?: boolean;
  tileID?: string;
};

/**
 * Tile
 * Displays a letter tile with animated movement, scaling, and sound effects.
 * Supports different styles and colors for tiles in target word
 */
function Tile({
  tileID,
  position,
  value,
  justCreated = false,
  tileStyle,
  tileColor,
  targetTileColor: targetColor,
  letterStyle,
}: TileComponentProps): React.JSX.Element {
  const TILE_DIMENSION = game.CONTAINER_WIDTH / game.TILE_COUNT_PER_DIMENSION;
  const previousValue = usePreviousProps(value);
  const hasChanged = previousValue !== value && previousValue != null;
  const { playWhooshSound, playPopSound, playWinSound } = useSound();

  const { targetWord } = useWord();
  const { status, gameWinningTiles, popTile } = useGame();
  const targetCharArray = Array.from(targetWord);
  const tileInTarget = targetCharArray.includes(value);

  // Shared values for animated position and scale
  const left = useSharedValue(position[0] * TILE_DIMENSION);
  const top = useSharedValue(position[1] * TILE_DIMENSION);
  const scale = useSharedValue(1);

  // Handle long press to pop tile
  const handleLongPress = () => popTile();

  // Animate tile when position or value changes
  useEffect(() => {
    if (!position || TILE_DIMENSION === 0) return;

    // Animate tile movement to new position
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
      // Merge or new tile animation
      scale.value = withSequence(
        withTiming(1.2, { duration: game.MERGE_ANIMATION_DURATION / 2 }),
        withTiming(1, { duration: game.MERGE_ANIMATION_DURATION / 2 })
      );

      if (hasChanged) playPopSound();
      else playWhooshSound();
    } else {
      playWhooshSound();
    }
  }, [position, justCreated, hasChanged, value, status, gameWinningTiles]);

  // Animated styles for position and scale
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
          { backgroundColor: tileColor },
          tileInTarget && { backgroundColor: targetColor }, // Highlight when letter is in target word
        ]}
        onLongPress={handleLongPress}
        delayLongPress={game.POP_ANIMATION_DURATION}
      >
        <Text style={letterStyle}>{value}</Text>
      </Pressable>
    </Animated.View>
  );
}

export default Tile;
