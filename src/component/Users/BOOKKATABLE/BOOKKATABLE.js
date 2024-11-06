import { Box, Grid, Typography, Button } from "@mui/material";
import StyledTextFieldTable from "./StyledTextField";

function BookTable() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 700,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
        }}
      >
        <span className="ffpoppins">Book a Table</span>
      </Typography>

      <Grid container spacing={2} mt={2}>
        {/* Name Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable label="Name" type="text" fullWidth />
        </Grid>

        {/* Email Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable label="Email" type="email" fullWidth />
        </Grid>

        {/* Phone Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable label="Phone" type="tel" fullWidth />
        </Grid>

        {/* Date Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Time Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable
            label="Time"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Number of Guests Field */}
        <Grid item xs={12} md={6}>
          <StyledTextFieldTable
            label="Number of Guests"
            type="number"
            fullWidth
          />
        </Grid>

        {/* Message Field */}
        <Grid item xs={12}>
          <StyledTextFieldTable label="Message" multiline rows={4} fullWidth />
        </Grid>

        {/* Submit Button */}
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingY: "20px",
              backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              color: "#fff",
              fontWeight: "600",
              ":hover": {
                backgroundImage: "linear-gradient(135deg, #ff6600, #ffcc00)",
              },
            }}
          >
            Book a Table
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookTable;
