import "@/styles/globals.css"; // Global styles
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"; // MUI components
import { Provider } from "react-redux"; // Redux provider
import { store, persistor } from "./feature/Cart/Store/Store"; // Store and persistor
import { PersistGate } from "redux-persist/integration/react"; // PersistGate for Redux-Persist
import "@fontsource/poppins"; // Import Poppins font

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
});

// Main App component
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Reset CSS styles */}
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
