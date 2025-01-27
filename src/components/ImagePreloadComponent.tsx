"use client";
import imagesloaded from "imagesloaded";
import { ReactNode, useEffect, useRef } from "react";
export const ImagePreloadComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const el = container.current as HTMLImageElement;
      imagesloaded(el, () => {
        console.log("All images loaded");
      });
    }
  }, []);

  return <div ref={container}>{children}</div>;
};

export default ImagePreloadComponent;
