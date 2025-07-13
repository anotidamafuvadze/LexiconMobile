// Points earned for merging tiles by letter
const POINTS_FROM_MERGE: Record<string, number> = {
  A: 5, B: 10, C: 20, D: 30, E: 40, F: 50, G: 60, H: 70, I: 80, J: 90,
  K: 100, L: 110, M: 120, N: 130, O: 140, P: 150, Q: 160, R: 170, S: 180,
  T: 190, U: 200, V: 210, W: 220, X: 230, Y: 240, Z: 250,
};

const game = {
  TILE_COUNT_PER_DIMENSION: 4,      // Grid size per side (4x4)
  CONTAINER_WIDTH: 366,              // Container width (px)
  MERGE_ANIMATION_DURATION: 150,    // Merge animation (ms)
  MOVE_ANIMATION_DURATION: 130,     // Move animation (ms)
  POP_ANIMATION_DURATION: 1000,      // Pop animation (ms)
  POINTS_FROM_MERGE,                 // Merge points by letter
  NUMBER_OF_ROWS: 4,                 // Board rows
  NUMBER_OF_COLS: 4,                 // Board columns
};

export default game;
