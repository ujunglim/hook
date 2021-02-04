import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (typeof onClick !== "function") {
        return;
      }
      // componentDidMount or didUpdate, add event
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      // componentWillUnMount, remove event
      return () => {
        if (element.current) {
          element.current.removeEventListner("click", onClick);
        }
      };
    }, []); // no deps: execute only didMount, not execute when didUpdate
    return element;
  };