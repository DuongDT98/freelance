import React from "react";
import { Helmet } from "react-helmet";
import ResponsiveAppBar from "./Header";
import Styled from "./auth.styled";

// eslint-disable-next-line react/prop-types
const Authmiddleware = ({ children }) => {
  const dynamicWidth = "device-width";
  const dynamicInitialScale = 0.4;

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content={`width=${dynamicWidth}, initial-scale=${dynamicInitialScale}`}
        />
      </Helmet>
      <ResponsiveAppBar />
      <Styled.Body>{children}</Styled.Body>
    </React.Fragment>
  );
};

export default Authmiddleware;
