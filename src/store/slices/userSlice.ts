import { IEducation } from "@/interfaces/IEducation";
import { IExperience } from "@/interfaces/IExperience";
import { IMe } from "@/interfaces/IMe";
import { ISocialLink } from "@/interfaces/ISociatLink";
import { ITechnology } from "@/interfaces/ITechnology";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {
      firstName: "Guest",
      lastName: "User",
    },
    bio: "",
    imageSrc: "",
    mobileNumber: "",
    email: "",
    address: "",
    socialLinks: [] as ISocialLink[],
    experience: [] as IExperience[],
    education: [] as IEducation[],
    technologies: [] as ITechnology[],
  },
  reducers: {
    setUser: (state, action: PayloadAction<IMe>) => ({
      ...state,
      ...action.payload,
    }),
    setUserExperience: (state, action: PayloadAction<IExperience[]>) => {
      return {
        ...state,
        experience: action.payload,
      };
    },
    setUserEducation: (state, action: PayloadAction<IEducation[]>) => {
      console.log('Education.set', {action})
      return {
        ...state,
        education: action.payload,
      };
    },
    setUserTechnologies: (state, action: PayloadAction<ITechnology[]>) => {
      return {
        ...state,
        technologies: action.payload,
      };
    },
  },
});

export const {
  setUser,
  setUserExperience,
  setUserEducation,
  setUserTechnologies,
} = userSlice.actions;

export default userSlice.reducer;
