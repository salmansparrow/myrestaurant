import { createSlice } from "@reduxjs/toolkit";
import { setFormData } from "../EventForm/eventFormSlice";

const initialState = {
  contactUs: [],
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,

  reducers: {
    setContactUsData: (state, action) => {
      state.contactUs.push(action.payload);
    },
    clearContactUs: (state) => {
      state.contactUs = [];
    },
  },
});

export const { setContactUsData, clearContactUs } = contactUsSlice.actions;

export default contactUsSlice.reducer;
