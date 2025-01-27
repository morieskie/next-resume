"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "@/assets/css/testimonials.css";
import { useSelector } from "react-redux";
import { testimoniesSelector } from "@/store/selectors/testimonySelectors";
import ImagePreloadComponent from "@/components/ImagePreloadComponent";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialItemComponent from "@/app/services/TestimonialItemComponent";
const PrevSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-prev" onClick={() => swiper.slidePrev()}></div>;
};

const NextSlideButton = () => {
  const swiper = useSwiper();
  return <div className="owl-next" onClick={() => swiper.slideNext()}></div>;
};

const TestimonialComponent = () => {
  const testimonials = useSelector(testimoniesSelector);

  return (
    <>
      {testimonials.length && (
        <div className="row">
          <div className=" col-xs-12 col-sm-12 ">
            <div className="fw-col-inner">
              <div className="fw-divider-space"></div>
              <div className="block-title">
                <h3 className="testimonials-slider-title">Testimonials</h3>
              </div>
              <div className="testimonials">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation={false} // Enables built-in navigation buttons
                  pagination={false}
                  modules={[Navigation, Pagination]}
                >
                  <div className="owl-stage-outer">
                    <ImagePreloadComponent>
                      {testimonials.map((testimony, index) => (
                        <SwiperSlide key={index}>
                          {/* {({ isActive }) => ( */}
                          <div className={`owl-item`}>
                            <TestimonialItemComponent testimony={testimony} />
                          </div>
                          {/* )} */}
                        </SwiperSlide>
                      ))}
                    </ImagePreloadComponent>
                  </div>
                  <div className="fw-divider-space"></div>
                  <div className="owl-nav">
                    <PrevSlideButton />
                    <NextSlideButton />
                  </div>
                </Swiper>
              </div>
              <div className="fw-divider-space"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TestimonialComponent;
