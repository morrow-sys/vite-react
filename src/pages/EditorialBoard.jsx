// src/components/EditorialBoardTable.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const MAX_LENGTH = 200; // Максимум символов для показа описания без раскрытия

const EditorialBoardTable = () => {
  const [members, setMembers] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('editorialMembers');
    if (stored) {
      setMembers(JSON.parse(stored));
    }
  }, []);

  const toggleExpand = (idx) => {
    setExpandedRows((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
      >
        Редакционная коллегия
      </Typography>

      {members.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
          Пока нет участников.
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Имя</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Должность</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Описание</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map(({ name, title, details }, idx) => {
                const isExpanded = expandedRows[idx];
                const shouldTruncate = details.length > MAX_LENGTH;

                return (
                  <TableRow key={idx} hover>
                    <TableCell sx={{ verticalAlign: 'top', fontWeight: 'bold' }}>{name}</TableCell>
                    <TableCell sx={{ verticalAlign: 'top', fontStyle: 'italic' }}>{title}</TableCell>
                    <TableCell sx={{ whiteSpace: 'pre-line', maxWidth: 400 }}>
                      {shouldTruncate && !isExpanded
                        ? details.slice(0, MAX_LENGTH) + '...'
                        : details}
                      {shouldTruncate && (
                        <Button
                          size="small"
                          onClick={() => toggleExpand(idx)}
                          sx={{ ml: 1, textTransform: 'none' }}
                        >
                          {isExpanded ? 'Свернуть' : 'Далее'}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default EditorialBoardTable;
