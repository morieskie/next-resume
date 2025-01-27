import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const colors = [
  "deep-purple",
  "red",
  "blue",
  "deep-orange",
  "green",
  "light-blue",
  "pink",
  "purple",
  "orange",
  "amber",
  "lime",
  "teal",
];

const colorClasses = new Map<string, string>();
// const colorClasses = <{ [k: string]: string }>{}; 

colors.forEach(
  (color, index) =>
    colorClasses.set(color, "color-" + (index + 1))
    // (colorClasses[color] = "color-" + (index + 1))
);

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    active: "deep-purple",
    colorClasses: Object.fromEntries(colorClasses),
    colors,
  },
  reducers: {
    setActiveTheme: (state, action: PayloadAction<string>) => {
      return { ...state, active: action.payload };
    },
  },
});

export const { setActiveTheme } = themeSlice.actions;

export default themeSlice.reducer;
