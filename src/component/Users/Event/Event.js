import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import Layout from "@/component/Layout/Layout";
import Link from "next/link";

const EventSlider = () => {
  const events = [
    {
      id: 1,
      image: "/assets/images/event/birthday.jpg",
      title: "Birthday Parties",
      price: "$189",
      description: "Celebrate your birthday with an unforgettable party!",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      id: 2,
      image: "/assets/images/event/privateparty.jpg",
      title: "Private Parties",
      price: "$290",
      description: "Enjoy an exclusive private party with us!",
      features: [
        "Exclusive ambiance and decorations.",
        "Personalized music and entertainment options.",
        "Custom food and beverage packages.",
      ],
    },
    {
      id: 3,
      image: "/assets/images/event/cucstomparty.jpg",
      title: "Custom Parties",
      price: "$99",
      description: "Make your dream event come to life!",
      features: [
        "Tailored themes to fit any occasion.",
        "Expert event planning services.",
        "Memorable party experience.",
      ],
    },
  ];

  const swiperSettings = {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination-custom",
    },
    spaceBetween: 20, // Adjust to add space between images
    modules: [Autoplay, Pagination],
  };

  return (
    <Layout>
      <Box
        id="events"
        sx={{
          position: "relative",
          overflow: "hidden",
          padding: 10,
          marginTop: 5,
        }}
        className="green"
      >
        <Box textAlign={"center"} mb={10}>
          <Typography
            variant="h2"
            sx={{
              backgroundImage: "linear-gradient(135deg, #ffcc00, #ff6600)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
            className="ffpoppins"
          >
            Events
          </Typography>
        </Box>
        <Swiper {...swiperSettings}>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },

                  alignItems: "center",
                  gap: 3,
                }}
              >
                {/* Left Side: Image */}
                <Box
                  component="img"
                  src={event.image}
                  alt={event.title}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    borderRadius: 2,
                    objectFit: "cover",
                    maxHeight: 300,
                  }}
                />

                {/* Right Side: Text Content */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "30px",
                        md: "36px",
                      },
                      fontWeight: "700",
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" mt={1} mb={2}>
                    {event.price}
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    {event.description}
                  </Typography>
                  <ul>
                    {event.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        <Typography variant="body2">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination Container */}
        <div className="swiper-pagination-custom"></div>

        <Box textAlign="center" mt={4}>
          <Link href="/bookevent">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundImage:
                  "linear-gradient(135deg, #ffcc00, #ff6600) !important",
                color: "#fff",
                fontWeight: "bold",
                top: "30px",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundImage: "linear-gradient(135deg, #ff6600, #ffcc00)",
                },
              }}
            >
              Book an Event
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Custom Styles for the Pagination Dots */}
      <style jsx>{`
        .swiper-pagination-custom {
          position: relative;
          bottom: -20px;
          width: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
};

export default EventSlider;
