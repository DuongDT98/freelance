import React from "react";
import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
const NonAuthLayout = ({ children }) => {
  const dynamicWidth = "device-width";
  const dynamicInitialScale = 1.0;
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content={`width=${dynamicWidth}, initial-scale=${dynamicInitialScale}`}
        />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default NonAuthLayout;
