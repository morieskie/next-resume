import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    classNames: {
      headerClasses: ["mobile-menu-hide"],
      siteTitleClasses: ["mobile-hidden"],
    },
    items: ["Home", "Resume", "Services", "Portfolio", "Contact"],
  },
  reducers: {
    hideMobileMenu: (state) => {
      return {
        ...state,
        classNames: {
          headerClasses: [
            ...state.classNames.headerClasses
              .filter((c) => c !== "mobile-menu-hide")
              .filter((c) => c !== "mobile-menu-visible"),
            "mobile-menu-hide",
          ],
          siteTitleClasses: [
            ...state.classNames.siteTitleClasses.filter(
              (c) => c !== "mobile-hidden"
            ),
            "mobile-hidden",
          ],
        },
      };
    },
    showMobileMenu: (state) => {
      console.log(
        "show",
        state.classNames.headerClasses.filter((c) => c !== "mobile-menu-hide")
      );
      return {
        ...state,
        classNames: {
          headerClasses: [
            ...state.classNames?.headerClasses
              .filter((c) => c !== "mobile-menu-hide")
              .filter((c) => c !== "mobile-menu-visible"),
            "mobile-menu-visible",
          ],
          siteTitleClasses: [
            ...state.classNames?.siteTitleClasses.filter(
              (c) => c !== "mobile-hidden"
            ),
            "mobile-hidden",
          ],
        },
      };
    },
    addHeaderClass: (state, action: PayloadAction<string>) => {
      const updated = [
        ...state.classNames.headerClasses
        .filter((c) => action.payload !== c)
        .filter((c) =>  !c.startsWith('color-')),
        action.payload,
      ];
      return {
        ...state,
        classNames: {
          siteTitleClasses: [...state.classNames.siteTitleClasses],
          headerClasses: updated,
        },
      };
    },
    removeHeaderClass: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        classNames: {
          ...state.classNames,
          headerClasses: [
            ...state.classNames.headerClasses.filter(
              (c) => c !== action.payload
            ),
          ],
        },
      };
    },
  },
});

export const {
  hideMobileMenu,
  showMobileMenu,
  addHeaderClass,
  removeHeaderClass,
} = menuSlice.actions;

export default menuSlice.reducer;
