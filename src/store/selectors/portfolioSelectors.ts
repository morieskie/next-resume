import { RootState } from "../index";

export const selectPortfolioActiveCategory = (state: RootState) =>
  state.portfolio.activeCategory;

// Selector to get all portfolio items
export const selectPortfolioProjects = ({
  portfolio: { projects, activeCategory },
}: RootState) => {
  return activeCategory === ""
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));
};

export const selectPortfolioCategories = (state: RootState) =>
  state.portfolio.categories;

// Selector to get a single portfolio item by ID
export const selectPortfolioItemById = (state: RootState, id: string) =>
  state.portfolio.projects.find((item) => String(item.id) === id);
