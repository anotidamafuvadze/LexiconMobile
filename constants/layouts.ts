import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Base dimensions
const BASE_WIDTH = 428;
const BASE_HEIGHT = 926;

// Calculate raw scales
const rawScaleW = width / BASE_WIDTH;
const rawScaleH = height / BASE_HEIGHT;

// Clamp scales: don’t let it grow too big on iPads
const scaleW = Math.min(rawScaleW, 1.0); // cap at 1.0 for width
const scaleH = Math.min(rawScaleH, 1.0); // cap at 1.0 for height

const isTablet = Math.min(width, height) >= 768;

const layouts = {
  // ======================= HOME SCREEN =======================
  HOME_HEADER_TOP: (5 * rawScaleH) + (isTablet ? 50 : 0),
  TARGET_WORD_TOP: (453 * rawScaleH) + (isTablet ? -50 : 0),
  HOME_BUTTON_TOP: (465 * rawScaleH) + (isTablet ? -50 : 0),
  HOME_BUTTON_GAP: 30 * scaleH,
  HOME_BUTTON_PADDING_HORIZONTAL: 15 * scaleW,
  HOME_BUTTON_PADDING_VERTICAL: 5 * scaleH,
  HOME_BUTTON_BORDER_RADIUS: 20 * scaleW,
  HOME_BUTTON_BORDER_WIDTH: 2 * scaleW,

  // ======================= GAME GRID =======================
  GAME_GRID_TOP: 247 * rawScaleH,
  GAME_GRID_SIZE: 380 * scaleW,
  GAME_GRID_WIDTH: 366 * scaleW,
  GAME_GRID_BORDER_RADIUS: 13 * scaleW,
  GAME_GRID_PADDING: 7 * scaleW,
  GAME_GRID_CELL_DIVISOR: 4.6,
  GAME_GRID_CELL_MARGIN: 4 * scaleW,
  GAME_GRID_CELL_BORDER_WIDTH: 3 * scaleW,
  TILE_SIZE: (380 / 4.6) * scaleW,
  TILE_MARGIN_TOP: 4 * scaleH,
  TILE_MARGIN_BOTTOM: 4 * scaleH,
  TILE_MARGIN_LEFT: 4 * scaleW,
  TILE_MARGIN_RIGHT: 4 * scaleW,
  TILE_BORDER_WIDTH: 3 * scaleW,

  // ======================= GAME BOARD =======================
  GAME_BOARD_TOP: (25 * rawScaleH) + (isTablet ? 50 : 0),
  GAME_BOARD_HEIGHT: 83 * scaleH,
  GAME_BOARD_BORDER_WIDTH: 2 * scaleW,
  GAME_BOARD_BORDER_RADIUS: 27 * scaleW,
  GAME_BOARD_GAP: 35 * scaleW,
  GAME_BOARD_PADDING_HORIZONTAL: 20 * scaleW,
  GAME_BOARD_COUNT_HEIGHT: 40 * scaleH,
  SCORE_BOARD_WIDTH: 160 * scaleW,
  POPS_BOARD_WIDTH: 120 * scaleW,

  // ======================= MENU SCREEN =======================
  SOUND_BUTTON_TOP: 135 * rawScaleH,
  MENU_BUTTON_TOP: 215 * rawScaleH,
  MENU_BUTTON_MARGIN_TOP: 25 * scaleH,
  MENU_BUTTON_BORDER_RADIUS: 33 * scaleW,
  MENU_BUTTON_BORDER_WIDTH: 2 * scaleW,
  MENU_BUTTON_PADDING_HORIZONTAL: 25 * scaleW,
  MENU_BUTTON_PADDING_VERTICAL: 10 * scaleH,
  RESUME_BUTTON_MARGIN_BOTTOM: 20 * scaleH,
  RESUME_BUTTON_SCALE: 1.18,
  RATE_BUTTON_SCALE: 1.1,

  // ======================= WORD PACK SCREEN =======================
  WORD_PACK_TITLE_TOP: 0 + (isTablet ? 80 : 0),
  WORD_PACK_BUTTON_WIDTH: 310 * scaleW,
  WORD_PACK_BUTTON_HEIGHT: 80 * scaleH,
  WORD_PACK_BUTTON_BORDER_RADIUS: 30 * scaleW,
  WORD_PACK_BUTTON_BORDER_WIDTH: 2 * scaleW,
  WORD_PACK_BUTTON_TOP: 10 * rawScaleH + (isTablet ? 80 : 0),
  WORD_PACK_BUTTON_MARGIN_TOP: 23 * scaleH,
  WORD_PACK_ICON_SIZE: 80 * scaleW,
  WORD_PACK_ICON_MARGIN_LEFT: 20 * scaleW,
  WORD_PACK_TEXT_MARGIN_LEFT: 9 * scaleW,
  WORD_PACK_TEXT_MARGIN_TOP: -10 * scaleH,
  WORD_PACK_TITLE_WIDTH: 400 * scaleW,
  WORD_PACK_TITLE_HEIGHT: 56 * scaleH,
  WORD_PACK_TITLE_MARGIN_BOTTOM: 18 * scaleH,
  WORD_PACK_SUBTITLE_WIDTH: 340 * scaleW,
  WORD_PACK_SUBTITLE_MARGIN_TOP: 4 * scaleH,
  NATURE_ICON_TOP: -5 * scaleH,
  FOOD_ICON_TOP: -5 * scaleH,
  ANIMALS_ICON_SCALE: 1.05,

  // ======================= DIFFICULTY SCREEN =======================
  DIFFICULTY_BUTTON_WIDTH: 350 * scaleW,
  DIFFICULTY_BUTTON_HEIGHT: 100 * scaleH,
  DIFFICULTY_BUTTON_BORDER_RADIUS: 30 * scaleW,
  DIFFICULTY_BUTTON_BORDER_WIDTH: 4 * scaleW,
  DIFFICULTY_BUTTON_MARGIN_TOP: 25 * scaleH,

  // ======================= ICON SIZES & SPACING =======================
  BACK_ICON_SIZE: 70 * scaleW,
  SOUND_ICON_SIZE: 70 * scaleW,
  RESUME_ICON_SIZE: 50 * scaleW,
  MENU_ICON_MARGIN_RIGHT: 8 * scaleW,

  // ======================= GENERAL LETTER SPACING =======================
  LETTER_SPACING_XS: 0.5,
  LETTER_SPACING_SMALL: 1,
  LETTER_SPACING_MEDIUM: 1.5,
  LETTER_SPACING_LARGE: 2.5,

  // ======================= PACKS =======================
  NATURE_PACK_TITLE_TOP: -3 * scaleH,
  NATURE_PACK_WORD_TOP: -8 * scaleH,
  NATURE_PACK_WORD_MARGIN_BOTTOM: -23 * scaleH,
  NATURE_PACK_LETTER_SPACING: 5,

  FOOD_PACK_TITLE_TOP: -7 * scaleH,
  FOOD_PACK_WORD_TOP: -6 * scaleH,
  FOOD_PACK_WORD_MARGIN_BOTTOM: -3 * scaleH,
  FOOD_PACK_LETTER_SPACING: 5,

  ANIMALS_PACK_TITLE_TOP: -10 * scaleH,
  ANIMALS_PACK_WORD_TOP: -15 * scaleH,
  ANIMALS_PACK_WORD_MARGIN_BOTTOM: -20 * scaleH,
  ANIMALS_PACK_LETTER_SPACING: 5,

  STORY_PACK_TITLE_TOP: 4 * scaleH,
  STORY_PACK_WORD_TOP: 10 * scaleH,
  STORY_PACK_WORD_MARGIN_BOTTOM: 14 * scaleH,
  STORY_PACK_LETTER_SPACING: -1,
};

export default layouts;
