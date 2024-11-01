import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { menuData } from "../../../menuData";
import Slider from "react-slick";
import banner from "/public/assets/images/menu/catbanner.png";
import { useDispatch } from "react-redux";
import {
  addToCart,
  openCart,
  toggleCart,
} from "@/pages/feature/Cart/cartSlice";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [availabilityOption, setAvailabilityOption] = useState("");

  const dispatch = useDispatch();

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      const itemPayload = {
        id: selectedItem.id,
        name: selectedItem.name,
        image: selectedItem.image,
        price: parseFloat(selectedItem.price),
      };
      dispatch(addToCart(itemPayload));
      dispatch(openCart());
      setOpenDialog(false);
    }
  };

  const categories = ["All", ...menuData.map((item) => item.category)];
  const initialVisibleItems = 6;
  const [visibleItems, setVisibleItems] = useState({});

  const handleLoadMore = (category) => {
    setVisibleItems((prevVisibleItems) => ({
      ...prevVisibleItems,
      [category]: (prevVisibleItems[category] || initialVisibleItems) + 6,
    }));
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4 },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "chocolate",
          right: "0",
          zIndex: 1,
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "chocolate",
          left: "0",
          zIndex: 1,
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const handleDialogClose = () => {
    setOpenDialog(false);
    setAvailabilityOption("");
  };

  const renderCategoryItems = (categoryData) => {
    const visibleItemCount =
      visibleItems[categoryData.category] || initialVisibleItems;

    return (
      <>
        <Box
          sx={{
            position: "relative",
            height: { xs: "150px", sm: "200px", md: "250px", marginTop: 20 },
          }}
        >
          <Image
            src={categoryData.banner || banner}
            alt={`${categoryData.category} Banner`}
            layout="fill"
            objectFit="contain"
            priority
          />
          <Typography
            variant="h2"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
            className="orangetext"
          >
            {categoryData.category}
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, padding: "20px", marginTop: 5 }}>
          <Grid container spacing={4}>
            {categoryData.items.slice(0, visibleItemCount).map((item) => (
              <Grid item xs={12} sm={12} md={4} key={item.id}>
                <Card
                  onClick={() => handleCardClick(item)}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "row" },
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.3s ease-in-out",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height={150}
                    image={item.image}
                    alt={item.name}
                    sx={{
                      objectFit: "cover",
                      width: { xs: "100%", sm: "100%", lg: "100%" },
                      height: { xs: "auto" },
                      borderRadius: { xs: "4px 4px 0 0", sm: "4px 0 0 4px" },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        width: {
                          xs: "220px",
                          lg: "200px",
                        },
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      Rs. {parseFloat(item.price).toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Button
                    className="yellow"
                    variant="contained"
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      borderRadius: "50%",
                      color: "white",
                      boxShadow: 2,
                      "&:hover": {
                        backgroundColor: "#f1f1f1",
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const itemPayload = {
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: parseFloat(item.price),
                      };
                      dispatch(addToCart(itemPayload));
                      dispatch(toggleCart());
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {visibleItemCount < categoryData.items.length && (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => handleLoadMore(categoryData.category)}
            >
              Load More
            </Button>
          </Box>
        )}
      </>
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", padding: "10px 20px" }}
    >
      <AppBar
        position="static"
        sx={{ padding: "10px 0", marginTop: "20px" }}
        className="green"
      >
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                padding: "5px",
                cursor: "pointer",
                color:
                  selectedCategory === category
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
                backgroundColor:
                  selectedCategory === category
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">{category}</Typography>
            </Box>
          ))}
        </Slider>
      </AppBar>

      {selectedCategory === "All"
        ? menuData.map((categoryData) => (
            <div key={categoryData.category}>
              {renderCategoryItems(categoryData)}
            </div>
          ))
        : renderCategoryItems(
            menuData.find((cat) => cat.category === selectedCategory)
          )}

      {/* Dialog for Item Details */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        {selectedItem && (
          <DialogContent>
            <Box>
              <CardMedia
                component="img"
                height="200"
                sx={{
                  objectFit: "contain",
                }}
                image={selectedItem.image}
                alt={selectedItem.name}
              />
            </Box>
            <Typography variant="h5" component="div" mt={2}>
              {selectedItem.name}
            </Typography>
            <Typography variant="h6" color="primary" mt={1}>
              Rs. {parseFloat(selectedItem.price).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {selectedItem.description}
            </Typography>
            <TextField
              label="Special Instructions"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              helperText="Special requests are subject to the restaurant's approval. Tell us here!"
            />
            <Select
              fullWidth
              value={availabilityOption}
              onChange={(e) => setAvailabilityOption(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                If this item is not available
              </MenuItem>
              <MenuItem value="remove">Remove it from my order</MenuItem>
              <MenuItem value="cancel">Cancel the entire order</MenuItem>
              <MenuItem value="call">Call me</MenuItem>
            </Select>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAddToCart} color="primary">
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Menu;
