import { createTheme } from "@mui/material";
import "@fontsource/poppins"; // Import Poppins font
import "@fontsource/pacifico"; // Import Pacifico font
import "@fontsource/roboto"; // Import Roboto font

// Custom MUI theme
const theme = createTheme({
  palette: {
    orange: {
      main: "#ff6c00c2", // Orange color
    },
    orangemain: {
      main: "#ff6c00c2", // Orange color
    },
    green: {
      main: "#4caf50", // Green color
    },
    customRGB: {
      main: "rgb(255, 99, 71)", // Custom RGB color (e.g., tomato red)
    },
    yellowmain: {
      main: "#fcc012", // Yellow color
    },
  },
  typography: {
    poppins: '"Poppins", sans-serif', // Define Poppins font
    pacifico: '"Pacifico", sans-serif', // Define Pacifico font
    roboto: '"Roboto", sans-serif', // Define Roboto font
  },
});

export default theme;
