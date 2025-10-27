// src/components/ScrollToTopOnRouteChange.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll smoothly to top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null; // No UI needed
};

export default ScrollToTopOnRouteChange;
