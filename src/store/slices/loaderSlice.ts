import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state: { isLoading: boolean }, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    unsetLoading: (state: { isLoading: boolean }, action) => {
        console.log('unsetting', action)
        return {
            ...state,
            isLoading: action.payload,
          }
    },
  },
});

export const {setLoading, unsetLoading} = loaderSlice.actions;

export default loaderSlice.reducer;