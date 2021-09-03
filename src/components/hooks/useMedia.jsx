import React from "react";

const useMedia = (props) => {
  const [state, setState] = React.useState(
    () => window.matchMedia(props).matches
  );

  React.useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setState(window.matchMedia(props).matches);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setState(window.matchMedia(props).matches);
      });
    };
  }, []);

  return state;
};

export default useMedia;
