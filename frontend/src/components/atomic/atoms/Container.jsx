import React from "react";

const Container = ({ children, additionalClasses }) => {
  return (
    <div
      className={`mx-auto container py-7 ${
        additionalClasses ? additionalClasses : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
