import React, { useEffect, useRef } from "react";

const useOutsideClick = (handler) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, handler]);

  return [ref];
};

export default useOutsideClick;
