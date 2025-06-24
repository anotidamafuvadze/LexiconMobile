import React from 'react';
import { Tile as TileProps } from "@/models/tile";
import { TextStyle, View, ViewStyle, Text, StyleSheet } from 'react-native';
import game from '@/constants/game';

type TileComponentProps = {
  tile: ViewStyle;
  tileAdjust?: ViewStyle;
  letter: TextStyle;
  letterAdjust?: TextStyle;
  position: TileProps["position"];
  value: TileProps["value"];
};

function Tile({
  tile,
  tileAdjust,
  letter,
  letterAdjust,
  position,
  value,
}: TileComponentProps): React.JSX.Element {
  const positionToPixels = (position: number) => {
    return (position / game.TILE_COUNT_PER_DIMENSION) * game.CONTAINER_WIDTH;
  };

  const styles = StyleSheet.create({
    tilePosition: {
      left: positionToPixels(position[0]),
      top: positionToPixels(position[1]),
    },
  });

  return (
    <View style={[tile, tileAdjust, styles.tilePosition]}>
      <Text style={[letter, letterAdjust]}>{value}</Text>
    </View>
  );
}

export default Tile;


