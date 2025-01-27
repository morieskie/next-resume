import { RootState } from "../index";

export const menuHeaderClassesSelector = (state: RootState) => {
  return state.menu.classNames.headerClasses.join(" ");
};
export const menuSiteTitleClassesSelector = (state: RootState) => {
  return state.menu.classNames.siteTitleClasses.join(" ");
};

export const menuItemsSelector = (state: RootState) => {
  return state.menu.items;
};
