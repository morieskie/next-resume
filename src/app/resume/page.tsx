"use client";
import SectionComponent from "@/components/SectionContent";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";
import { useSelector } from "react-redux";
import {
  userEducationSelector,
  userExperienceByFilterSelector,
  userTechnologySelector,
} from "@/store/selectors/userSelectors";
import { RootState } from "@/store";
import { IExperience } from "@/interfaces/IExperience";
import { IEducation } from "@/interfaces/IEducation";

const ResumeComponent = () => {
  const education = useSelector(userEducationSelector);
  const experience = useSelector((s: RootState) =>
    userExperienceByFilterSelector(s, "", 2018, 2022)
  );
  const technologies = useSelector(userTechnologySelector);

  return (
    <SectionComponent
      sectionTitle="Resume"
      classLists={{
        wrapperBlock: "custom-page-content",
        headerBlock: "",
      }}
    >
      <>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            {experience && (
              <div className="block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>

                <div className="timeline">
                  {experience.map((employment: IExperience, index: number) => (
                    <div className="timeline-item" key={index}>
                      <h4 className="item-title">{employment.role}</h4>
                      <span className="item-period">
                        {employment.from} - {employment.to}
                      </span>
                      <span className="item-small">{employment.company}</span>
                      <p className="item-description">
                        {employment.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            {education.length && (
              <div className="block">
                <div className="block-title">
                  <h3>Education</h3>
                </div>

                <div className="timeline">
                  {education.map((institution: IEducation, index: number) => (
                    <div className="timeline-item" key={index}>
                      <h4 className="item-title">{institution.description}</h4>
                      <span className="item-period">
                        {institution.from} - {institution.to}
                      </span>
                      <span className="item-small">{institution.company}</span>
                      <p className="item-description">
                        {institution.subjects.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {technologies && (
              <div className="block">
                <div className="block-title">
                  <h3>
                    Coding <span>Skills</span>
                  </h3>
                </div>

                <div className="skills-info">
                  {technologies.map((skill, index) => (
                    <span key={index}>
                      <h4>{skill.tech}</h4>
                      <div className="skill-container">
                        <AnimatedProgressBar
                          level={(skill.competency / 5) * 100}
                        />
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <!-- Download Resume Button --> */}
        {/* <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="block">
              <div className="center download-resume">
                <a href="files/Profile.pdf" className="btn btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- End of Download Resume Button --> */}
      </>
    </SectionComponent>
  );
};

export default ResumeComponent;
