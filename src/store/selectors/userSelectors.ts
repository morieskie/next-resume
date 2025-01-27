import { IExperience } from "@/interfaces/IExperience";
import { RootState } from "../index";

export const userSelector = (state: RootState) => state.user;

export const userExperienceSelector = (state: RootState) =>
  state.user.experience;

export const userRolesSelector = (state: RootState) => [
  ...new Set(state.user.experience.map((e) => e.role)),
];

export const userEducationSelector = (state: RootState) => state.user.education;
export const userTechnologySelector = (state: RootState) =>
  state.user.technologies;

export const userExperienceByFilterSelector = (
  state: RootState,
  role: string,
  from: number = 1977,
  to: number = new Date().getFullYear()
) => {
  let roles = state.user.experience;

  const experienceFilter = (e: IExperience) =>
    new Date(e.from).getFullYear() >= from &&
    new Date(e.to).getFullYear() <= to;

  roles = roles.filter(experienceFilter);

  if (role) {
    const experienceRoleFilter = (e: IExperience) => e.role.includes(role);
    roles = roles.filter(experienceRoleFilter);
  }
  return roles;
};
