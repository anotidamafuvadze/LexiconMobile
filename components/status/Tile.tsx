import colors from "@/constants/colors";
import game from "@/constants/game";
import { useGame } from "@/context/GameContext";
import { useSound } from "@/context/SoundContext";
import { useWord } from "@/context/WordContext";
import useLayouts from "@/constants/layouts";
import usePreviousProps from "@/hooks/usePreviousProps";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type TileProps = {
  tileStyle: ViewStyle;
  tileColor: string;
  targetTileColor: string;
  letterStyle: TextStyle;
  position: [number, number];
  value: string;
  tileID: string;
  justCreated?: boolean;
};

/**
 * Tile
 * - Displays a letter tile with movement, merge, lock, and pop animations
 */

function Tile({
  tileID: tileId,
  position,
  value,
  justCreated = false,
  tileStyle,
  tileColor,
  targetTileColor: targetColor,
  letterStyle,
}: TileProps): React.JSX.Element {
  const layouts = useLayouts();
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const TILE_DIMENSION = layouts.GAME_GRID_WIDTH / game.TILE_COUNT_PER_DIMENSION;

  const previousValue = usePreviousProps(value);
  const hasChanged = previousValue !== value && previousValue != null;

  const {
    playWhooshSound,
    playPopSound,
    playWinSound,
    playGrowSound,
    stopGrowSound,
    playLockSound,
    playUnlockSound,
  } = useSound();

  const { targetWord } = useWord();
  const { status, gameWinningTiles, popTile, pops, lockTile, unlockTile, isAbleToLock } =
    useGame();

  const targetCharArray = Array.from(targetWord);
  const tileInTarget = targetCharArray.includes(value);

  const holdStartRef = useRef<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Animated shared values
  const left = useSharedValue(position[0] * TILE_DIMENSION);
  const top = useSharedValue(position[1] * TILE_DIMENSION);
  const scale = useSharedValue(1);
  const progress = useSharedValue(0);

  // ===== Handlers =====
  const handleLongPress = () => {
    if (pops <= 0) return;
    playGrowSound();
    scale.value = withTiming(1.25, { duration: game.POP_ANIMATION_DURATION });
    holdStartRef.current = Date.now();
  };

  const handlePressOut = () => {
    if (pops <= 0) return;
    stopGrowSound();
    const holdDuration =
      holdStartRef.current != null ? Date.now() - holdStartRef.current : 0;
    holdStartRef.current = null;

    if (holdDuration >= game.POP_ANIMATION_DURATION) {
      playPopSound();
      if (isLocked) {
        unlockTile();
      }
      popTile(tileId);
    }
    scale.value = withTiming(1, { duration: 100 });
  };

  const toggleLock = () => {
    if (isLocked) {
      playUnlockSound();
      unlockTile();
      setIsLocked(false);
    } else if (isAbleToLock.current) {
      playLockSound();
      lockTile(tileId);
      setIsLocked(true);
    }
  };

  // ===== Effects =====

  // Animate tile movement
  useEffect(() => {
    if (!position || TILE_DIMENSION === 0) return;
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

    if (!justCreated && !hasChanged) {
      playWhooshSound();
    }
  }, [position, value]);

  // Animate scale when tile is created or merged
  useEffect(() => {
    if (justCreated || hasChanged) {
      scale.value = withSequence(
        withTiming(1.2, { duration: game.MERGE_ANIMATION_DURATION / 2 }),
        withTiming(1, { duration: game.MERGE_ANIMATION_DURATION / 2 })
      );

      if (hasChanged) {
        playPopSound();
      }
    }
  }, [hasChanged, justCreated, playPopSound, playWhooshSound]);

  // Animate winning tiles with pulsing effect
  useEffect(() => {
    if (status === "WON" && tileId && gameWinningTiles?.includes(tileId)) {
      playWinSound();

      scale.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 500 }),
          withTiming(1, { duration: 500 })
        ),
        -1,
        true
      );
    }
  }, [status, tileId, gameWinningTiles, playWinSound]);

  // Animate border when tile is locked
  useEffect(() => {
    scale.value = withSequence(
      withTiming(1.2, { duration: game.MERGE_ANIMATION_DURATION / 2 }),
      withTiming(1, { duration: game.MERGE_ANIMATION_DURATION / 2 })
    );

    if (isLocked) {
      progress.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1500 }),
          withTiming(0, { duration: 1500 })
        ),
        -1,
        true
      );
    } else {
      progress.value = withTiming(0, { duration: 200 });
    }
  }, [isLocked]);

  // ===== Animated Styles =====

  const animatedStyle = useAnimatedStyle(() => {
    const borderColorTarget = interpolateColor(
      progress.value,
      [0, 1],
      [colors.WHITE, targetColor]
    );
    const borderColorNotTarget = interpolateColor(
      progress.value,
      [0, 1],
      [colors.LOCKED_TILE_BORDER, tileColor]
    );

    let borderColor = colors.BLACK;
    if (isLocked) {
      if (tileInTarget) {
        borderColor = borderColorTarget;
      } else {
        borderColor = borderColorNotTarget;
      }
    }

    return {
      position: "absolute",
      left: left.value,
      top: top.value,
      width: layouts.TILE_SIZE,
      height: layouts.TILE_SIZE,
      transform: [{ scale: scale.value }],
      borderWidth: isLocked ? 8 : 3,
      borderColor: borderColor,
    };
  });

  // ===== Gestures =====

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDelay(250)
    .onStart(() => {
      runOnJS(toggleLock)();
    });

  // ===== Render =====

  return (
    <GestureDetector gesture={doubleTap}>
      <AnimatedPressable
        style={[
          tileStyle,
          animatedStyle,
          { backgroundColor: tileColor },
          tileInTarget && { backgroundColor: targetColor },
        ]}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Tile with letter ${value}${isLocked ? ", locked" : ""}`}
        accessibilityHint={
          isLocked
            ? "Double tap to unlock this tile,  long press to pop this tile"
            : "Double tap to lock this tile, long press to pop this tile"
        }
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
      >
        <Text style={letterStyle}>{value}</Text>
      </AnimatedPressable>
    </GestureDetector>
  );
}

export default Tile;
