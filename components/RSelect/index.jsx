"use client";
import { useState } from "react";
import Select from "react-select";
import CustomIndicator from "./CustomIndicator";
import { options, selectStyles } from "./data";
import "./styles.css";

const RSelect = ({ showPortal = false }) => {
  const [value, setVal] = useState(null);

  const CustomIndicatorSeparator = () => {
    return null;
  };

  const onChange = (val) => {
    setVal(val);
  };

  const portalProps = showPortal
    ? {
        menuPortalTarget: document.body,
        menuPosition: "fixed",
      }
    : {};

  return (
    <div
      className="select-ctn"
      style={
        showPortal
          ? { maxWidth: "100%" }
          : { maxWidth: "320px", margin: "auto" }
      }
    >
      <Select
        value={value}
        placeholder="Select Position"
        className={`r-select`}
        isSearchable={false}
        styles={selectStyles(showPortal)}
        options={options}
        onChange={(value) => onChange(value)}
        components={{
          DropdownIndicator: CustomIndicator,
          IndicatorSeparator: CustomIndicatorSeparator,
        }}
        {...portalProps}
      />
    </div>
  );
};

export default RSelect;
