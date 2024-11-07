import Layout from "@/component/Layout/Layout";
import {
  clearFormData,
  setFormData,
} from "../../../../feature/EventForm/eventFormSlice";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookAnEvent() {
  const dispatch = useDispatch();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Event submitted successfully!");

    // Dispatch the form data to the Redux store
    dispatch(setFormData(data));

    // Clear the form data in Redux
    dispatch(clearFormData());

    // Resetting form fields to their default values
    reset({
      fullName: "",
      email: "",
      phone: "",
      eventType: "", // Resetting to default empty string
      eventDate: "",
      startTime: "",
      endTime: "",
      guests: "",
      venue: "", // Resetting to default empty string
      seating: "", // Resetting to default empty string
      theme: "",
      services: {
        catering: false,
        liveMusic: false,
        dj: false,
        photographer: false,
      },
      budget: "",
      specialRequests: "",
      terms: false,
    });
  };

  return (
    <Layout>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
          <span className="ffpoppins">Book an Event</span>
        </Typography>

        <Grid container spacing={2} mt={3}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              {...register("fullName", { required: "Full Name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              {...register("phone", { required: "Phone Number is required" })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>

          {/* Event Details */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Event Type"
              select
              variant="outlined"
              fullWidth
              {...register("eventType", { required: "Event Type is required" })}
              error={!!errors.eventType}
              helperText={errors.eventType?.message}
            >
              <MenuItem value="">Select Event Type</MenuItem>
              <MenuItem value="Birthday">Birthday Party</MenuItem>
              <MenuItem value="Private">Private Party</MenuItem>
              <MenuItem value="Corporate">Corporate Event</MenuItem>
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Custom">Custom Event</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Event Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              {...register("eventDate", { required: "Event Date is required" })}
              error={!!errors.eventDate}
              helperText={errors.eventDate?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Start Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              {...register("startTime", { required: "Start Time is required" })}
              error={!!errors.startTime}
              helperText={errors.startTime?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="End Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              {...register("endTime", { required: "End Time is required" })}
              error={!!errors.endTime}
              helperText={errors.endTime?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Number of Guests"
              type="number"
              variant="outlined"
              fullWidth
              {...register("guests", {
                required: "Number of Guests is required",
                min: { value: 1, message: "Guests should be at least 1" },
              })}
              error={!!errors.guests}
              helperText={errors.guests?.message}
            />
          </Grid>

          {/* Venue & Setup Preferences */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Preferred Venue"
              select
              variant="outlined"
              fullWidth
              {...register("venue")}
            >
              <MenuItem value="">Select Venue</MenuItem>
              <MenuItem value="Indoor">Indoor</MenuItem>
              <MenuItem value="Outdoor">Outdoor</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Seating Arrangement"
              select
              variant="outlined"
              fullWidth
              {...register("seating")}
            >
              <MenuItem value="">Select Seating</MenuItem>
              <MenuItem value="Banquet">Banquet</MenuItem>
              <MenuItem value="Theater">Theater</MenuItem>
              <MenuItem value="U-Shape">U-Shape</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Theme/Decor Preferences"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              {...register("theme")}
            />
          </Grid>

          {/* Additional Services */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox {...register("services.catering")} />}
              label="Catering"
            />
            <FormControlLabel
              control={<Checkbox {...register("services.liveMusic")} />}
              label="Live Music"
            />
            <FormControlLabel
              control={<Checkbox {...register("services.dj")} />}
              label="DJ"
            />
            <FormControlLabel
              control={<Checkbox {...register("services.photographer")} />}
              label="Photographer"
            />
          </Grid>

          {/* Budget & Additional Requests */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Approximate Budget"
              type="number"
              variant="outlined"
              fullWidth
              {...register("budget")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Special Requests/Notes"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              {...register("specialRequests")}
            />
          </Grid>

          {/* Consent & Submit */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("terms", {
                    required: "You must accept the terms and conditions",
                  })}
                />
              }
              label="I agree to the terms and conditions"
            />
            {errors.terms && (
              <Typography color="error" variant="body2">
                {errors.terms.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                display: "block",
                backgroundImage:
                  "linear-gradient(135deg, #ffcc00, #ff6600) !important",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              fullWidth
            >
              Submit Booking
            </Button>
          </Grid>
        </Grid>
        <ToastContainer position="top-center" autoClose={3000} />
      </Box>
    </Layout>
  );
}

export default BookAnEvent;
