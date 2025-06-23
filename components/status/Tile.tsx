import React from 'react';
import { TextStyle, View, ViewStyle, Text } from 'react-native';

function Tile({
  tile,
  tileAdjust,
  letter,
  letterAdjust,
}: {
  tile: ViewStyle,
  tileAdjust?: ViewStyle,
  letter: TextStyle,
  letterAdjust?: TextStyle,
}): React.JSX.Element {
  return (
    <View style={[tile, tileAdjust]}>
      <Text style={[letter, letterAdjust]}> A </Text>
    </View>
  );
}

export default Tile;