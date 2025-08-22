import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 3;

const BooksPage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'ru';

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  // Для формы добавления/редактирования
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    title: { ru: '', en: '' },
    description: { ru: '', en: '' },
    author: '',
    src: '',
    spineColor: '#444',
    route: '',
  });
  const [dialogOpen, setDialogOpen] = useState(false);

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

  // Сохранить книги в localStorage
  const saveBooks = (updatedBooks) => {
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Открыть форму добавления книги
  const handleAddClick = () => {
    setEditingIndex(null);
    setForm({
      title: { ru: '', en: '' },
      description: { ru: '', en: '' },
      author: '',
      src: '',
      spineColor: '#444',
      route: '',
    });
    setDialogOpen(true);
  };

  // Открыть форму редактирования книги
  const handleEditClick = (index) => {
    setEditingIndex(index);
    setForm(books[index]);
    setDialogOpen(true);
  };

  // Удалить книгу
  const handleDeleteClick = (index) => {
    const updated = [...books];
    updated.splice(index, 1);
    saveBooks(updated);
    // Если после удаления страница стала пустой — откатить на предыдущую
    if ((page - 1) * ITEMS_PER_PAGE >= updated.length && page > 1) {
      setPage(page - 1);
    }
  };

  // Обработка изменения формы
  const handleFormChange = (field, langOrValue, valueIfLang) => {
    if (typeof langOrValue === 'string' && valueIfLang !== undefined) {
      // Многоязычное поле
      setForm((f) => ({
        ...f,
        [field]: {
          ...f[field],
          [langOrValue]: valueIfLang,
        },
      }));
    } else {
      // Простое поле
      setForm((f) => ({
        ...f,
        [field]: langOrValue,
      }));
    }
  };

  // Обработка выбора файла картинки
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((f) => ({ ...f, src: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Сохранить новую или отредактированную книгу
  const handleSave = () => {
    if (!form.title.ru.trim()) {
      alert('Название книги на русском обязательно');
      return;
    }

    let updated;
    if (editingIndex !== null) {
      updated = [...books];
      updated[editingIndex] = form;
    } else {
      updated = [...books, form];
    }
    saveBooks(updated);
    setDialogOpen(false);
  };

  const pageCount = Math.ceil(books.length / ITEMS_PER_PAGE);
  const paginatedBooks = books.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ minHeight: '100vh', py: 8, px: 2, backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom color="black">
        Управление Книгами
      </Typography>

      <Button variant="contained" color="primary" onClick={handleAddClick} sx={{ mb: 4 }}>
        Добавить книгу
      </Button>

      <Grid container spacing={4} justifyContent="center">
        {paginatedBooks.map((book, i) => {
          const globalIndex = (page - 1) * ITEMS_PER_PAGE + i;
          return (
            <Grid key={book.id || globalIndex} xs={12} sm={6} md={4}>
              <Box sx={{ position: 'relative', backgroundColor: '#fff', p: 2, borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {book.title?.[currentLang] || book.title?.ru || 'Без названия'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {book.description?.[currentLang] || book.description?.ru || ''}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Автор: {book.author || 'Не указан'}
                </Typography>
                <Box
                  component="img"
                  src={book.src || '/placeholder.png'}
                  alt={book.title?.[currentLang] || 'Book'}
                  sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 1 }}
                />

                <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => handleEditClick(globalIndex)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<Delete />}
                    onClick={() => handleDeleteClick(globalIndex)}
                  >
                    Удалить
                  </Button>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* Пагинация */}
      <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
        <Button variant="outlined" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
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

        <Button variant="outlined" disabled={page === pageCount} onClick={() => setPage((p) => p + 1)}>
          Вперёд
        </Button>
      </Stack>

      {/* Диалог для добавления/редактирования */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingIndex !== null ? 'Редактировать книгу' : 'Добавить книгу'}</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" mt={1}>Название (RU)</Typography>
          <TextField
            fullWidth
            margin="dense"
            value={form.title.ru}
            onChange={(e) => handleFormChange('title', 'ru', e.target.value)}
          />
          <Typography variant="subtitle1" mt={1}>Название (EN)</Typography>
          <TextField
            fullWidth
            margin="dense"
            value={form.title.en}
            onChange={(e) => handleFormChange('title', 'en', e.target.value)}
          />

          <Typography variant="subtitle1" mt={1}>Описание (RU)</Typography>
          <TextField
            fullWidth
            margin="dense"
            multiline
            rows={3}
            value={form.description.ru}
            onChange={(e) => handleFormChange('description', 'ru', e.target.value)}
          />
          <Typography variant="subtitle1" mt={1}>Описание (EN)</Typography>
          <TextField
            fullWidth
            margin="dense"
            multiline
            rows={3}
            value={form.description.en}
            onChange={(e) => handleFormChange('description', 'en', e.target.value)}
          />

          <Typography variant="subtitle1" mt={1}>Автор</Typography>
          <TextField
            fullWidth
            margin="dense"
            value={form.author}
            onChange={(e) => handleFormChange('author', e.target.value)}
          />

          <Typography variant="subtitle1" mt={1}>Обложка книги (выберите файл)</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginTop: 8, marginBottom: 16 }}
          />

          {form.src && (
            <Box
              component="img"
              src={form.src}
              alt="Preview"
              sx={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 1, mb: 2 }}
            />
          )}

          <Typography variant="subtitle1" mt={1}>Цвет корешка книги (spineColor)</Typography>
          <TextField
            fullWidth
            margin="dense"
            type="color"
            value={form.spineColor}
            onChange={(e) => handleFormChange('spineColor', e.target.value)}
          />

          <Typography variant="subtitle1" mt={1}>Route (ссылка для перехода)</Typography>
          <TextField
            fullWidth
            margin="dense"
            value={form.route}
            onChange={(e) => handleFormChange('route', e.target.value)}
            placeholder="/book1"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Отмена</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BooksPage;
