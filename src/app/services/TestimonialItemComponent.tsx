import { appUrl } from "@/config";
import { ITestimony } from "@/interfaces/ITestimony";
import { trimLeft } from "@/utils/common";

const TestimonialItemComponent = ({ testimony }: { testimony: ITestimony }) => {
  const truncate = (text: string, maxLength = 500) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  return (
    <>
      <div className="testimonial-item">
        <div className="testimonial-credits">
          <div className="testimonial-picture">
            <img
              decoding="async"
              src={`${appUrl}/${trimLeft(testimony.imgUrl, '/')}`}
              alt={testimony.name}
            />
          </div>
          <div className="testimonial-author-info">
            <p className="testimonial-author">{testimony.name}</p>

            <p className="testimonial-firm">
              <a href={testimony.github}>{testimony.company}</a> /
              <span className="testimonial-position">
                {testimony.position}
              </span>
            </p>
          </div>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-text">
            <p>{'"' + truncate(testimony.testimony) + '"'}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialItemComponent;
