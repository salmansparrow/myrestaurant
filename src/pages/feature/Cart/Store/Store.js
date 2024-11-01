import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "../cartSlice"; // Ensure the path is correct
import eventFormReducer from "../../EventForm/eventFormSlice"; // Ensure the path is correct
import contactUsReducer from "../../ContactUs/contactSlice";

// Combine the reducers into one root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  eventForm: eventFormReducer,
  contactUs: contactUsReducer,
});

// Configure persistence for the combined root reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "eventForm", "ContactUs"], // Specify slices to be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the persisted combined reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Create the persistor for the store
const persistor = persistStore(store);

export { store, persistor };
