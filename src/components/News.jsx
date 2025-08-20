import { Box, Typography, Grid, Paper } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ArticleIcon from '@mui/icons-material/Article';

const newsItems = [
  {
    icon: <AnnouncementIcon fontSize="large" color="primary" />,
    title: 'Главные новости',
    description: 'Самые важные события и обновления из мира бизнеса.',
  },
  {
    icon: <NewReleasesIcon fontSize="large" color="primary" />,
    title: 'Свежие релизы',
    description: 'Новейшие продукты и сервисы на рынке, которые стоит знать.',
  },
  {
    icon: <ArticleIcon fontSize="large" color="primary" />,
    title: 'Экспертные статьи',
    description: 'Аналитика и советы от ведущих специалистов отрасли.',
  },
];

const News = () => {
  return (
    <Box
      id="news"
      sx={{
        py: 10,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4} data-aos="fade-up">
        Новости
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {newsItems.map((news, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              sx={{
                p: 4,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box mb={2}>{news.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {news.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {news.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
