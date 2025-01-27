"use client";
import TextAlternateComponent from "@/components/TextAlternateComponent";
import { userRolesSelector, userSelector } from "@/store/selectors/userSelectors";
import { trimLeft } from "@/utils/common";
import { useSelector } from "react-redux";
import { appUrl } from "@/config";
import parse from 'html-react-parser';
import { themeClassSelector } from "@/store/selectors/themeSelectors";



export default function Home() {
  const {
    name: { firstName, lastName },
    socialLinks,
    bio,
    imageSrc,
  } = useSelector(userSelector);
  const roles = useSelector(userRolesSelector);
    const themeColorClass = useSelector(themeClassSelector);

  const getImageUrl = (): string => {
    return imageSrc.includes("://")
      ? imageSrc
      : `${appUrl}/${trimLeft(imageSrc, "/")}`;
  };
  return (
    <section className="pt-page pt-page-current pt-page-relative">
      <div className={`section-inner start-page-content `}>
        <div className={`page-header ${themeColorClass}`}>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="photo">
                <img
                  src={getImageUrl()}
                  alt={firstName}
                  width={274}
                  height={274}
                />
              </div>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="title-block">
                <h1>
                  {firstName} {lastName}
                </h1>
                <div className="owl-carousel text-rotation">
                  <div className="item">
                    <div
                      className="sp-subtitle"
                      style={{ height: "20px", overflow: "auto" }}
                    >
                      <TextAlternateComponent content={roles} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                {socialLinks.map((media, index) => (
                  <a
                    href={media.url}
                    {...(media.url !== "#" && { target: "_blank" })}
                    title={media.firm}
                    key={`${media.firm + index}`}
                  >
                    <i
                      className={`fa fa-${media.firm
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`page-content`}>
          <div className="row align-items-start">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="about-me">
                <div className="block-title">
                  <h3>
                    About <span>Me</span>
                  </h3>
                </div>
                <div className="text-justify">{parse(bio)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
