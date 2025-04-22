import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, FreeMode } from "swiper/modules";
import { Launch } from "@mui/icons-material";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import { projects, TechIcons } from "./projects";

const ProjectsCarousel = () => {
  const theme = useTheme();
  const projectsSwiperRef = useRef<SwiperRef>(null);
  const techSwiperRef = useRef<SwiperRef>(null);

  // אנימציה אוטומטית לפרויקטים
  useEffect(() => {
    const interval = setInterval(() => {
      if (projectsSwiperRef.current) {
        projectsSwiperRef.current.swiper.slideNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        mb: 8,
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: theme.palette.background.default,
        py: 6,
        overflow: "hidden",
      }}
    >
      {/* קרוסלת הפרויקטים */}
      <Typography
        variant="h4"
        textAlign="center"
        mb={6}
        fontWeight="bold"
        sx={{ color: theme.palette.text.primary }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          maxWidth: "1500px",
          margin: "0 auto",
          px: 2,
        }}
      >
        <Swiper
          ref={projectsSwiperRef}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 10,
            stretch: -20,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          style={{
            padding: "60px 0",
            width: "100%",
            overflow: "visible",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "350px",
                height: "450px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                }}
                style={{
                  height: "100%",
                  display: "flex",
                }}
              >
                <Paper
                  sx={{
                    flex: 1,
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 20%, transparent 60%), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(122, 121, 192, 0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",

                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      mb: 2,
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",

                      opacity: 0.9,
                    }}
                  >
                    {project.desc}
                  </Typography>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    mb={3}
                    sx={{
                      "& .MuiChip-root": {
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.15)",
                          color: "white",
                          fontWeight: "600",
                          backdropFilter: "blur(5px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </Stack>

                  {project.link !== "#" && (
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="contained"
                      color="primary"
                      startIcon={<Launch />}
                      fullWidth
                      sx={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        py: 1.5,
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Project
                    </Button>
                  )}
                </Paper>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* קרוסלת הטכנולוגיות */}
      <Box
        sx={{
          maxWidth: "1500px",
          margin: "0 auto",
          px: 2,
          mt: 8,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={6}
          fontWeight="bold"
          sx={{ color: theme.palette.text.primary }}
        >
          Technologies I Use
        </Typography>

        <Swiper
          ref={techSwiperRef}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          freeMode={{ enabled: true, momentum: false }}
          slidesPerView="auto"
          spaceBetween={30}
          modules={[Autoplay, FreeMode]}
          style={{
            padding: "20px 0",
            width: "100%",
          }}
        >
          {Object.entries(TechIcons).map(([name, Icon]) => (
            <SwiperSlide key={name} style={{ width: "auto" }}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "100px",
                  padding: "0 15px",
                }}
              >
                <Icon
                  style={{
                    fontSize: "3rem",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  variant="body2"
                  mt={1}
                  fontWeight="bold"
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  {name}
                </Typography>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProjectsCarousel;
