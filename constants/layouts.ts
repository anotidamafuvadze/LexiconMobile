import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

export default function useLayouts() {
  const { width, height } = useWindowDimensions();
  const BASE_HEIGHT = 926;
  const BASE_WIDTH = 428;

  const scaleHeight = height / BASE_HEIGHT;
  const scaleWidth = width / BASE_WIDTH;
  const isTablet = Math.min(width, height) >= 768;
  const isPortrait = height > width;

  return useMemo(() => ({
    // ======================= HOME SCREEN =======================
    HOME_HEADER_TOP: 5 * scaleHeight,
    HOME_TARGET_WORD_TOP: 447 * scaleHeight,
    HOME_BUTTON_TOP: 458 * scaleHeight,
    HOME_BUTTON_GAP: 30 * scaleHeight,
    HOME_BUTTON_PADDING_HORIZONTAL: 15 * scaleHeight,
    HOME_BUTTON_PADDING_VERTICAL: 5 * scaleHeight,
    HOME_BUTTON_BORDER_RADIUS: 21 * scaleHeight,
    HOME_BUTTON_BORDER_WIDTH: 2 * scaleHeight,

    // ======================= GAME BOARD =======================
    GAME_BOARD_TOP: 25 * scaleHeight,
    GAME_BOARD_HEIGHT: 83 * scaleHeight,
    GAME_BOARD_BORDER_WIDTH: 2,
    GAME_BOARD_BORDER_RADIUS: 27 * scaleHeight,
    GAME_BOARD_GAP: 35 * scaleHeight,
    GAME_BOARD_PADDING_HORIZONTAL: 20 * scaleHeight,
    GAME_BOARD_COUNT_HEIGHT: 40 * scaleHeight,
    SCORE_BOARD_WIDTH: 160 * scaleHeight,
    POPS_BOARD_WIDTH: 120 * scaleHeight,

    // ======================= GAME GRID =======================
    GAME_GRID_TOP: 246 * scaleHeight,
    GAME_GRID_SIZE: 380 * scaleHeight,
    GAME_GRID_WIDTH: 366 * scaleHeight,
    GAME_GRID_BORDER_RADIUS: 13 * scaleHeight,
    GAME_GRID_PADDING: 7 * scaleHeight,
    GAME_GRID_CELL_DIVISOR: 4.6,
    GAME_GRID_CELL_MARGIN: 4 * scaleHeight,
    GAME_GRID_CELL_BORDER_WIDTH: 3 * scaleHeight,
    TILE_SIZE: 380 * scaleHeight / 4.6 ,
    TILE_MARGIN_TOP: 4 * (isPortrait ? scaleWidth : scaleHeight),
    TILE_MARGIN_BOTTOM: 4 * (isPortrait ? scaleWidth : scaleHeight),
    TILE_MARGIN_LEFT: 4 * (isPortrait ? scaleWidth : scaleHeight),
    TILE_MARGIN_RIGHT: 4 * (isPortrait ? scaleWidth : scaleHeight),
    TILE_BORDER_WIDTH: 3 * scaleHeight,

    // ======================= MENU SCREEN =======================
    SOUND_BUTTON_TOP: 135 * scaleHeight,
    MENU_BUTTON_TOP: 215 * scaleHeight,
    MENU_BUTTON_MARGIN_TOP: 25 * scaleHeight,
    MENU_BUTTON_BORDER_RADIUS: 33 * scaleHeight,
    MENU_BUTTON_BORDER_WIDTH: 2 * scaleHeight,
    MENU_BUTTON_PADDING_HORIZONTAL: 25 * scaleHeight,
    MENU_BUTTON_PADDING_VERTICAL: 10 * scaleHeight,
    RESUME_BUTTON_MARGIN_BOTTOM: 20 * scaleHeight,
    RESUME_BUTTON_SCALE: 1.18,

    // ======================= WORD PACK SCREEN =======================
    WORD_PACK_TITLE_TOP: 50 * scaleHeight,
    WORD_PACK_BUTTON_TOP: 60 * scaleHeight,
    WORD_PACK_BUTTON_WIDTH: 310 * scaleHeight,
    WORD_PACK_BUTTON_HEIGHT: 80 * scaleHeight,
    WORD_PACK_BUTTON_MARGIN_TOP: 23 * scaleHeight,
    WORD_PACK_BUTTON_BORDER_RADIUS: 30 * scaleHeight,
    WORD_PACK_BUTTON_BORDER_WIDTH: 2 * scaleHeight,
    WORD_PACK_ICON_SIZE: 80 * scaleHeight,
    WORD_PACK_ICON_MARGIN_LEFT: 20 * scaleHeight,
    WORD_PACK_TEXT_MARGIN_LEFT: 9 * scaleHeight,
    WORD_PACK_TEXT_MARGIN_TOP: -10 * scaleHeight,
    WORD_PACK_TITLE_WIDTH: 400 * scaleHeight,
    WORD_PACK_TITLE_HEIGHT: 56 * scaleHeight,
    WORD_PACK_TITLE_MARGIN_BOTTOM: 18 * scaleHeight,
    WORD_PACK_SUBTITLE_WIDTH: 340 * scaleHeight,
    WORD_PACK_SUBTITLE_MARGIN_TOP: -3 * scaleHeight,
    NATURE_ICON_TOP: -5 * scaleHeight,
    FOOD_ICON_TOP: -5 * scaleHeight * scaleHeight,
    ANIMALS_ICON_SCALE: 1.05,

    // ======================= DIFFICULTY SCREEN =======================
    DIFFICULTY_BUTTON_TOP: 230 * scaleHeight,
    DIFFICULTY_BUTTON_WIDTH: 310 * scaleHeight,
    DIFFICULTY_BUTTON_HEIGHT: 100 * scaleHeight,
    DIFFICULTY_BUTTON_MARGIN_TOP: 25 * scaleHeight,
    DIFFICULTY_BUTTON_BORDER_WIDTH: 5,
    DIFFICULTY_BUTTON_BORDER_RADIUS: 40 * scaleHeight,
    EASY_BUTTON_SCALE: 0.23 * scaleHeight,
    NORMAL_BUTTON_SCALE: 0.3 * scaleHeight,
    HARD_BUTTON_SCALE: 0.32 * scaleHeight,

    // ======================= INSTRUCTION SCREEN =======================

    INSTRUCTION_BUTTON_TOP: 700 * scaleHeight + (isTablet ? 80 : 0),
    INSTRUCTION_BUTTON_TOP_NEW: 720 * scaleHeight + (isTablet ? 80 : 0),
    INSTRUCTION_BUTTON_WIDTH: 220 * scaleHeight,

    // ======================= ICON SIZES =======================
    BACK_ICON_SIZE: 70 * scaleHeight,
    SOUND_ICON_SIZE: 70 * scaleHeight,
    RESUME_ICON_SIZE: 50 * scaleHeight,
    MENU_ICON_MARGIN_RIGHT: 8 * scaleHeight,

    // ======================= LETTER SPACING =======================
    LETTER_SPACING_XS: 0.5,
    LETTER_SPACING_SMALL: 1,
    LETTER_SPACING_MEDIUM: 1.5,
    LETTER_SPACING_LARGE: 2.5,

    // ======================= THEME PACKS =======================

    DEFAULT_TARGET_WORD_TOP: -2 * scaleHeight,
    DEFAULT_TARGET_WORD_MARGIN_BOTTOM: -10 * scaleHeight,

    NATURE_PACK_TARGET_WORD_TOP: -2 * scaleHeight,
    NATURE_PACK_TARGET_WORD_MARGIN_TOP: -7 * scaleHeight,
    NATURE_PACK_TARGET_WORD_MARGIN_BOTTOM: -21 * scaleHeight,
    NATURE_PACK_LETTER_SPACING: 5,

    FOOD_PACK_TARGER_WORD_TOP: -3 * scaleHeight,
    FOOD_PACK_TARGER_WORD_MARGIN_TOP: -5 * scaleHeight,
    FOOD_PACK_TARGET_WORD_MARGIN_BOTTOM: -13 * scaleHeight,
    FOOD_PACK_LETTER_SPACING: 5,

    ANIMALS_PACK_TARGET_WORD_TOP: -4 * scaleHeight,
    ANIMALS_PACK_TARGET_WORD_MARGIN_TOP: 10 * scaleHeight,
    ANIMALS_PACK_TARGET_WORD_MARGIN_BOTTOM: -15 * scaleHeight,
    ANIMALS_PACK_LETTER_SPACING: 5,

    STORY_PACK_TARGET_WORD_TOP: -2 * scaleHeight,
    STORY_PACK_TARGET_WORD_MARGIN_TOP: 10 * scaleHeight,
    STORY_PACK_TARGET_WORD_MARGIN_BOTTOM: -2 * scaleHeight,
    STORY_PACK_LETTER_SPACING: -1,
  }), [width, height]);
}
