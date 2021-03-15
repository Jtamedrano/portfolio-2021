import { FC, MouseEvent, useContext } from "react";
import { PageContext } from "../../PageContextProvider";
import Gallary from "./Gallary";
import "./styles.scss";

const BlackOverlay: FC = (props) => {
  const context = useContext(PageContext);
  const toggleOverlay = (e: MouseEvent) => {
    e.stopPropagation();
    if (!!context.setModalState) context.setModalState(false);
  };
  return (
    <div className="black-overlay" onClick={toggleOverlay}>
      {!!context.imageArray && context.imageArray.length > 0 && (
        <Gallary images={context.imageArray} />
      )}
    </div>
  );
};

export default BlackOverlay;
