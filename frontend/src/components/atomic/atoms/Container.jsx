import React from "react";

const Container = ({ children, additionalClasses }) => {
  return (
    <div
      className={`mx-auto container my-5 ${
        additionalClasses ? additionalClasses : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
