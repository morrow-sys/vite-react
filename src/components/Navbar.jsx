import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem,
  ListItemButton, ListItemText, Divider, Box, useTheme, useMediaQuery,
  Tooltip, Menu, MenuItem, Select, FormControl, InputLabel, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';;

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'authors', path: '/authors', isAuthorsDropdown: true },
  { key: 'journals', path: '/journal1', isDropdown: true },
  { key: 'editorialboard', path: '/editorialboard' },
  { key: 'publishing', path: '/publishing' },
  { key: 'books', path: '/books' },
  { key: 'contact', path: '/contact' },
];

const journalItems = [
  { key: 'journal1', title: 'Наука, новые технологии и инновации Кыргызстана', path: '/journal1' },
  { key: 'journal2', title: 'Журнал "Известия ВУЗов Кыргызстана"', path: '/journal2' },
];

const authorItems = [
  { key: 'info', title: 'Информация', path: '/authors/info' },
  { key: 'requirements', title: 'Требования', path: '/authors/requirements' },
  { key: 'review', title: 'Рецензирование', path: '/authors/review' },
  { key: 'application', title: 'Заявка', path: '/authors/application' },
];

const Navbar = ({ mode, toggleColorMode }) => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'ru');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [journalAnchorEl, setJournalAnchorEl] = useState(null);
  const [authorAnchorEl, setAuthorAnchorEl] = useState(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: 'rgba(20, 30, 40, 1)',
          backdropFilter: 'blur(10px)',
          color: '#eee',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Логотип/название сайта */}
          
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              pl: 2,
              color: 'inherit',
              textDecoration: 'none',
            }}
          > <MenuBookIcon sx={{ fontSize: 32, mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {t('journal')}
            </Typography>
          </Box>

          {/* Меню для десктопа */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, pr: 2 }}>
              {navItems.map(({ key, path, isDropdown, isAuthorsDropdown }) => {
                if (isDropdown) {
                  return (
                    <Box
                      key={key}
                      onMouseEnter={(e) => setJournalAnchorEl(e.currentTarget)}
                      onMouseLeave={() => setJournalAnchorEl(null)}
                      sx={{ position: 'relative' }}
                    >
                      <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => navigate(path)}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 300,
                          borderColor: '#ddd',
                          '&:hover': {
                            backgroundColor: 'rgba(221, 235, 34, 1)',
                            color: 'rgba(20, 30, 40, 1)',
                          },
                        }}
                      >
                        {t('journals')}
                      </Button>
                      <Menu
                        anchorEl={journalAnchorEl}
                        open={Boolean(journalAnchorEl)}
                        onClose={() => setJournalAnchorEl(null)}
                        MenuListProps={{
                          onMouseEnter: () => setJournalAnchorEl(journalAnchorEl),
                          onMouseLeave: () => setJournalAnchorEl(null),
                        }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                      >
                        {journalItems.map(({ key, title, path }) => (
                          <MenuItem
                            key={key}
                            onClick={() => {
                              setJournalAnchorEl(null);
                              navigate(path);
                            }}
                            sx={{ cursor: 'pointer' }}
                          >
                            {title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                if (isAuthorsDropdown) {
                  return (
                    <Box
                      key={key}
                      sx={{ position: 'relative', display: 'inline-block' }}
                      onMouseEnter={(e) => setAuthorAnchorEl(e.currentTarget)}
                      onMouseLeave={() => setAuthorAnchorEl(null)}
                    >
                      <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => navigate(path)}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 300,
                          borderColor: '#ddd',
                          '&:hover': {
                            backgroundColor: 'rgba(221, 235, 34, 1)',
                            color: 'rgba(20, 30, 40, 1)',
                          },
                        }}
                      >
                        Авторам
                      </Button>

                      <Menu
                        anchorEl={authorAnchorEl}
                        open={Boolean(authorAnchorEl)}
                        onClose={() => setAuthorAnchorEl(null)}
                        MenuListProps={{
                          onMouseEnter: () => setAuthorAnchorEl(authorAnchorEl),
                          onMouseLeave: () => setAuthorAnchorEl(null),
                        }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        disableAutoFocusItem
                      >
                        {authorItems.map(({ key, title, path }) => (
                          <MenuItem
                            key={key}
                            onClick={() => {
                              setAuthorAnchorEl(null);
                              navigate(path);
                            }}
                            sx={{ cursor: 'pointer' }}
                          >
                            {title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Typography
                    key={key}
                    component={RouterLink}
                    to={path}
                    sx={{
                      fontWeight: 300,
                      color: 'inherit',
                      textDecoration: 'none',
                      py: 1,
                      px: 2,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(221, 235, 34, 1)',
                        color: 'rgba(20, 30, 40, 1)',
                      },
                    }}
                  >
                    {t(key)}
                  </Typography>
                );
              })}

              {/* Переключатель темы */}
              <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                <IconButton color="inherit" onClick={toggleColorMode}>
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>

              {/* Селектор языка */}
              <FormControl variant="standard" sx={{ minWidth: 80 }}>
                <InputLabel sx={{ color: '#eee' }}>Язык</InputLabel>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  label="Lang"
                  sx={{ color: '#eee', '&::before, &::after': { borderBottomColor: '#eee' } }}
                >
                  <MenuItem value="kg">KG</MenuItem>
                  <MenuItem value="ru">RU</MenuItem>
                  <MenuItem value="en">EN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Мобильное меню */}
          {isMobile && (
            <>
              <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                <IconButton color="inherit" onClick={toggleColorMode} sx={{ mr: 1 }}>
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>

              <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ pr: 2 }}>
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    width: 250,
                  },
                }}
              >
                <List>
                  {/* Секция Авторам */}
                  <ListItem>
                    <ListItemText primary="Авторам" />
                  </ListItem>
                  {authorItems.map(({ key, title, path }) => (
                    <ListItemButton
                      key={key}
                      component={RouterLink}
                      to={path}
                      onClick={toggleDrawer(false)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={title} />
                    </ListItemButton>
                  ))}
                  <Divider />

                  {/* Секция Журналы */}
                  <ListItem>
                    <ListItemText primary={t('journals')} />
                  </ListItem>
                  {journalItems.map(({ key, title, path }) => (
                    <ListItemButton
                      key={key}
                      component={RouterLink}
                      to={path}
                      onClick={toggleDrawer(false)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={title} />
                    </ListItemButton>
                  ))}
                  <Divider />

                  {/* Остальные пункты меню */}
                  {navItems
                    .filter(i => !i.isDropdown && !i.isAuthorsDropdown)
                    .map(({ key, path }, index, arr) => (
                      <React.Fragment key={key}>
                        <ListItem disablePadding>
                          <ListItemButton component={RouterLink} to={path} onClick={toggleDrawer(false)}>
                            <ListItemText primary={t(key)} />
                          </ListItemButton>
                        </ListItem>
                        {index < arr.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                </List>

                {/* Селектор языка в Drawer */}
                <Box sx={{ px: 2, mt: 2 }}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>Lang</InputLabel>
                    <Select value={language} onChange={handleLanguageChange}>
                      <MenuItem value="kg">KG</MenuItem>
                      <MenuItem value="ru">RU</MenuItem>
                      <MenuItem value="en">EN</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Для отступа ниже AppBar */}
    </>
  );
};

export default Navbar;
