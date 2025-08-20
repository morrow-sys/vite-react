// components/Footer.js
import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e2a38',
        color: '#eee',
        py: 6,
        // mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Журналы
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/journal1" color="inherit" underline="hover">
                "Наука, новые технологии и инновации Кыргызстана"
              </Link>
              <Link href="/journal2" color="inherit" underline="hover">
                "Известия ВУЗов Кыргызстана"
              </Link>
              <Link href="./publishing" color="inherit" underline="hover">
                Издательство
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Контакты
            </Typography>
            <Typography>г.Бишкек, ул. Дж.Боконбаева, д.99, этаж 3, каб.33</Typography>
            <Typography>Телефон:+996 (312) 303 297, +996 (312) 303 320</Typography>
            <Typography>@mail: sje.kg.2009@mail.ru</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Соцсети
            </Typography>
            <Box>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 1, sm: 0 } }}>
            © 2025 Journal-science. Все права защищены.
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Политика конфиденциальности
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Условия использования
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
