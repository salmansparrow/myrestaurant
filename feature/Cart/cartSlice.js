import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    isOpen: false, // Cart drawer state
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

    // Increase item quantity
    increaseQty: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity

        // Update totalAmount
        state.totalAmount += existingItem.price;
      }
    },

    // Decrease item quantity
    decreaseQty: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrement quantity

        // Update totalAmount
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        state.items = state.items.filter((item) => item.id !== id);

        // Update totalAmount after removing the item
        state.totalAmount = state.items.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.quantity,
          0
        );
      }
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
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
