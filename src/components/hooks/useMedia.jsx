import React from "react";

const useMedia = (props) => {
  const [state, setState] = React.useState(() => {
    if (typeof window !== "undefined") return window.matchMedia(props).matches;

    return;
  });

  console.log(state);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setState(window.matchMedia(props).matches);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setState(window.matchMedia(props).matches);
        });
      };
    }
  }, [props]);

  return state;
};

export default useMedia;
