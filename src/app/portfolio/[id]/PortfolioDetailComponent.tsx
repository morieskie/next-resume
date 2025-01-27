"use client";
import { SyntheticEvent, useState } from "react";
import {
  selectPortfolioItemById,
  selectPortfolioProjects,
} from "@/store/selectors/portfolioSelectors";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ImagePreloadComponent from "@/components/ImagePreloadComponent";
import { appUrl } from "@/config";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const PrevSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-prev" onClick={() => swiper.slidePrev()}></div>;
};

const NextSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-next" onClick={() => swiper.slideNext()}></div>;
};


const PortfolioDetailComponent = ({ emitClose }: any) => {
  const navigate = useRouter();
  const { id } = useParams();
  const [next, setNext] = useState<undefined | string>(undefined);
  const [prev, setPrev] = useState<undefined | string>(undefined);
  const projects = useSelector(selectPortfolioProjects);
  const portfolio = useSelector((state: RootState) =>
    selectPortfolioItemById(state, String(id))
  );

  const onCloseHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    emitClose();
  };

  const handleClick = (
    e: SyntheticEvent,
    direction: "prev" | "next" = "next"
  ) => {
    e.preventDefault();
    const index = projects.findIndex((p) => String(p.id) === String(id));
    console.log("index", index);
    console.log("id", id);
    if (direction === "next" && (index === -1 || !projects[index + 1])) {
      return false;
    }
    if (direction === "prev" && (index === -1 || !projects[index - 1])) {
      return false;
    }

    const nextId =
      direction === "next" ? projects[index + 1].id : projects[index].id;
    const prevId =
      direction === "next" ? projects[index].id : projects[index - 1].id;

    setNext(String(nextId));
    setPrev(String(prevId));
    navigate.push(`/portfolio/${direction === "next" ? nextId : prevId}`);
  };

  return (
    <>
      {portfolio && (
        <div
          key={portfolio.id}
          id="page-ajax-loaded"
          className="page-portfolio-loaded animated"
        >
          <div className="ajax-page-wrapper">
            <div className="ajax-page-nav">
              <div className="nav-item ajax-page-prev-next">
                <a
                  className="ajax-page-load"
                  id={prev}
                  href={prev ? `/portfolio/${prev}` : prev}
                  onClick={(e) => handleClick(e, "prev")}
                >
                  <i className="zmdi zmdi-chevron-left"></i>
                </a>
                <a
                  className="ajax-page-load"
                  id={next}
                  href={next ? `/portfolio/${next}` : next}
                  onClick={handleClick}
                >
                  <i className="zmdi zmdi-chevron-right"></i>
                </a>
              </div>
              <div className="nav-item ajax-page-close-button">
                <Link
                  id="ajax-page-close-button"
                  href="/"
                  onClick={onCloseHandler}
                >
                  <i className="zmdi zmdi-close"></i>
                </Link>
              </div>
            </div>

            <div className="ajax-page-title">
              <h1>{portfolio.project}</h1>
            </div>

            <div className="row">
              <div className="col-sm-7 col-md-7 portfolio-block">
                <div className="owl-carousel portfolio-page-carousel">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={false} // Enables built-in navigation buttons
                    pagination={true}
                    modules={[Navigation, Pagination]}
                  >
                    <ImagePreloadComponent>
                      <div className="owl-stage-outer">
                        {portfolio.images.map((img: string, index: number) => (
                          <SwiperSlide key={index}>
                            <div className="item" key={index}>
                              <img
                                src={`${appUrl}/${img}`}
                                alt={portfolio.altTitle}
                                style={{ maxHeight: "800px" }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </ImagePreloadComponent>
                    {portfolio.images.length > 1 && (
                      <div className="owl-nav" style={{ zIndex: 1 }}>
                        <PrevSlideButton />
                        <NextSlideButton />
                      </div>
                    )}
                  </Swiper>
                </div>
              </div>

              <div className="col-sm-5 col-md-5 portfolio-block">
                {/*  Project Description  */}
                <div className="block-title">
                  <h3>Description</h3>
                </div>
                <ul className="project-general-info">
                  {/* <li>
                    <p>
                      <i className="fa fa-user"></i> 
                    </p>
                  </li> */}
                  {portfolio.url && (
                    <li>
                      <p>
                        <i className="fa fa-globe"></i>
                        <a
                          href={portfolio.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {portfolio.url}
                        </a>
                      </p>
                    </li>
                  )}
                  {portfolio.date && (
                    <li>
                      <p>
                        <i className="fa fa-calendar"></i>
                        {new Date(portfolio.date).getFullYear()}
                      </p>
                    </li>
                  )}
                </ul>

                <p className="text-justify">
                  {portfolio.description
                    ? portfolio.description
                    : "To be updated soon..."}
                </p>
                {/*  /Project Description  */}

                {/*  Technology  */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Technology</h3>
                  </div>
                  <ul className="tags">
                    {portfolio.technologies.map((tech: string) => (
                      <li key={tech}>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*  /Technology  */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioDetailComponent;
