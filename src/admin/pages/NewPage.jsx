import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const initialForm = {
  date: '',
  title: { ru: '', en: '', kg: '' },
  description: { ru: '', en: '', kg: '' },
};

const NewsPage = () => {
  const savedNews = JSON.parse(localStorage.getItem('newsList')) || [];

  const [newsList, setNewsList] = useState(savedNews);
  const [form, setForm] = useState(initialForm);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('newsList', JSON.stringify(newsList));
  }, [newsList]);

  const handleChange = (e, field, lang = null) => {
    if (lang) {
      setForm({
        ...form,
        [field]: {
          ...form[field],
          [lang]: e.target.value,
        },
      });
    } else {
      setForm({ ...form, [field]: e.target.value });
    }
  };

  const handleAddOrUpdate = () => {
    if (!form.date || !form.title.ru) {
      alert('Дата и заголовок на русском обязательны');
      return;
    }

    if (editIndex !== null) {
      const updated = [...newsList];
      updated[editIndex] = form;
      setNewsList(updated);
      setEditIndex(null);
    } else {
      setNewsList([...newsList, form]);
    }

    setForm(initialForm);
  };

  const handleEdit = (index) => {
    setForm(newsList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm('Удалить новость?')) {
      const updated = newsList.filter((_, i) => i !== index);
      setNewsList(updated);
      if (editIndex === index) {
        setForm(initialForm);
        setEditIndex(null);
      }
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Форма сверху */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 4,
          width: '100%',
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2}>
          {editIndex !== null ? 'Редактировать новость' : 'Добавить новость'}
        </Typography>

        <TextField
          label="Дата"
          type="date"
          value={form.date}
          onChange={(e) => handleChange(e, 'date')}
          fullWidth
          InputLabelProps={{ shrink: true }}
          size="small"
          sx={{ mb: 2 }}
        />

        {['ru', 'en', 'kg'].map((lang) => (
          <TextField
            key={`title-${lang}`}
            label={`Заголовок (${lang.toUpperCase()})`}
            value={form.title[lang]}
            onChange={(e) => handleChange(e, 'title', lang)}
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />
        ))}

        {['ru', 'en', 'kg'].map((lang) => (
          <TextField
            key={`desc-${lang}`}
            label={`Описание (${lang.toUpperCase()})`}
            value={form.description[lang]}
            onChange={(e) => handleChange(e, 'description', lang)}
            fullWidth
            multiline
            rows={3}
            size="small"
            sx={{ mb: 2 }}
          />
        ))}

        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddOrUpdate}
            sx={{ flex: 1 }}
          >
            {editIndex !== null ? 'Сохранить изменения' : 'Добавить новость'}
          </Button>
          {editIndex !== null && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setForm(initialForm);
                setEditIndex(null);
              }}
              sx={{ flex: 1 }}
            >
              Отмена
            </Button>
          )}
        </Box>
      </Paper>

      {/* Список новостей снизу */}
      <Box
        sx={{
          width: '100%',
          maxHeight: 'calc(100vh - 300px)', // Ограничиваем высоту списка
          overflowY: 'auto',
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Список новостей
        </Typography>

        {newsList.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" mt={4}>
            Новостей пока нет
          </Typography>
        ) : (
          newsList.map((news, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Дата: {news.date}
              </Typography>
              <Typography variant="h6" noWrap title={news.title.ru}>
                {news.title.ru}
              </Typography>
              <Typography
                sx={{
                  maxHeight: 80,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                }}
                title={news.description.ru}
              >
                {news.description.ru}
              </Typography>

              <Box sx={{ mt: 1 }}>
                <Button size="small" onClick={() => handleEdit(index)}>
                  Изменить
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(index)}
                  sx={{ ml: 1 }}
                >
                  Удалить
                </Button>
              </Box>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
};

export default NewsPage;
