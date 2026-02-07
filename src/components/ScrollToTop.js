import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // force scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // force scroll to top on browser reload
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
}

export default ScrollToTop;

