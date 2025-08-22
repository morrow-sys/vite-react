import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PublishersPage = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('publications');
    if (stored) {
      setPublications(JSON.parse(stored));
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!title.trim() || !description.trim() || !image) return;

    const newPub = { image, title, description };
    const updated = [...publications, newPub];

    setPublications(updated);
    localStorage.setItem('publications', JSON.stringify(updated));

    setImage('');
    setTitle('');
    setDescription('');
  };

  // Удаление публикации по индексу
  const handleDelete = (index) => {
    const updated = publications.filter((_, i) => i !== index);
    setPublications(updated);
    localStorage.setItem('publications', JSON.stringify(updated));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        p: 4,
        gap: 4,
        bgcolor: '#f5f5f5',
        height: '100vh',
      }}
    >
      {/* Левая колонка — форма */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: 260,
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 2,
          boxShadow: 4,
          alignSelf: 'flex-start',
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Добавить публикацию
        </Typography>

        <Button variant="outlined" component="label" size="small">
          Выбрать изображение
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>

        {image && (
          <Box
            component="img"
            src={image}
            alt="Предпросмотр"
            sx={{
              width: '100%',
              maxHeight: 160,
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        )}

        <TextField
          label="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="small"
          fullWidth
        />
        <TextField
          label="Описание"
          multiline
          minRows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          size="small"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            backgroundColor: '#141e28',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'aqua',
            },
            mt: 1,
          }}
          disabled={!title.trim() || !description.trim() || !image}
        >
          Добавить
        </Button>
      </Paper>

      {/* Правая колонка — список */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 4,
          p: 3,
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Список публикаций
        </Typography>

        {publications.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" mt={4}>
            Публикации отсутствуют.
          </Typography>
        ) : (
          <Stack spacing={3}>
            {publications.map((item, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  alignItems: 'flex-start',
                  maxHeight: 200,
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 180,
                    height: 160,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    noWrap
                    title={item.title}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      maxHeight: 100,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                    }}
                    title={item.description}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <IconButton
                  aria-label="удалить"
                  color="error"
                  onClick={() => handleDelete(index)}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default PublishersPage;
