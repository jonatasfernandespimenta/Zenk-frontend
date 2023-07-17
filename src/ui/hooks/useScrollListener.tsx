import { useEffect } from "react";

const useScrollListener = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useScrollListener;
