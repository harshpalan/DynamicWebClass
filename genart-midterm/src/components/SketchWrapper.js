import React, { useEffect } from "react";
import p5 from "p5";

const SketchWrapper = ({ sketch, children }) => {
  useEffect(() => {
    new p5(sketch);
  }, [sketch]);

  return <>{children}</>;
};

export default SketchWrapper;
