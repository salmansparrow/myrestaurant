import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/router";
import CartDrawer from "./CartDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Ensure this is imported
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/pages/feature/Cart/cartSlice";

const pages = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contactus" },
];

function MainNavbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const dispatch = useDispatch();
  const open = useSelector((state) => state.cart.isOpen); // Get cart open state from Redux

  const handleCartClick = () => {
    dispatch(toggleCart()); // Toggle cart drawer open/close
  };

  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavItems = (path) => {
    setDrawerOpen(false);
    router.push(path); // Navigate to the selected page
  };

  const handleLogin = () => {
    // Simulate a login action (replace this with real login logic)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout
    setIsLoggedIn(false);
  };

  const handleSignUp = () => {
    // Simulate a sign-up action (replace this with real sign-up logic)
    console.log("Sign Up Clicked");
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "orange" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Menu Icon for small screens */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)} // Open Drawer on click
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* LOGO for large screens */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="ffpacifico"
            >
              MyRestaurant
            </Typography>

            {/* Desktop Navigation Items */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                marginX: "auto",
                borderRadius: "8px",
                paddingX: 2,
              }}
            >
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
                    className="ffroboto"
                    onClick={() => handleNavItems(page.path)} // Handle navigation
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Profile Icon for all screens */}
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              {/* Login and Sign Up Buttons */}
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={handleLogin}
                    sx={{ marginRight: 1, fontSize: "1rem" }} // Margin for spacing
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={handleSignUp}
                    sx={{ marginRight: 1, fontSize: "1rem" }} // Margin for spacing
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Tooltip title="Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Profile" src="/profile.jpg" />
                  </IconButton>
                </Tooltip>
              )}

              {/* Cart drawer icon */}
              <Box>
                <Button color="inherit" onClick={handleCartClick}>
                  <ShoppingCartIcon />
                </Button>
              </Box>

              {/* "Book a Table" Button for large screens */}
              <Button
                variant="contained"
                color="green"
                sx={{
                  marginLeft: 1,
                  display: { xs: "none", md: "block" },
                }}
                className="ffpoppins"
                onClick={handleLogout} // This can also be used to log out
              >
                Book a Table
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <CartDrawer isOpen={open} onClose={() => dispatch(toggleCart())} />

      {/* Drawer for Small Screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            background: "orange", // Set drawer background to orange
            height: "100%", // Ensure the background covers the full height
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textAlign: "center",
              padding: 2,
              color: "orange",
            }}
            className="ffpacifico"
          >
            MyRestaurant
          </Typography>
          <Divider />

          {/* Navigation Links in Drawer */}
          <List>
            {pages.map((page) => (
              <Link
                href={page.path}
                key={page.name}
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItem
                  button
                  sx={{
                    textAlign: "center",
                    backgroundColor:
                      router.pathname === page.path ? "" : "transparent", // Change background when active
                  }}
                  onClick={() => handleNavItems(page.path)} // Handle navigation
                >
                  <ListItemText
                    primary={page.name}
                    sx={{
                      color:
                        router.pathname === page.path ? "#b50810" : "black", // Active color
                      fontWeight:
                        router.pathname === page.path ? "bold" : "normal", // Active font weight
                      textDecoration: "none", // Ensure no underline
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>

          <Divider />

          {/* "Book a Table" Button inside Drawer for small screens */}
          <List>
            <ListItem button>
              <Button
                variant="contained"
                color="green"
                sx={{
                  width: "100%",
                  padding: "8px 0",
                  marginTop: 1,
                  color: "white",
                }}
                className="ffpoppins"
              >
                Book a Table
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default MainNavbar;
