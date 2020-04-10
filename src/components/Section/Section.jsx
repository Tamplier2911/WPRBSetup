import "./Section.scss";
import React from "react";

const Section = ({ children, id }) => {
  return (
    <div className={`section__box-${id}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { key: id })
      )}
    </div>
  );
};

export default Section;
