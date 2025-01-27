import { RootState } from "../index";

export const testimoniesSelector = (state: RootState) =>
  state.testimony.tesimonies;
