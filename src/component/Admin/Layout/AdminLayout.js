import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  Divider,
  useMediaQuery,
  useTheme,
  Avatar,
  Button, // Import Button from MUI
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import theme from "@/styles/theme";

const drawerWidth = 240;

const pages = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Add Category", path: "/admin/addcategory" },
  { name: "Add Meal", path: "/admin/addmealitem" },
  { name: "Events", path: "/admin/event" },
  { name: "Book A Table", path: "/admin/book-a-table" },
];

// Styled Box to offset the AppBar
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter(); // Use router for navigation

  // Toggle the drawer (sidebar) on small screens
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar content (Navigation links)
  const drawer = (
    <Box
      position="relative"
      sx={{
        top: {
          xs: "50px",
          sm: "50px",
          md: "0px",
          lg: "0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          minHeight: "64px", // Ensures enough space (match default AppBar height)
          textAlign: "center",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          noWrap
          sx={{
            fontFamily: theme.typography.poppins,
            backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            fontSize: "28px",
          }}
        >
          My Restaurant
        </Typography>
      </Box>
      <Divider />
      {/* Navigation Menu */}
      <List sx={{ cursor: "pointer", mx: "auto" }}>
        {pages.map((page) => (
          <Button // Use Button instead of ListItem with button prop
            key={page.name}
            onClick={() => router.push(page.path)} // Handle navigation using router
            sx={{
              color: router.pathname === page.path ? "#b50810" : "black", // Active color
              fontWeight: router.pathname === page.path ? "bold" : "normal", // Active font weight
              backgroundColor:
                router.pathname === page.path
                  ? theme.palette.green.main
                  : "transparent",
              textTransform: "capitalize",
              ":hover": {
                backgroundColor:
                  router.pathname === page.path
                    ? theme.palette.green.main // Keep the active background on hover
                    : "rgba(0, 0, 0, 0.1)", // Transparent or light color for hover effect when not active
              },
              width: "100%", // Ensure the button takes the full width
              //   justifyContent: "flex-start", // Align text to the left
              paddingLeft: 2, // Add padding to the left for alignment
              paddingRight: 2, // Add padding to the right for spacing
            }}
          >
            <ListItemText primary={page.name} />
          </Button>
        ))}
        <Divider sx={{ my: 2 }} />
        <Button
          sx={{
            width: "100%", // Ensure the button takes the full width
            justifyContent: "flex-start", // Align text to the left
            paddingLeft: 2, // Add padding to the left for alignment
            paddingRight: 2, // Add padding to the right for spacing
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </Button>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar with Menu Icon for small screens */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* Show the Menu Icon for small screens */}
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>

          {/* Admin Profile (Avatar and Name) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ mr: 2 }}>A</Avatar>
            <Typography variant="body1">Admin Name</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="admin dashboard navigation"
      >
        {/* Drawer for small screens */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent drawer for larger screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }, // Reserve space for sidebar
        }}
      >
        <Offset /> {/* Offset to make room for the AppBar */}
        {children} {/* Content passed as children */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
