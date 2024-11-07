import { createSlice } from "@reduxjs/toolkit";

// Initial state for the form data
const initialState = {
  formData: [], // Array to store multiple form submissions
};

const eventFormSlice = createSlice({
  name: "eventForm",
  initialState,

  reducers: {
    setFormData: (state, action) => {
      state.formData.push(action.payload);
    },

    clearFormData: (state) => {
      state.formData = [];
    },
  },
});

export const { setFormData, clearFormData } = eventFormSlice.actions;

export default eventFormSlice.reducer;
