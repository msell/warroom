import React from "react";
import breakpoints from "config/breakpoints";

export const ScreenSizeContext = React.createContext({
  width: 0,
  height: 0,
  deviceType: "mobile"
});

const determineScreenSize = width => {
  if (width >= breakpoints.desktopBreakpoint) {
    return "desktop";
  }

  if (width >= breakpoints.phoneBreakpoint) {
    return "tablet";
  }

  return "mobile";
};

const screenSizeInfo = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
  deviceType: determineScreenSize(window.innerWidth)
});

export const ScreenSizeProvider = ({ children }) => {
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
    deviceType: "mobile"
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions(screenSizeInfo());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ScreenSizeContext.Provider value={dimensions}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
