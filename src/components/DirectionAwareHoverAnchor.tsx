"use client";
import DirectionAwareHover from "@/utils/DirectionAwareHover";
const DirectionAwareHoverAnchor = ({
  children,
  url,
  onNavigate,
  className,
}: any) => {
  return (
    <>
      <a
        className={className}
        href={url}
        onClick={onNavigate}
        onMouseEnter={DirectionAwareHover.mouseOver}
        onMouseLeave={DirectionAwareHover.mouseOut}
      >
        {children}
      </a>
    </>
  );
};

export default DirectionAwareHoverAnchor;
