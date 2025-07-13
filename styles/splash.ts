import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import layouts from "@/constants/layouts";
import { TextStyle, ViewStyle } from "react-native";

const pixelSize = 16;

const splash = {
   container: {
    flex: 1,
    justifyContent: 'center',
    top: layouts.GAME_GRID_TOP,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 3,
    borderRadius: layouts.GAME_GRID_BORDER_RADIUS,
    backgroundColor: 'rgba(197, 188, 147, 0.05)',
    width: layouts.GAME_GRID_SIZE,
    height: layouts.GAME_GRID_SIZE,
  } as ViewStyle,

  splashWin: {
    backgroundColor: 'rgba(237, 194, 46, 0.6)',
  },

  splashText: {
    textAlign: 'center',
    color: 'rgba(240, 240, 240, 1)',
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.splah,
    textShadowColor: colors.BLACK,
    textShadowOffset: fonts.shadow.offset.splash, 
  } as TextStyle,


  splashButton: {
    marginVertical: pixelSize * 3,
    backgroundColor: '#YOUR_BUTTON_COLOR', // replace with your theme
    borderWidth: pixelSize * 0.125,
    borderColor: '#YOUR_PRIMARY_COLOR', // replace with your theme
    borderRadius: pixelSize * 0.5,
    fontSize: pixelSize * 2,
    lineHeight: pixelSize * 4,
    paddingVertical: pixelSize * 0.5,
    paddingHorizontal: pixelSize * 2,
    fontWeight: 'bold',
    color: 'white',
  },

}

export default splash;