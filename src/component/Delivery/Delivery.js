import { Box, Grid, Typography, Button } from "@mui/material";
import deliveryimg from "/public/assets/images/delivery/delivery.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Delivery() {
  const [isLoaded, setIsLoaded] = useState(false); // Track when the component has mounted
  const deliveryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if 50% of the component is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsLoaded(true); // Trigger the transition effect
          observer.unobserve(deliveryRef.current); // Stop observing after it has loaded
        }
      },
      {
        threshold: 0.5, // Trigger when 50% is visible
      }
    );

    if (deliveryRef.current) {
      observer.observe(deliveryRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (deliveryRef.current) {
        observer.unobserve(deliveryRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={deliveryRef}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        justifyContent: "space-around", // Center content
        padding: { xs: 3, md: 5 }, // Add padding for small and large screens
        marginTop: 5,
      }}
      className="yellow"
    >
      {/* Left Side - Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", mb: { xs: 3, md: 0 } }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "80%", sm: "70%", md: "500px" }, // Responsive width
            height: { xs: 300, sm: 500, md: 450 }, // Fixed height for responsiveness
            overflow: "hidden",
            transform: isLoaded ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 2s ease-in-out",
          }}
        >
          <Image
            src={deliveryimg}
            alt="Delivery"
            layout="responsive" // Use responsive layout for the image
            objectFit="cover" // Cover the container
            width={500} // Width in pixels
            height={500} // Height in pixels
          />
        </Box>
      </Grid>

      {/* Right Side - Text Content */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          color="orange"
          sx={{
            fontWeight: "bold",
            // marginBottom: 1,
            fontSize: {
              xs: "20px",
              sm: "20px",
              lg: "35px",
            },
            left: 10,
            position: "relative",
            // fontFamily: "Poppins, sans-serif",
          }}
          className="ffpacifico"
        >
          We Guaranttee
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginY: 2,
            color: "white",
            fontWeight: "bold",
            fontSize: {
              xs: "40px",
              sm: "40px",
              lg: "60px",
            },
            fontFamily: "Poppins, sans-serif",
          }}
          //   className="ffpacifico"
        >
          Fast Delivery
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            color: "white",
            fontWeight: "700",
            fontFamily: "Poppins sans-serifins",
          }}
        >
          Feeling hungry? Order Online for fastest delivery.
        </Typography>
        <Link href="/menu">
          <Button
            variant="text"
            color="success" // Use the green color defined in your theme
            sx={{
              marginTop: 2,
              border: "2px solid",
              borderRadius: 3,
              padding: "4px 12px", // Smaller padding for a compact button
              fontSize: "0.875rem", // Smaller font size
              flexShrink: 0, // Prevent button from stretching
              "&:hover": {
                backgroundColor: "rgba(76, 175, 80, 0.8)", // Darken the button on hover
              },
              width: "200px",
              height: "50px",
            }}
          >
            Order Online
          </Button>
        </Link>
      </Grid>
    </Box>
  );
}

export default Delivery;
