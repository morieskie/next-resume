import { RootState } from "../index";

export const activeThemeSelector = (state: RootState) => state.theme.active;

export const themeColorClassSelector = (state: RootState, color: string) =>
  state.theme.colorClasses[color];

export const themeColorsSelector = (state: RootState) => state.theme.colors;

export const themeClassSelector = (state: RootState) =>
  state.theme.colorClasses[state.theme.active];
