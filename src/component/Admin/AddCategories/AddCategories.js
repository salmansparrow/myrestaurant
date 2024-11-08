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
  // State for category name
  const [categoryName, setCategoryName] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the server to create a new category
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear the input and show a success message
        setCategoryName("");
        alert(data.message); // Optionally, use a better notification system
      } else {
        // Handle error message
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("An error occurred while adding the category.");
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
