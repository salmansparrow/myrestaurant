import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import cashImage from "/public/assets/images/checkout/Cash.png";
import cardImage from "/public/assets/images/checkout/Card.png";
import theme from "@/styles/theme";

function Checkout() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // State to keep track of the selected payment method
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get cart details from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedTotalAamount =
      JSON.parse(localStorage.getItem("totalAmount")) || 0;

    setCartItems(storedCartItems);
    setTotalAmount(parseFloat(storedTotalAamount));
  }, []);

  console.log(cartItems);

  const handlePlaceOrder = () => {
    // Handle place order logic here
    console.log("Order placed!");
  };

  const handleSelectPayment = (method) => {
    setSelectedPaymentMethod(method); // Update the selected payment method
  };

  return (
    <>
      <Box textAlign={"center"} py={10}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: theme.typography.poppins,
            backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          My Restaurant
        </Typography>
      </Box>

      <Container>
        <Box sx={{ padding: "30px" }}>
          <Typography variant="h4" gutterBottom>
            Checkout
          </Typography>
          <Grid container spacing={2}>
            {/* Left Side - Checkout Form */}
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Checkout Information
                  </Typography>

                  <Box sx={{ position: "relative", marginBottom: "16px" }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      type="text"
                      variant="outlined"
                      margin="normal"
                    />
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{
                        position: "absolute",
                        top: "8px",
                        right: "0",
                        transform: "translateY(-50%)",
                      }}
                    >
                      *Required
                    </Typography>
                  </Box>

                  <Box sx={{ position: "relative", marginBottom: "16px" }}>
                    <TextField
                      fullWidth
                      label="Mobile Number"
                      type="tel"
                      variant="outlined"
                      margin="normal"
                    />
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{
                        position: "absolute",
                        top: "8px",
                        right: "0",
                        transform: "translateY(-50%)",
                      }}
                    >
                      *Required
                    </Typography>
                  </Box>

                  <Box sx={{ position: "relative", marginBottom: "16px" }}>
                    <TextField
                      fullWidth
                      type="text"
                      label="Delivery Address"
                      variant="outlined"
                      margin="normal"
                    />
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{
                        position: "absolute",
                        top: "8px",
                        right: "0",
                        transform: "translateY(-50%)",
                      }}
                    >
                      *Required
                    </Typography>
                  </Box>

                  <TextField
                    fullWidth
                    type="text"
                    label="Nearest Landmark"
                    variant="outlined"
                    margin="normal"
                  />
                  {/* Payment Information */}
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Payment Information
                    </Typography>
                    <RadioGroup
                      value={selectedPaymentMethod}
                      onChange={handleSelectPayment}
                    >
                      <Grid
                        container
                        spacing={isSmallScreen ? 2 : 1} // Add more spacing on small screens
                        justifyContent="center"
                        mx={"auto"}
                      >
                        {/* Cash on Delivery Box */}
                        <Grid item xs={6} sm={6} md={6} lg={5}>
                          <FormControlLabel
                            value="cash"
                            control={<Radio sx={{ display: "none" }} />} // Hide the actual radio button
                            label={
                              <Card
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  padding: "10px 20px",
                                  border: "1px solid",
                                  borderRadius: 2,
                                  cursor: "pointer",
                                  backgroundColor:
                                    selectedPaymentMethod === "cash"
                                      ? "#e0f7e4"
                                      : "white", // Change background if selected
                                  borderColor:
                                    selectedPaymentMethod === "cash"
                                      ? "yellow"
                                      : "grey", // Change border color to yellow if selected
                                  transition: "0.3s",
                                  "&:hover": {
                                    boxShadow: 3, // Add hover effect
                                  },
                                }}
                                onClick={() => handleSelectPayment("cash")}
                              >
                                <Image
                                  src={cashImage}
                                  alt="Cash"
                                  width={60}
                                  height={50}
                                  layout="fixed"
                                  objectFit="contain"
                                />
                                <Typography
                                  variant="body1"
                                  textAlign={"center"}
                                  mt={2}
                                >
                                  Cash on Delivery
                                </Typography>
                              </Card>
                            }
                          />
                        </Grid>

                        {/* Online Payment Box */}
                        <Grid item xs={6} sm={6} md={6} lg={5}>
                          <FormControlLabel
                            value="online"
                            control={<Radio sx={{ display: "none" }} />} // Hide the actual radio button
                            label={
                              <Card
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  padding: "10px 20px",
                                  borderRadius: 2,
                                  border: "1px solid",
                                  cursor: "pointer",
                                  backgroundColor:
                                    selectedPaymentMethod === "online"
                                      ? "#e0f7e4"
                                      : "white", // Change background if selected
                                  borderColor:
                                    selectedPaymentMethod === "online"
                                      ? "yellow"
                                      : "grey", // Change border color to yellow if selected
                                  transition: "0.3s",
                                  "&:hover": {
                                    boxShadow: 3, // Add hover effect
                                  },
                                }}
                                onClick={() => handleSelectPayment("online")}
                              >
                                <Image
                                  src={cardImage}
                                  alt="Online Payment"
                                  width={100}
                                  height={50}
                                  layout="fixed"
                                  objectFit="contain"
                                />
                                <Typography
                                  variant="body1"
                                  textAlign={"center"}
                                  mt={2}
                                >
                                  Online Payment
                                </Typography>
                              </Card>
                            }
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Side - Order Details */}
            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Your Order
                  </Typography>
                  <Divider />

                  {/* Displaying each cart item */}
                  {cartItems.length > 0 ? (
                    <Box mt={2}>
                      {/* Header for items */}
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        fontWeight="bold"
                        mb={1}
                      >
                        <Typography variant="body1">Item Name</Typography>
                        <Typography variant="body1">Amount</Typography>
                      </Box>

                      {/* List of items */}
                      {cartItems.map((item, index) => (
                        <Box
                          key={index}
                          display="flex"
                          justifyContent="space-between"
                          mt={1}
                        >
                          <Typography variant="body1">
                            {item.quantity}x {item.name}
                          </Typography>
                          <Typography variant="body1">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body1" mt={2}>
                      Your cart is empty.
                    </Typography>
                  )}

                  <Divider sx={{ my: 2 }} />

                  {/* Total Amount Section */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    fontWeight="bold"
                    mt={2}
                  >
                    <Typography variant="h6">Total Amount:</Typography>
                    <Typography variant="h6">
                      Rs. {totalAmount.toFixed(2)}
                    </Typography>
                  </Box>

                  {/* Grand Total Section */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    fontWeight="bold"
                    mt={2}
                  >
                    <Typography variant="h6">Grand Total:</Typography>
                    <Typography variant="h6">
                      Rs. {totalAmount.toFixed(2)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handlePlaceOrder}
                    sx={{ marginTop: 2 }}
                  >
                    Place Order
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/menu")}
                    sx={{ marginTop: 1 }}
                  >
                    ← Continue to add more items
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Checkout;
