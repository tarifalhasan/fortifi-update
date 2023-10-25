export const selectStyles = () => {
  return {
    indicators: (provided) => ({
      ...provided,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "18px",
      lineHeight: "normal",
      color: "#fff",
      textAlign: "center",
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "10px",
      borderColor: "#123543",
      "&:hover": {
        borderColor: "#101E33",
      },
      boxShadow: state.isFocused ? "#fa1c3c" : "none",
      backgroundColor: "#101E33",
      width: "100%",
      padding: "12px 25px",
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      padding: "14px 12px 10px 12px",
      borderRadius: "15px",
      background: "#DEB543",
      zIndex: "9999",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#DEB543" : "#DEB543",
      borderRadius: "10px",
      padding: "10px 12px",
      backgroundColor: state.isFocused ? "#DEB543" : "DEB543",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#DEB543",
        color: "#fff",
      },
      padding: "15px 25px",
      border: "2px solid #1A495B",
      marginBottom: "5px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "normal",
      color: "#080E16",
    }),
  };
};

export const options = [
  { label: "Position 1", value: "Position 1" },
  { label: "Position 2", value: "Position 2" },
  { label: "Position 3", value: "Position 3" },
];
