// src/admin/pages/EditorialPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EditorialPage = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('editorialMembers');
    if (stored) {
      setMembers(JSON.parse(stored));
    }
  }, []);

  const handleAddMember = () => {
    if (!name.trim() || !title.trim() || !details.trim()) return;

    const newMember = { name, title, details };
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);
    localStorage.setItem('editorialMembers', JSON.stringify(updatedMembers));

    setName('');
    setTitle('');
    setDetails('');
  };

  const handleDeleteMember = (index) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
    localStorage.setItem('editorialMembers', JSON.stringify(updated));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '80vh',
        p: 1,
        gap: 4,
        bgcolor: '#f5f5f5',
      }}
    >
      {/* Левая колонка — форма добавления */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: 240, // <-- уменьшенная ширина
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Добавить участника
        </Typography>
        <TextField
          label="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
          fullWidth
        />
        <TextField
          label="Должность"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="small"
          fullWidth
        />
        <TextField
          label="Детали"
          multiline
          minRows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          size="small"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleAddMember}
          sx={{
            mt: 'auto',
            backgroundColor: '#141e28',
            color: '#fff',
            '&:hover': { backgroundColor: '#0f1720' },
            py: 1.2,
            fontWeight: 'bold',
          }}
          disabled={!name.trim() || !title.trim() || !details.trim()}
        >
          Добавить участника
        </Button>
      </Paper>

      {/* Правая колонка — список участников */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 4,
          p: 3,
          overflowY: 'auto',
          maxHeight: '100%',
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Текущие участники
        </Typography>

        {members.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" mt={4}>
            Пока нет участников.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {members.map(({ name, title, details }, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  position: 'relative',
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => handleDeleteMember(idx)}
                  sx={{ position: 'absolute', top: 8, right: 8, color: '#999' }}
                  aria-label="Удалить участника"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>

                <Typography variant="subtitle1" fontWeight="600" noWrap>
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: 'italic', color: '#666' }}
                  noWrap
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    fontSize: '0.9rem',
                  }}
                >
                  {details}
                </Typography>
              </Paper>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EditorialPage;
