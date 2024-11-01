import React from "react";
import { Box, Typography, Grid, Button, Icon } from "@mui/material";
import StyledTextField from "./StyledTextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import PhoneIcon from "@mui/icons-material/Phone";
import { Email } from "@mui/icons-material";
import {
  clearContactUs,
  setContactUsData,
} from "@/pages/feature/ContactUs/contactSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setContactUsData(data));
    console.log("Form submitted:", data);
    toast.success("Message Sent successfully");

    reset();
    dispatch(clearContactUs());
  };

  // Debugging: Check errors structure

  console.log(errors);

  return (
    <Box
      className="green"
      sx={{
        maxWidth: 1200,
        mx: "auto",
        p: 3,
        mt: 5,
      }}
    >
      <Typography
        className="ffpoppins"
        variant="h3"
        gutterBottom
        textAlign={"center"}
        mt={5}
        sx={{
          backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} mt={4}>
        {/* Left Side: Contact Information */}
        <Grid item xs={12} md={6}>
          {/* Location Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Icon
              sx={{
                width: "40px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              }}
            >
              <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
            </Icon>

            <Box>
              <Typography variant="h6">Location</Typography>
              <Typography variant="body1">
                704-705, Kawish Crown Plaza, Shahrah-e-Faisal Rd, Karachi
              </Typography>
            </Box>
          </Box>

          {/* Open Hours Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Icon
              sx={{
                width: "40px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              }}
            >
              <CallIcon color="primary" sx={{ fontSize: 30 }} />
            </Icon>

            <Box>
              <Typography variant="h6">Open Hours</Typography>
              <Typography variant="body1">Monday-Saturday:</Typography>
              <Typography variant="body1">11:00 AM - 11:00 PM</Typography>
            </Box>
          </Box>

          {/* Call Us Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Icon
              sx={{
                width: "40px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              }}
            >
              <PhoneIcon color="primary" sx={{ fontSize: 30 }} />
            </Icon>

            <Box>
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="body1">+1 5589 55488 55</Typography>
            </Box>
          </Box>

          {/* Email Us Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Icon
              sx={{
                width: "40px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              }}
            >
              <Email color="primary" sx={{ fontSize: 30 }} />
            </Icon>
            <Box>
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="body1">
                info@mangotechsolutions.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Name"
                  fullWidth
                  {...register("name", {
                    required: "Full Name is required",
                  })}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <StyledTextField
                  label="Email"
                  type="email"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email is invalid",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <StyledTextField
                  label="Subject"
                  fullWidth
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  error={!!errors.subject}
                  helperText={errors.subject ? errors.subject.message : ""}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <StyledTextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  {...register("message", {
                    required: "Message is required",
                  })}
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : ""}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="outlined"
              color="black"
              sx={{
                mt: 2,
                ":hover": {
                  border: "1px solid orange",
                  backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
};

export default ContactUs;
