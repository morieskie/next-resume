import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loaderReducer from "./slices/loaderSlice";
import portfolioSlice from "./slices/portfolioSlice";
import menuSlice from "./slices/menuSlice";
import themeSlice from "./slices/themeSlice";
import testimonySlice from "./slices/testimonySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    portfolio: portfolioSlice,
    menu: menuSlice,
    theme: themeSlice,
    testimony: testimonySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
