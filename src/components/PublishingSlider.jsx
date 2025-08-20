import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const publications = [
  {
    image: '/assets/photo1.jpg',
    title: 'Новое издание: Современная литература',
    description: 'Лучшие произведения современных авторов в одном сборнике.',
  },
  {
    image: '/assets/photo2.jpg',
    title: 'Исторические романы',
    description: 'Погружение в эпохи через захватывающие сюжеты.',
  },
  {
    image: '/assets/photo5.jpg',
    title: 'Детская классика',
    description: 'Любимые сказки и истории для малышей и подростков.',
  },
];

const PublishingSlider = () => {
  return (
    <Box
      id="publishing"
      sx={{
        py: 10,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4} data-aos="fade-up">
        Издательство
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {publications.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              data-aos="zoom-in"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                mx: 1,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <Box p={2}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PublishingSlider;
