// ======================= MERGE POINTS =======================
const POINTS_FROM_MERGE: Record<string, number> = {
  A: 5, B: 10, C: 20, D: 30, E: 40, F: 50, G: 60, H: 70, I: 80, J: 90,
  K: 100, L: 110, M: 120, N: 130, O: 140, P: 150, Q: 160, R: 170, S: 180,
  T: 190, U: 200, V: 210, W: 220, X: 230, Y: 240, Z: 250,
};

// ======================= CONFETTI COLORS =======================
const CONFETTI_COLORS = [
  "#B8D9C4", "#A6CBB3", "#95BD9F", "#85AF8B", "#729F7A",
  "#618967", "#506F56", "#7F9E8A", "#9EB99C", "#B2C8B0",
];

// ======================= GAME SETTINGS =======================
const game = {
  // Board dimensions
  TILE_COUNT_PER_DIMENSION: 4,
  NUMBER_OF_ROWS: 4,
  NUMBER_OF_COLS: 4,

  // Board container
  CONTAINER_WIDTH: 366,

  // Animation durations (ms)
  MOVE_ANIMATION_DURATION: 130,
  MERGE_ANIMATION_DURATION: 150,
  POP_ANIMATION_DURATION: 1150,

  // Splash screen
  SPLASH_TIMEOUT: 1250,
  SPLASH_DURATION: 500,

  // Confetti
  CONFETTI_COUNT: 100,
  CONFETTI_COLORS,
  CONFETTI_FALL_SPEED: 3000,
  CONFETTI_ORIGIN: { x: 0, y: 800 },
  CONFETTI_EXPLOSION_SPEED: 5,

  // Points
  POINTS_FROM_MERGE,

  // Pops
  STARTING_POPS: 3,

};

export default game;
