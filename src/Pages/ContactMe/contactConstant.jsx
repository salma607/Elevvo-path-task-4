export const Style = {
  fill: {
    display: "flex",
    justifyContent: "center",
    background: "var(--color-fill)",
    borderRaduis: "10px",
    marginBottom: "10px",
    padding: "10px",
  },
  icon: {
    margineRight: "20px",
    color: "var(--color-pink)",
  },
  input: {
    width: "100%",
    background: "transparent",
    outline: "none",
    color: "var(--color-white)",
    "& .MuiInputBase-input": {
      color: "var(--color-white)",
    },
    "& .MuiInputLabel-root": {
      color: "var(--color-gray)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "var(--color-gray)",
      opacity: 1,
    },
  },
  option:{
    background:"var(--color-fill)",
    color:"var(--color-white)"

  }
};
