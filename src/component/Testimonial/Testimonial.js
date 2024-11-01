import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { Star, FormatQuote } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    message: "This restaurant has the best food I’ve ever tasted!",
    rating: 5,
    name: "Ahmed",
  },
  {
    id: 2,
    message: "Amazing experience! Great service and delicious food.",
    rating: 4,
    name: "Jane",
  },
  {
    id: 3,
    message:
      "I loved the ambiance, and the food was exceptional. I loved the ambiance, and the food was exceptional.",
    rating: 5,
    name: "Lee",
  },
];

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      background: "#fcc012",
      color: "#fff",
      borderRadius: "50%",
      cursor: "pointer",
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
    onClick={onClick}
    className="slick-dots"
  >
    {/* &lt; */}
    <ArrowBackIosIcon />
  </div>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <div
    className="slick-dots"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      background: "#fcc012",
      color: "#fff",
      borderRadius: "50%",
      cursor: "pointer",
      position: "absolute",
      right: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
    onClick={onClick}
  >
    {/* &gt; */}
    <ArrowForwardIosIcon />
  </div>
);

function TestimonialSlider() {
  const settings = {
    dots: false, // Disable dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    prevArrow: <CustomPrevArrow />, // Use custom previous arrow
  };

  return (
    <Box
      sx={{
        height: "100vh",
        marginTop: 5,
        background: "linear-gradient(135deg, #ffcc00, #ff6600)", // Gradient background
        position: "relative", // Position relative for absolute positioning of inner elements
        overflow: "hidden", // Hide overflow for a clean look
      }}
    >
      {/* Optional background image for texture */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //   backgroundImage: "url('/path/to/your/background-image.jpg')", // Add your image path here
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // Light opacity to keep it subtle
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          margin: "auto",
          top: "25%",
          padding: 4,
          position: "relative",
          backgroundColor: "#4caf50",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              sx={{
                textAlign: "center",
                padding: 4,
                color: "white",
              }}
            >
              {/* Quote Icon */}
              <FormatQuote sx={{ fontSize: 50, color: "#b50810" }} />

              {/* Testimonial Message */}
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  marginBottom: 2,
                  fontSize: {
                    xs: "18px",
                    sm: "18px",
                    md: "24px",
                  },
                }}
              >
                {testimonial.message}
              </Typography>

              {/* Star Rating */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 2,
                }}
              >
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} sx={{ color: "#ffcc00" }} />
                  ))}
              </Box>

              {/* User Name */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="white"
              >
                {testimonial.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default TestimonialSlider;
