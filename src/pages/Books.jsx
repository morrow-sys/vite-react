import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const books = [
  {
    id: 'book1',
    title: 'Книга 1',
    description: 'Описание первой книги.',
    src: '/assets/book1.jpg',
    rotate: '-15deg',
    spineColor: '#6A1B9A',
    route: '/book1',
  },
  {
    id: 'book2',
    title: 'Книга 2',
    description: 'Описание второй книги.',
    src: '/assets/book2.jpg',
    rotate: '15deg',
    spineColor: '#0277BD',
    route: '/book2',
  },
  // Добавляй сюда новые книги
];

const BooksPage = () => {
  const navigate = useNavigate();

  const handleClick = (book) => {
    navigate(book.route);
  };

  return (
    <Box
      sx={{
     minHeight: '100vh',
    py: 8,
    px: 2,
    backgroundColor: '#f0f0f0', // на случай если изображение не загрузится
    backgroundImage: 'url(/assets/wall1.jpg)',  // путь к фоновому изображению
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',  // масштабирование изображения по размеру контейнера
    backgroundPosition: 'center center',
    textAlign: 'center',
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom color='white'>
        Книги
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Box
              sx={{ perspective: '1500px', cursor: 'pointer' }}
              onClick={() => handleClick(book)}
            >
              <Box
                sx={{
                  transform: `rotateY(${book.rotate})`,
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  width: 220,
                  top:'50px',
                  height: 300,
                  mx: 'auto',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: `rotateY(${book.rotate}) scale(1.05)`,
                  },
                }}
              >
                <Box
                  component="img"
                  src={book.src}
                  alt={book.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    backfaceVisibility: 'hidden',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '20px',
                    height: '100%',
                    background: `linear-gradient(to right, ${book.spineColor}, #000)`,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    transform: 'translateX(-20px) rotateY(90deg)',
                    transformOrigin: 'left',
                  }}
                />
              </Box>

              <Typography variant="h6" mt={1}>
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {book.description}
              </Typography>
              <Button
                variant="text"
                size="small"
                sx={{ mt: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(book);
                }}
              >
                Подробнее →
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BooksPage;
