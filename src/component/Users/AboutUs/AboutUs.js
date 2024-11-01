import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import aboutimage from "/public/assets/images/about.jpg";

function AboutUs() {
  return (
    <Box p={5} sx={{ maxWidth: 1200, mx: "auto" }}>
      <Typography
        textAlign={"center"}
        variant="h2"
        sx={{
          backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
          fontSize: {
            xs: "26px",
            sm: "30px",
            md: "36px",
          },
          mb: 2,
          animation: "slideInTop 1s ease-out forwards",
          opacity: 0,
          "@keyframes slideInTop": {
            "0%": { opacity: 0, transform: "translateY(-50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text Content */}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: "slideInLeft 1s ease-out forwards",
            opacity: 0,
            "@keyframes slideInLeft": {
              "0%": { opacity: 0, transform: "translateX(-50px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ mb: 2, fontSize: { xs: "16px", md: "18px" } }}
            >
              Discover Our Story
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              Welcome to My Restaurant, where culinary passion meets fresh,
              local ingredients and a warm, inviting atmosphere. Located in the
              heart of Karachi, Pakistan, we are dedicated to providing a
              memorable dining experience through a blend of innovation,
              tradition, and impeccable service.
              <br />
              <br />
              At My Restaurant, we believe that great food has the power to
              bring people together. Our menu is thoughtfully crafted, balancing
              classic flavors with inventive twists that celebrate the best of
              Balochi cuisine, Hazara cuisine, Kashmiri cuisine, Mughlai
              cuisine,. Each dish tells a story, from farm to fork, as we
              carefully select the freshest ingredients from local farms and
              trusted purveyors.
              <br />
              <br />
              Our talented chefs bring a wealth of culinary experience and
              passion to every plate, inspired by both traditional recipes and
              contemporary culinary trends. Whether you’re joining us for an
              intimate dinner, a family gathering, or a celebration with
              friends, we strive to make each visit unforgettable. Our team’s
              commitment to exceptional service and quality is the foundation of
              everything we do.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          sx={{
            animation: "slideInRight 1s ease-out forwards",
            opacity: 0,
            "@keyframes slideInRight": {
              "0%": { opacity: 0, transform: "translateX(50px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Box
            sx={{
              border: "4px solid #ff6600",
              overflow: "hidden", // Ensures the border-radius is applied to the image
              display: "inline-block", // This removes the gap below the image
              position: "relative",
              "&:hover::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(128, 128, 128, 0.5)", // Grey color with transparency
                zIndex: 1, // Place above the image
              },
            }}
          >
            <Image
              src={aboutimage}
              width={600}
              height={400}
              alt="About Us"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
