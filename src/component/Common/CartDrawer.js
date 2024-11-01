import React, { useEffect } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, toggleCart } from "@/pages/feature/Cart/cartSlice";

function CartDrawer({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount); // Access totalAmount from the store
  console.log(totalAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    // Save totalAmount to localStorage whenever it changes
    localStorage.setItem("totalAmount", totalAmount.toFixed(2));
  }, [totalAmount]);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // Filter out null or undefined items
  const validCartItems = cartItems.filter(
    (item) => item !== null && item !== undefined
  );

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "100%", sm: "80%", md: "400px" },
          padding: 2,
        },
      }}
    >
      {/* Drawer Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Your Cart</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Cart Items List */}
      <List>
        {validCartItems.length === 0 ? (
          <Typography variant="body1" color="textSecondary" textAlign="center">
            Your cart is empty
          </Typography>
        ) : (
          validCartItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ListItemAvatar>
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 50, height: 50 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`Rs. ${item.price.toFixed(2)} (Qty: ${
                  item.quantity
                })`}
                sx={{ ml: 1 }}
              />
              <IconButton
                edge="end"
                color="error"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Total Price */}
      {validCartItems.length > 0 && (
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">
            Rs. {totalAmount.toFixed(2)}
          </Typography>{" "}
          {/* Use totalAmount here */}
        </Box>
      )}

      {/* Checkout Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleClose}
        disabled={validCartItems.length === 0}
      >
        Checkout
      </Button>
      <Button onClick={onClose}>Close Drawer</Button>
    </Drawer>
  );
}

export default CartDrawer;
