import { ScreenSizeContext } from "components";
import { useContext } from "react";

export const useScreenSize = () => {
  const { deviceType } = useContext(ScreenSizeContext);

  return {
    deviceType,
    isMobile: "mobile" === deviceType,
    isTablet: "tablet" === deviceType,
    isDesktop: "desktop" === deviceType
  };
};

export default useScreenSize;
