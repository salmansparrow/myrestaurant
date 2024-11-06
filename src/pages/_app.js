import "@/styles/globals.css"; // Global styles
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"; // MUI components
import { Provider } from "react-redux"; // Redux provider
import { store, persistor } from "./feature/Store/Store"; // Store and persistor
import { PersistGate } from "redux-persist/integration/react"; // PersistGate for Redux-Persist
import "@fontsource/poppins"; // Import Poppins font
import theme from "@/styles/theme";

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
