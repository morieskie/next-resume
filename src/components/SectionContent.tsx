"use client";
import { useSelector } from "react-redux";
import { themeClassSelector } from "../store/selectors/themeSelectors";
import { ReactNode } from "react";
const SectionComponent = ({
  children,
  sectionTitle,
  classLists: { wrapperBlock, contentBlock },
}: {
  children: ReactNode;
  sectionTitle: string;
  classLists: {
    wrapperBlock?: string;
    contentBlock?: string;
    headerBlock?: string;
  };
}) => {
  const themeColorClass = useSelector(themeClassSelector);

  return (
    <section className="pt-page pt-page-current pt-page-relative">
      <div className={`section-inner ${wrapperBlock}`}>
        <div className={`page-header ${themeColorClass}`}>
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
        <div className={`page-content ${contentBlock ?? ""}`}>{children}</div>
      </div>
    </section>
  );
};

export default SectionComponent;
