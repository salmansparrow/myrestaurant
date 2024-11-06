import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
// import backgroundImage from "/public/assets/images/footer-background.jpg"; // Example background image

const pages = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contactus" },
];

function Footer() {
  const router = useRouter();
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffcc00, #ff6600)", // Overlay effect on background image
        // backgroundImage: `url(${backgroundImage.src})`, // Set the background image
        backgroundSize: "cover", // Make sure the background covers the entire area
        backgroundPosition: "center",
        color: "black",
        padding: 6,
        marginTop: 5,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Restaurant Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
              className="ffpacifico"
            >
              My Restaurant
            </Typography>
            <Typography variant="body2">
              Welcome to our restaurant! We offer the finest dining experience
              with fresh ingredients, great ambiance, and exceptional service.
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body2" display="flex" alignItems="center">
                <LocationOn sx={{ marginRight: 1 }} /> 123 Restaurant Street,
                City, Country
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Phone sx={{ marginRight: 1 }} /> +1 (123) 456-7890
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                alignItems="center"
                sx={{ marginTop: 1 }}
              >
                <Email sx={{ marginRight: 1 }} /> info@restaurant.com
              </Typography>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {pages.map((page) => (
                <Link href={page.path} key={page.name} passHref>
                  <Button
                    sx={{
                      color:
                        router.pathname === page.path ? "#b50810" : "black", // Active color
                      fontWeight:
                        router.pathname === page.path ? "bold" : "normal", // Active font weight
                      textTransform: "capitalize",
                      margin: "0 10px",
                    }}
                    // onClick={() => handleNavItems(page.path)} // Handle navigation
                    className="ffroboto"
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Operating Hours */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Operating Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday: 11:00 AM - 10:00 PM
            </Typography>
            <Typography variant="body2">
              Saturday: 12:00 PM - 11:00 PM
            </Typography>
            <Typography variant="body2">Sunday: Closed</Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                marginTop: 2,
              }}
            >
              <IconButton
                aria-label="Facebook"
                sx={{
                  color: "#fff",
                  ":hover": {
                    background: "green",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  color: "#fff",
                  ":hover": {
                    background: "green",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#fff",
                  ":hover": {
                    background: "green",
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  color: "#fff",
                  ":hover": {
                    background: "green",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* Copyright and Footer Bottom Section */}
        <Box
          sx={{
            textAlign: "center",
            marginTop: 5,
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: 3,
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Restaurant. All Rights
            Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
