import {
  BounceIn,
  Easing,
  Keyframe,
  LightSpeedInRight
} from "react-native-reanimated";

const animations = {
  // ========== FAST FALL ==========
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

  // ========== SLOW FALL ==========
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

  // ========== SLIDE IN ==========
  SLIDE_IN: LightSpeedInRight.duration(800),

  // ========== BOUNCE IN ==========
  BOUNCE_IN: BounceIn.duration(600),
};

export default animations;
