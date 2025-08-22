// import React, { useState } from 'react';
// import { Box, Typography, Grid, Button, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const books = [
//   {
//     id: 'book1',
//     title: 'Книга 1',
//     description: 'Описание первой книги.',
//     src: '/assets/book1.jpg',
//     spineColor: '#6A1B9A',
//     route: '/book1',
//   },
//   {
//     id: 'book2',
//     title: 'Книга 2',
//     description: 'Описание второй книги.',
//     src: '/assets/book2.jpg',
//     spineColor: '#0277BD',
//     route: '/book2',
//   },
//   {
//     id: 'book3',
//     title: 'Книга 3',
//     description: 'Описание третьей книги.',
//     src: '/assets/book3.jpg',
//     spineColor: '#E64A19',
//     route: '/book3',
//   },
//   {
//     id: 'book4',
//     title: 'Книга 4',
//     description: 'Описание четвёртой книги.',
//     src: '/assets/book4.jpg',
//     spineColor: '#388E3C',
//     route: '/book4',
//   },
//   {
//     id: 'book5',
//     title: 'Книга 5',
//     description: 'Описание пятой книги.',
//     src: '/assets/book5.jpg',
//     spineColor: '#0097A7',
//     route: '/book5',
//   },
// ];

// const ITEMS_PER_PAGE = 3;

// const BooksPage = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);

//   const handleClick = (book) => {
//     navigate(book.route);
//   };

//   const pageCount = Math.ceil(books.length / ITEMS_PER_PAGE);

//   const paginatedBooks = books.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         py: 8,
//         px: 2,
//         backgroundColor: '#f0f0f0',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="h3" fontWeight="bold" gutterBottom color="black">
//         Книги
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {paginatedBooks.map((book) => (
//           <Grid item key={book.id} xs={12} sm={6} md={4}>
//             <Box
//               sx={{ perspective: '1500px', cursor: 'pointer' }}
//               onClick={() => handleClick(book)}
//             >
//               <Box
//                 sx={{
//                   transformStyle: 'preserve-3d',
//                   position: 'relative',
//                   width: 220,
//                   height: 300,
//                   mx: 'auto',
//                   boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
//                   borderRadius: 2,
//                   backgroundColor: '#fff',
//                   transform:'rotateY(20deg)',
//                   transition: 'transform 0.4s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                   },
//                 }}
//               >
//                 {/* Корешок книги */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: 30,
//                     height: '100%',
//                     backgroundColor: '#444',
//                     borderTopLeftRadius: 6,
//                     borderBottomLeftRadius: 6,
//                     boxShadow: 'inset -3px 0 8px rgba(0,0,0,0.7)',
//                     transformOrigin: 'left center',
//                     transform: 'rotateY(-70deg) translateX(-30px)',
//                     zIndex: 1,
//                   }}
//                 />

//                 {/* Обложка книги */}
//                 <Box
//                   component="img"
//                   src={book.src}
//                   alt={book.title}
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     borderRadius: 2,
//                     backfaceVisibility: 'hidden',
//                     position: 'relative',
//                     zIndex: 2,
//                   }}
//                 />
//               </Box>

//               <Typography variant="h6" mt={1}>
//                 {book.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" mt={1}>
//                 {book.description}
//               </Typography>
//               <Button
//                 variant="text"
//                 size="small"
//                 sx={{ mt: 1, color:'#003366' }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleClick(book);
//                 }}
//               >
//                 Подробнее →
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Пагинация */}
//       <Stack
//         direction="row"
//         spacing={2}
//         justifyContent="center"
//         mt={6}
//         alignItems="center"
//       >
//        <Button
//           variant="outlined"
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           sx={{
//             color: '#003366',
//             borderColor: '#003366',
//             '&:hover': {
//               backgroundColor: '#001f4d',
//               borderColor: '#001f4d',
//               color: '#fff',
//             },
//             '&.Mui-disabled': {
//               color: '#99aabb',
//               borderColor: '#99aabb',
//             },
//           }}
//         >
//           Назад
//         </Button>

//         {[...Array(pageCount)].map((_, idx) => (
//           <Button
//             key={idx}
//             variant={page === idx + 1 ? 'contained' : 'outlined'}
//             onClick={() => setPage(idx + 1)}
//             sx={{
//               ...(page === idx + 1
//                 ? {
//                     backgroundColor: '#003366',
//                     color: '#fff',
//                     '&:hover': {
//                       backgroundColor: '#001f4d',
//                     },
//                   }
//                 : {
//                     color: '#003366',
//                     borderColor: '#003366',
//                     '&:hover': {
//                       backgroundColor: '#001f4d',
//                       borderColor: '#001f4d',
//                       color: '#fff',
//                     },
//                   }),
//             }}
//           >
//             {idx + 1}
//           </Button>
//         ))}

//         <Button
//           variant="outlined"
//           disabled={page === pageCount}
//           onClick={() => setPage((p) => p + 1)}
//           sx={{
//             color: '#003366',
//             borderColor: '#003366',
//             '&:hover': {
//               backgroundColor: '#001f4d',
//               borderColor: '#001f4d',
//               color: '#fff',
//             },
//             '&.Mui-disabled': {
//               color: '#99aabb',
//               borderColor: '#99aabb',
//             },
//           }}
//         >
//           Вперёд
//         </Button>

//       </Stack>
//     </Box>
//   );
// };

// export default BooksPage;
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 3;

const BooksPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'ru';

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  // Загрузка книг из localStorage
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      try {
        const parsed = JSON.parse(storedBooks);
        setBooks(parsed);
      } catch (e) {
        console.error('Ошибка при разборе книг из localStorage:', e);
      }
    }
  }, []);

  const handleClick = (book) => {
    navigate(book.route || '/');
  };

  const pageCount = Math.ceil(books.length / ITEMS_PER_PAGE);

  const paginatedBooks = books.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ minHeight: '100vh', py: 8, px: 2, backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom color="black">
        Книги
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {paginatedBooks.map((book) => (
          <Grid key={book.id} xs={12} sm={6} md={4}>
            <Box sx={{ perspective: '1500px', cursor: 'pointer' }} onClick={() => handleClick(book)}>
              <Box
                sx={{
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  width: 220,
                  height: 300,
                  mx: 'auto',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  transform: 'rotateY(20deg)',
                  transition: 'transform 0.4s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                {/* Корешок */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 30,
                    height: '100%',
                    backgroundColor: book.spineColor || '#444',
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                    boxShadow: 'inset -3px 0 8px rgba(0,0,0,0.7)',
                    transformOrigin: 'left center',
                    transform: 'rotateY(-70deg) translateX(-30px)',
                    zIndex: 1,
                  }}
                />

                {/* Обложка */}
                <Box
                  component="img"
                  src={book.src}
                  alt={book.title?.[currentLang] || 'Book'}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    backfaceVisibility: 'hidden',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </Box>

              <Typography variant="h6" mt={1}>
                {book.title?.[currentLang] || 'Без названия'}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {book.description?.[currentLang] || ''}
              </Typography>
              <Button
                variant="text"
                size="small"
                sx={{ mt: 1, color: '#003366' }}
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

      {/* Пагинация */}
      <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
        <Button
          variant="outlined"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Назад
        </Button>

        {[...Array(pageCount)].map((_, idx) => (
          <Button
            key={idx}
            variant={page === idx + 1 ? 'contained' : 'outlined'}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </Button>
        ))}

        <Button
          variant="outlined"
          disabled={page === pageCount}
          onClick={() => setPage((p) => p + 1)}
        >
          Вперёд
        </Button>
      </Stack>
    </Box>
  );
};

export default BooksPage;
