import { IPortfoliItem } from "@/interfaces/IPortfolioItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState: {
    projects: [] as IPortfoliItem[],
    activeCategory: "",
    categories: [] as string[],
  },
  reducers: {
    loadPortfolios: (state, action: PayloadAction<IPortfoliItem[]>) => {
      let categories: string[] = [];
      action.payload.forEach(
        (i) => (categories = [...new Set([...categories, ...i.categories])])
      );
      categories.sort((a, b) => (a < b ? -1 : 1));
      return { ...state, projects: action.payload, categories };
    },
    addItem: (state, action: PayloadAction<IPortfoliItem>) => {
      return { ...state, projects: [...state.projects, action.payload] };
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        activeCategory: action.payload,
      };
    },
  },
});

export const { loadPortfolios, addItem, setActiveCategory } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
