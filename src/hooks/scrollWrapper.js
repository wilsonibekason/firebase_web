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

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const params = useParams();
    return <Component router={{ location, params, history }} {...props} />;
  };
  return Wrapper;
};
