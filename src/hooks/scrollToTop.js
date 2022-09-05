import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { scrollWrapper } from "./scrollWrapper";
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
const scrollToTop = ({ children }) => {
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

export default scrollWrapper(scrollToTop);
