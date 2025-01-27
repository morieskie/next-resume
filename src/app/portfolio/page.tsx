"use client";
import { useDispatch, useSelector } from "react-redux";
import SectionComponent from "@/components/SectionContent";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence } from "motion/react";
import {
  selectPortfolioActiveCategory,
  selectPortfolioCategories,
  selectPortfolioProjects,
} from "@/store/selectors/portfolioSelectors";
import { setActiveCategory } from "@/store/slices/portfolioSlice";
import { AppDispatch } from "@/store";
import ImagePreloadComponent from "@/components/ImagePreloadComponent";
import PortfolioItem from "./PortfolioItem";
import Link from "next/link";

const PortfolioComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector(selectPortfolioProjects);
  const categories = useSelector(selectPortfolioCategories);
  const activeCategory = useSelector(selectPortfolioActiveCategory);
  const [gridHeight, setGridHeight] = useState("auto");
  const gridContainer = useRef(null);

  const onFilter = useCallback(
    (e: SyntheticEvent, category: string) => {
      e.preventDefault();
      dispatch(setActiveCategory(category));
    },
    [dispatch]
  );

  useEffect(() => {
    if (gridContainer?.current !== null) {
      const grid = gridContainer.current as HTMLElement;
      const fisrtChild = grid.querySelector("figure");
      const h =
        Math.abs(
          Number(fisrtChild?.offsetHeight) * Math.ceil(items.length / 3)
        ) + 50;
      setGridHeight(`${h}px`);
    }
  }, [gridContainer, items]);

  return (
    <SectionComponent
      sectionTitle="Portfolio"
      classLists={{
        wrapperBlock: "custom-page-content",
      }}
    >
      <div className="portfolio-content">
        {/*  Portfolio filter  */}
        <ul id="portfolio_filters" className="portfolio-filters">
          {categories.map((category, index) => (
            <li
              className={activeCategory === category ? "active" : ""}
              key={index}
            >
              <Link
                href="/"
                className="filter btn btn-sm btn-link"
                onClick={(e) => onFilter(e, category)}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        {/*  End of Portfolio filter  */}

        {/*  Portfolio Grid  */}
        <div
          id="portfolio_grid"
          className="portfolio-grid three-columns shuffle"
          style={{ height: gridHeight, transition: "height 0.3s" }}
          ref={gridContainer}
        >
          <ImagePreloadComponent>
            <AnimatePresence>
              {items.map((item, index) => (
                <PortfolioItem project={item} key={`${item.id}${index}`} />
              ))}
            </AnimatePresence>
          </ImagePreloadComponent>
        </div>
        {/*  /Portfolio Grid  */}
        {/* {items.length && (
          <div className="row">
            <div className="center col-lg-12 col-md-12 col-sm-12">
              <a
                className="btn btn-secondary pf-load-more"
                href="/"
                data-load-text="Loading..."
                data-more-text="Load More"
              >
                Load More
              </a>
            </div>
          </div>
        )} */}
      </div>
    </SectionComponent>
  );
};

export default PortfolioComponent;
