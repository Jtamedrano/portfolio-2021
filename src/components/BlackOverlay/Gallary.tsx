import CloseIcon from "@material-ui/icons/Close";
import { MouseEvent, useContext } from "react";
import { PageContext } from "../../PageContextProvider";

interface GallaryViewProps {
  images: string[];
}

const Gallary = ({ images }: GallaryViewProps): JSX.Element => {
  const ctx = useContext(PageContext);

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    if (!!ctx.setModalState) ctx.setModalState(false);
  };

  return (
    <>
      <div className="gallary-container" onClick={(e) => e.stopPropagation()}>
        <div className="top-gallary-bar">
          <CloseIcon
            color="action"
            fontSize="large"
            className="close-btn"
            onClick={handleClose}
          />
        </div>
        <div className="imageWrapper">
          <img src={`/project-images/${images[0]}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Gallary;
