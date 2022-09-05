import React, { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

// export const scrollWrapper = ({children})=> {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const params = useParams();

//     useEffect(() => {
//         if (location.pathname === "/") {
//             return;
//         }
// }

export const scrollWrapper = (Component) => {
  const wrapper = (props) => {
    const location = useLocation;
    const navigate = useNavigate;
    const params = useParams;
    return <Component router={{ location, navigate, params }} {...props} />;
  };
  return wrapper;
};
