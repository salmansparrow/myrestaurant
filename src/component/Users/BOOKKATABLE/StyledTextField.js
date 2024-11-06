// StyledTextField.js
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextFieldTable = styled(TextField)({
  ".MuiOutlinedInput-root": {
    gap: "14px",
    "& fieldset": {
      border: "1px solid",
      borderRadius: 0,
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid orange",
    },
  },
  ".MuiInputBase-input": {
    "&::placeholder": {
      color: "#000000",
      opacity: 1,
    },
    color: "#000000",
  },
  ".MuiInputLabel-root": {
    color: "#000000", // Default label color
    "&.Mui-focused": {
      backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700",
      fontSize: "18px",
    },
  },
});

export default StyledTextFieldTable;
