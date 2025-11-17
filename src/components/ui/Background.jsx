import React from "react";
import ColorBends from "./ColorBends";

const Background = ({ children }) => {
  return (
    <div className="h-screen w-screen inset-0 -z-50 absolute">
      <ColorBends
        colors={["#808080"]}
        rotation={73}
        speed={0.3}
        scale={1.2}
        frequency={1.2}
        warpStrength={1.2}
        mouseInfluence={0.8}
        parallax={0.9}
        noise={0.08}
        transparent={true}
        className={``}
      >
        {children}
      </ColorBends>
    </div>
  );
};

export default Background;
