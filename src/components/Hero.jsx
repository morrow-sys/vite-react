import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const Cube = ({ size = 220, rotationSpeed = 15, faces }) => {
  const ref = useRef(null);

  useEffect(() => {
    let frameId;
    let angle = 0;

    const animate = () => {
      angle = (angle + rotationSpeed * 0.016) % 360;
      if (ref.current) {
        ref.current.style.transform = `rotateX(${Math.sin(angle * 0.5) * 10}deg) rotateY(${angle}deg)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [rotationSpeed]);

  const half = size / 2;

  const faceTransforms = {
    front: `translateZ(${half}px)`,
    back: `rotateY(180deg) translateZ(${half}px)`,
    left: `rotateY(-90deg) translateZ(${half}px)`,
    right: `rotateY(90deg) translateZ(${half}px)`,
    top: `rotateX(90deg) translateZ(${half}px)`,
    bottom: `rotateX(-90deg) translateZ(${half}px)`,
  };

  return (
    <Box
      ref={ref}
      sx={{
        width: size,
        height: size,
        position: "relative",
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        userSelect: "none",
        cursor: "default",
        margin: 2,
      }}
    >
      {Object.entries(faceTransforms).map(([face, transform]) => (
        <Box
          key={face}
          sx={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: 3,
            backgroundImage: `url(${faces[face]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 0 12px rgba(0,0,0,0.5)",
            border: "2px solid #fff",
            backfaceVisibility: "hidden",
            transform,
            filter: "brightness(0.9)",
          }}
        />
      ))}
    </Box>
  );
};

const CubesShowcase = () => {
  const faces1 = {
    front: "/assets/journal1.png",
    back: "/assets/journal1.png",
    left: "/assets/journal1.png",
    right: "/assets/journal1.png",
    top: "/assets/journal1.png",
    bottom: "/assets/journal1.png",
  };

  const faces2 = {
    front: "/assets/ivk.jpg",
    back: "/assets/ivk.jpg",
    left: "/assets/ivk.jpg",
    right: "/assets/ivk.jpg",
    top: "/assets/ivk.jpg",
    bottom: "/assets/ivk.jpg",
  };

  return (
    <Box
      sx={{
    minHeight: "100vh",
    paddingTop: 10,       // <-- добавлено, чтобы опустить содержимое вниз
    backgroundImage: 'url("/assets/hero-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    paddingX: 4,
    position: "relative",
    color: "white",
    textShadow: "0 0 6px rgba(0,0,0,0.7)",
  }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ zIndex: 2, marginBottom: 6 }}
      >
       Журналы
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 50,  // увеличенный отступ между кубами
          zIndex: 2,
          perspective: 1400,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Cube size={220} rotationSpeed={15} faces={faces1} />
        <Cube size={220} rotationSpeed={10} faces={faces2} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default CubesShowcase;
