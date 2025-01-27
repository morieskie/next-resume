"use client";
import React, { ReactNode } from "react";
import axios from "axios";
import FooterComponent from "./FooterComponent";
import LoadingComponent from "./LoadingComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiUrl } from "@/config";
import { loadPortfolios } from "@/store/slices/portfolioSlice";
import {
  setUser,
  setUserExperience,
  setUserEducation,
  setUserTechnologies,
} from "@/store/slices/userSlice";
import { useEffect } from "react";
import { IExperience } from "@/interfaces/IExperience";
import { ITechnology } from "@/interfaces/ITechnology";
import { IMe } from "@/interfaces/IMe";
import { IPortfoliItem } from "@/interfaces/IPortfolioItem";
import { IEducation } from "@/interfaces/IEducation";

const PageComponent = ({ children }: { children: ReactNode }) => {
  const isLoading = useSelector((state: { loader: { isLoading: boolean } }) => {
    return state.loader.isLoading;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<IMe>(`${apiUrl}/data/about.json`)
      // .get<any>(`http://localhost:8000/v1/api/users/678a1201eb20c04f2030d66a`)
      .then(({ data }) => {
        dispatch(setUser(data));
      });

    axios
      .get<IPortfoliItem[]>(`${apiUrl}/data/portfolio.json`)
      .then(({ data }) => {
        dispatch(loadPortfolios(data));
      });

    axios
      .get<IExperience[]>(`${apiUrl}/data/experience.json`)
      .then(({ data }) => {
        dispatch(setUserExperience(data));
      });

    axios
      .get<IEducation[]>(`${apiUrl}/data/education.json`)
      .then(({ data }) => dispatch(setUserEducation(data)));

    axios
      .get<ITechnology[]>(`${apiUrl}/data/technologies.json`)
      .then(({ data }) => dispatch(setUserTechnologies(data)));
  }, [dispatch]);

  return (
    <>
      {isLoading !== false && <LoadingComponent />}
      <div id="page" className="page-layout">
        {children}
      </div>
      <FooterComponent />
    </>
  );
};

export default PageComponent;
