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

 // ========== BOUNCE UP ==========
BOUNCE_UP: new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: 0 }, { scaleY: 0.85 }],
  },
  10: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scaleY: 1 }],
    easing: Easing.out(Easing.ease),
  },
  25: {
    transform: [{ translateY: -20 }, { scaleY: 1.02 }],
    easing: Easing.out(Easing.cubic),
  },
  45: {
    transform: [{ translateY: -50 }, { scaleY: 0.98 }],
    easing: Easing.out(Easing.exp),
  },
  65: {
    transform: [{ translateY: -30 }, { scaleY: 1.01 }],
    easing: Easing.inOut(Easing.cubic),
  },
  85: {
    transform: [{ translateY: -10 }, { scaleY: 0.99 }],
    easing: Easing.inOut(Easing.cubic),
  },
  100: {
    transform: [{ translateY: 0 }, { scaleY: 1 }],
    easing: Easing.out(Easing.bounce),
  },
}).duration(1000),

};

export default animations;
