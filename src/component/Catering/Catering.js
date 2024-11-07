import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import wedding from "/public/assets/images/catering/wedding.jpg"; // Adjust the import
import corporate from "/public/assets/images/catering/corporate.jpg"; // Adjust the import
import banquet from "/public/assets/images/catering/banquet.jpg"; // Adjust the import
import Link from "next/link";

const cardData = [
  { id: 1, name: "Wedding", image: wedding },
  { id: 2, name: "Corporate", image: corporate },
  { id: 3, name: "Banquet", image: banquet },
];

function Catering() {
  return (
    <>
      <Box
        sx={{
          padding: "40px 0",
          marginTop: 3,
        }}
        className="green"
      >
        <Box>
          <Typography
            variant="h1"
            color="yellowmain"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "60px",
              },
              textAlign: "center",
              textDecoration: "underline",
            }}
            className="ffpoppins"
          >
            Catering services for all occasions
          </Typography>
        </Box>

        {/* Outer Box with Padding */}
        <Box
          sx={{
            marginTop: 5,
            maxWidth: 1200,
            margin: "auto",
            padding: { xs: "0 16px", sm: "0 24px", md: "0" }, // Add padding for small screens
          }}
        >
          {/* Grid Container */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              marginTop: 2,
            }}
          >
            {/* Card Mapping */}
            {cardData.map((cards, index) => (
              <Grid item xs={12} sm={6} md={4} key={cards.id}>
                <Card
                  sx={{
                    maxWidth: 400,
                    position: "relative",
                    marginTop: {
                      lg: index * 10,
                      md: index * 5,
                    },
                  }}
                >
                  {/* Wrapping the CardMedia in a Box for hover effect */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
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
                    <CardMedia
                      sx={{
                        height: { xs: 400, sm: 300, md: 500 }, // Responsive height for different screen sizes
                        objectFit: "cover",
                        position: "relative",
                        zIndex: 0, // Place below the overlay
                      }}
                      image={cards.image.src}
                      title={`Catering service ${cards.id}`}
                    />

                    {/* Title positioned at the bottom of the image */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                        color: "white",
                        padding: "10px",
                        textAlign: "center",
                        zIndex: 2, // Above the overlay
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        color="yellowmain"
                        sx={{
                          fontWeight: "bold",
                        }}
                        className="ffpoppins"
                      >
                        {cards.name}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Book Now Section */}
        <Box
          sx={{
            marginTop: 8,
            textAlign: "center", // Center the text
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "30px",
              },
              textAlign: "center",
            }}
            className="ffpoppins"
          >
            Book your catering service now!
          </Typography>

          {/* Button Container */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Center the button
              py: 4,
            }}
          >
            <Link href="/bookevent">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffcc00, #ff6600) !important",
                  color: "#fff",
                  fontWeight: "bold",
                  top: "30px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(135deg, #ff6600, #ffcc00)",
                  },
                }}
              >
                Book an Event
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Catering;
