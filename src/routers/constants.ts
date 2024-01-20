export type RootRoutes = '/characters';

const CHARACTERS: RootRoutes = '/characters';

export const ROUTES = {
  CHARACTERS,
} as const;

export type RouteParams = 'characterId';

const CHARACTER_ID: RouteParams = 'characterId';

export const RouteParams = {
  CHARACTER_ID,
} as const;
