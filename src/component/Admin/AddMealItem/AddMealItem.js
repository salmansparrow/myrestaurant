import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddMealItem = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mealItem, setMealItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemImage: null,
  });

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const result = await response.json();
        if (response.ok) {
          setCategories(result);
        } else {
          console.error("Error fetching categories:", result.message);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle meal item input change
  const handleMealItemChange = (e) => {
    const { name, value } = e.target;
    setMealItem((prevMealItem) => ({
      ...prevMealItem,
      [name]: value,
    }));
  };

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMealItem((prevMealItem) => ({
      ...prevMealItem,
      itemImage: file,
    }));
  };

  // Form submission with POST request to backend
  // Inside your handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryId", selectedCategory);
    formData.append("itemName", mealItem.itemName);
    formData.append("itemDescription", mealItem.itemDescription);
    formData.append("itemPrice", mealItem.itemPrice);
    if (mealItem.itemImage) {
      formData.append("file", mealItem.itemImage);
    }

    try {
      const response = await fetch("/api/foodItem", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Food item added:", result);
        // Clear form
        setSelectedCategory("");
        setMealItem({
          itemName: "",
          itemDescription: "",
          itemPrice: "",
          itemImage: null,
        });
      } else {
        console.error("Error adding food item:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Meal Item
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography variant="h6">Category</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.categoryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">Meal Item Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Item Name"
                  name="itemName"
                  variant="outlined"
                  value={mealItem.itemName}
                  onChange={handleMealItemChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Item Description"
                  name="itemDescription"
                  variant="outlined"
                  multiline
                  rows={3}
                  value={mealItem.itemDescription}
                  onChange={handleMealItemChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Item Price (Rs.)"
                  name="itemPrice"
                  variant="outlined"
                  value={mealItem.itemPrice}
                  onChange={handleMealItemChange}
                  required
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{ paddingY: "15px" }}
                >
                  Upload Item Image
                  <input
                    type="file"
                    hidden
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                  />
                </Button>
                {mealItem.itemImage && (
                  <Typography variant="body2" mt={1}>
                    {mealItem.itemImage.name}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>

          <Button variant="contained" color="primary" type="submit">
            Add Meal Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddMealItem;
