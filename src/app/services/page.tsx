"use client"
import axios from "axios";
import SectionComponent from "@/components/SectionContent";
import TestimonialComponent from "@/app/services/TestimonialComponent";
import { ITestimony } from "@/interfaces/ITestimony";
import { useEffect } from "react";
import { apiUrl } from "@/config";
import { setTestimonies } from "@/store/slices/testimonySlice";
import { useDispatch } from "react-redux";

const ServiceComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get<ITestimony[]>(`${apiUrl}/data/testimonials.json`)
      .then(({ data }) => dispatch(setTestimonies(data)));
  }, [dispatch]);

  return (
    <SectionComponent
      sectionTitle="Services"
      classLists={{
        wrapperBlock: "custom-page-content",
        headerBlock: "color-1",
      }}
    >
      <TestimonialComponent />
    </SectionComponent>
  );
};

export default ServiceComponent;
