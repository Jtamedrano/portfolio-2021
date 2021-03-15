import { FC } from "react";

interface GallaryViewProps {
  images: string[];
}

const Gallary = ({ images }: GallaryViewProps) => {
  console.log(images);
  return (
    <>
      <div className="gallary-container" onClick={(e) => e.stopPropagation()}>
        <div className="imageWrapper">
          <img src={`/project-images/${images[0]}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Gallary;
