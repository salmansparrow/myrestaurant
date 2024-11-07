import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const AddCategories = () => {
  const [categoryName, setCategoryName] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Category added:", result);
        setCategoryName(""); // Clear the input field after adding
      } else {
        console.error("Error adding category:", result.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add New Category
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Category Name"
              variant="outlined"
              value={categoryName}
              onChange={handleInputChange}
              required
            />
          </Box>

          <Button variant="contained" color="primary" type="submit">
            Add Category
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCategories;
