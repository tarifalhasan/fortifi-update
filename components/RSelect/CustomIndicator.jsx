import React from "react";
import { components } from "react-select";

const CustomIndicator = (props) => {
  const { selectProps } = props;
  const isOpen = selectProps.menuIsOpen;

  const indicatorText = isOpen ? (
    <img src="Path.png" alt="arrow" />
  ) : (
    <img src="Path.png" alt="arrow" />
  );

  return (
    <components.DropdownIndicator {...props}>
      <span style={{ marginRight: "5px" }}>{indicatorText}</span>
    </components.DropdownIndicator>
  );
};

export default CustomIndicator;
