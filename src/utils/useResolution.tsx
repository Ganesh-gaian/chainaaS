import { useEffect, useState } from "react";

function useResolution() {
  const [resolution, setResolution] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setResolution({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return resolution;
}

export default useResolution;
