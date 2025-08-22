import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BookCard = ({ src, title, linkTo }) => (
  <Box
    component={Link}
    to={linkTo}
    sx={{
      textDecoration: "none",
      color: "white",
      perspective: 900, // 3D пространство
      display: "inline-block",
    }}
  >
    <Box
      sx={{
        width: 250,
        height: 350,
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s ease",
        transform: "rotateY(20deg)",
        cursor: "pointer",
        boxShadow: "5px 8px 15px rgba(0,0,0,0.3)",
        borderRadius: 2,
        "&:hover": {
          transform: "rotateY(-15deg) scale(1.1)",
          zIndex: 10,
          boxShadow: "10px 15px 30px rgba(0,0,0,0.5)",
        },
      }}
    >
      {/* Передняя обложка книги */}
      <Box
        component="img"
        src={src}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 2,
          objectFit: "cover",
          backfaceVisibility: "hidden",
          position: "relative",
          zIndex: 5,
        }}
      />

      {/* Корешок книги */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 30,
          height: "100%",
          backgroundColor: "#444",
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
          boxShadow: "inset -3px 0 8px rgba(0,0,0,0.7)",
          transformOrigin: "left center",
          transform: "rotateY(-70deg) translateX(-30px)",
          zIndex: 1,
        }}
      />
    </Box>

    <Typography
      variant="subtitle1"
      textAlign="center"
      mt={2}
      sx={{ width: 250, fontWeight: 700 }}
    >
      {title}
    </Typography>

    <Box textAlign="center" mt={1}>
      <Button variant="contained" size="small" sx={{ textTransform: "none" }}>
        Подробнее
      </Button>
    </Box>
  </Box>
);

const CubesShowcase = () => {
  const journals = [
    {
      src: "/assets/journal1.png",
      title: "Наука, новые технологии и инновации Кыргызстана",
      linkTo: "/journal1",
    },
    {
      src: "/assets/ivk.jpg",
      title: 'Журнал "Известия ВУЗов Кыргызстана"',
      linkTo: "/journal2",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: 6,
        px: 4,
        backgroundImage: 'url("/assets/hbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        textShadow: "0 0 6px rgba(0,0,0,0.7)",
        position: "relative",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={-5} zIndex={2}>
        Журналы
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around", // вот тут space-around для карточек
          gap: 4,
          width: "100%",
          maxWidth: 1200,
          zIndex: 2,
        }}
      >
        {journals.map((j) => (
          <BookCard key={j.title} {...j} />
        ))}
      </Box>

      {/* Тёмный фильтр для фона */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default CubesShowcase;
