import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0, // Added totalAmount to initial state
    isOpen: false, // State to control drawer open/close
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }

      // Update totalAmount after adding the item
      state.totalAmount = state.items.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity; // Deduct total amount
      }
      state.items = state.items.filter((item) => item.id !== id);
      // Update totalAmount after removal
      state.totalAmount = state.items.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen; // Toggle cart open/close
    },
    openCart: (state) => {
      state.isOpen = true; // Open cart
    },
    closeCart: (state) => {
      state.isOpen = false; // Close cart
    },
    clearCart: (state) => {
      state.items = []; // Clear all items from the cart
      state.totalAmount = 0; // Reset total amount
    },
  },
});

// Export actions and reducer
export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
