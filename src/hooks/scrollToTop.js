import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "./scrollWrapper";
// export const scrollToTop = ({ children }) => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
//   children.forEach((child) => {
//     child.scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// };
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children || null;
};

export default withRouter(ScrollToTop);
