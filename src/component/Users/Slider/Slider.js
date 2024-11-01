import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import chargha from "/public/assets/images/special/chargha.jpg"; // Adjust the import

// Sample data for the specials
const specialsData = [
  { id: 1, name: "Chargha", image: chargha },
  { id: 2, name: "Spaghetti Carbonara", image: chargha },
  { id: 3, name: "Margherita Pizza", image: chargha },
  { id: 4, name: "Caesar Salad", image: chargha },
  { id: 5, name: "Grilled Salmon", image: chargha },
  { id: 6, name: "Chocolate Lava Cake", image: chargha },
];

const SpecialSection = () => {
  const isLargeScreen = useMediaQuery("(min-width:600px)"); // Adjust threshold as needed

  return (
    <Box
      sx={{
        padding: 4,
      }}
      className="yellow" // bg yellow
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontWeight: "bold",

          textDecoration: "underline",
        }}
        color="black"
        className="ffpacifico"
      >
        SPECIAL
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {specialsData.slice(0, isLargeScreen ? 6 : 6).map((special) => (
          <Grid item xs={12} sm={6} md={4} key={special.id}>
            <Card sx={{ position: "relative", height: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  "&:hover": {
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(128, 128, 128, 0.5)", // Grey color with some transparency
                      zIndex: 1, // Place it above the image
                    },
                    // Show button on hover
                    "& .hoverButton": {
                      opacity: 1,
                      transition: "opacity 0.3s ease",
                    },
                  },
                }}
              >
                {/* Image */}
                <Image
                  src={special.image}
                  alt={special.name}
                  layout="fill" // Fill the container
                  objectFit="cover" // Cover the entire container
                />
                {/* Subheading on the image */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    padding: "10px",
                    textAlign: "center",
                    zIndex: 2, // Ensure the text is above the overlay
                  }}
                >
                  <Typography variant="h6" component="div">
                    {special.name}
                  </Typography>
                </Box>
                {/* Order Online Button */}
                <Button
                  variant="contained"
                  color="success" // Use green color
                  className="hoverButton ffroboto" // Class for hover effect
                  sx={{
                    position: "absolute",
                    bottom: "50%", // Adjust position as needed
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0, // Initially hidden
                    zIndex: 3, // Ensure it appears above other elements
                    transition: "opacity 0.8s ease", // Transition for smoothness
                  }}
                >
                  Order Online
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpecialSection;
