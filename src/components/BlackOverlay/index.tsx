import { FC, MouseEvent, useContext } from "react";
import { PageContext } from "../../PageContextProvider";

const BlackOverlay: FC = (props) => {
  const context = useContext(PageContext);
  const toggleOverlay = (e: MouseEvent) => {
    e.stopPropagation();
    if (!!context.setModalState) context.setModalState(false);
  };
  return <div className="black-overlay" onClick={toggleOverlay}></div>;
};

export default BlackOverlay;
