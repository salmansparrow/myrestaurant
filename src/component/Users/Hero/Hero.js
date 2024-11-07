import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Set height to viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1, // Ensure video stays in the background
        }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Overlay for darkening the video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
          zIndex: 1, // Ensure overlay is above the video
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          zIndex: 2, // Ensure text is above overlay
          paddingX: { xs: 2, md: 4 }, // Responsive padding
          maxWidth: "900px", // Limits content width on large screens
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          component="h1"
          color="orange"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, // Responsive font sizes
            fontWeight: 900,
            letterSpacing: ".3rem",
            mb: 2, // Margin below heading
          }}
          className="ffpoppins"
        >
          Welcome to MyRestaurant
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h5"
          component="h2"
          color="green"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, // Responsive font sizes
            fontWeight: "bold",
            mb: 2, // Margin below subheading
          }}
          className="ffpoppins"
        >
          Fresh and Delicious Every Time
        </Typography>

        {/* Paragraph */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem" }, // Responsive font sizes
            lineHeight: 1.5,
            mb: 4, // Margin below paragraph
          }}
          className="ffroboto"
        >
          Experience the taste of exquisite culinary creations made with the
          freshest ingredients. Join us for a meal you won't forget.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem" }, // Responsive font sizes
            lineHeight: 1.5,
            mb: 4, // Margin below paragraph
          }}
        >
          Order now and enjoy your favorite dishes at the comfort of your home.
        </Typography>

        {/* Order Online Button */}
        <Link href="/menu">
          <Button
            variant="contained"
            color="green"
            size="large"
            sx={{
              backgroundColor: "green", // Green button
              color: "white",
              paddingX: 4, // Extra horizontal padding for the button
              paddingY: 1.5, // Vertical padding for better touch targets
              fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size for button text
              "&:hover": {
                backgroundColor: "darkgreen", // Darken on hover
              },
            }}
            className="ffroboto"
          >
            Order Online
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default HeroSection;
