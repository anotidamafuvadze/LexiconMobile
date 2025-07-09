import {
  BounceIn,
  Easing,
  Keyframe,
  LightSpeedInRight
} from "react-native-reanimated";

/**
 * Animation presets for UI transitions
 */
const animations = {
  // Fast falling animation
  FALL_FAST: new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -500 }, { rotateZ: "30deg" }],
    },
    30: {
      opacity: 1,
      transform: [{ translateY: 15 }, { rotateZ: "0deg" }],
      easing: Easing.out(Easing.quad),
    },
    60: {
      transform: [{ translateY: -10 }, { rotateZ: "0deg" }],
      easing: Easing.inOut(Easing.quad),
    },
    80: {
      transform: [{ translateY: 5 }, { rotateZ: "0deg" }],
      easing: Easing.inOut(Easing.quad),
    },
    100: {
      transform: [{ translateY: 0 }, { rotateZ: "0deg" }],
      easing: Easing.out(Easing.quad),
    },
  }).duration(1000),

  // Slow falling animation
  FALL_SLOW: new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -500 }, { rotateZ: "30deg" }],
    },
    30: {
      opacity: 1,
      transform: [{ translateY: 15 }, { rotateZ: "0deg" }],
      easing: Easing.out(Easing.quad),
    },
    60: {
      transform: [{ translateY: -10 }, { rotateZ: "0deg" }],
      easing: Easing.inOut(Easing.quad),
    },
    80: {
      transform: [{ translateY: 5 }, { rotateZ: "0deg" }],
      easing: Easing.inOut(Easing.quad),
    },
    100: {
      transform: [{ translateY: 0 }, { rotateZ: "0deg" }],
      easing: Easing.out(Easing.quad),
    },
  }).duration(1800),

  // Slide-in animation for selection buttons
  SLIDE_IN: () =>
    LightSpeedInRight.duration(600)
      .easing(Easing.out(Easing.exp))
      .withInitialValues({
        transform: [{ translateX: 100 }, { skewX: "-5deg" }],
      }),

  // Bounce-in animation for difficulty buttons
  BOUNCE_IN: BounceIn.duration(600),

};

export default animations;