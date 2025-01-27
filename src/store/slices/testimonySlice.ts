import { ITestimony } from "@/interfaces/ITestimony";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const testimonySlice = createSlice({
  name: "testimonySlice",
  initialState: {
    tesimonies: [] as ITestimony[],
  },
  reducers: {
    setTestimonies: (state, action: PayloadAction<ITestimony[]>) => {
      return {
        ...state,
        tesimonies: [...new Set([...state.tesimonies, ...action.payload])],
      };
    },
  },
});

export const {setTestimonies} = testimonySlice.actions;

export default testimonySlice.reducer;
