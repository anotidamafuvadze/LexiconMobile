export type Tile = {
  id?: string;
  position: [number, number];
  value: string;
}

export type TileMap = {[id: string]: Tile}
