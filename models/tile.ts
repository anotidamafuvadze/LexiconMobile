export type Tile = {
  id?: string;
  position: [number, number];
  value: string;
  justCreated: boolean;
}

// For dispatching CREATE_TILE
export type PartialTileInput = {
  position?: [number, number];
  value: string;
  justCreated: boolean;
};

export type TileMap = {[id: string]: Tile}
