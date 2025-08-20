import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  useTheme,
  useMediaQuery,
  Tooltip,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { key: 'home', icon: HomeIcon, path: '/' },
  { key: 'journals', icon: MenuBookIcon, path: '/journals', isDropdown: true }, // Журналы с дропдауном
  { key: 'books', icon: BookIcon, path: '/books' },
  { key: 'services', icon: BuildIcon, path: '/services' },
  { key: 'publishing', icon: WorkIcon, path: '/publishing' },
  { key: 'contact', icon: ContactMailIcon, path: '/contact' },
];

const journalItems = [
  { key: 'journal1', title: 'Наука, новые технологии и инновации Кыргызстана', path: '/journal1' },
  { key: 'journal2', title: 'Журнал "Известия ВУЗов Кыргызстана"', path: '/journal2' },
];

const Navbar = ({ mode, toggleColorMode }) => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'ru');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Для меню журналов
  const [journalAnchorEl, setJournalAnchorEl] = useState(null);
  const journalMenuOpen = Boolean(journalAnchorEl);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleJournalClick = (event) => {
    setJournalAnchorEl(event.currentTarget);
  };

  const handleJournalClose = () => {
    setJournalAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{ backgroundColor: 'rgba(20, 30, 40, 1)', backdropFilter: 'blur(10px)', color: '#eee' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Логотип и заголовок */}
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 2, color: 'inherit', textDecoration: 'none' }}
          >
            <MenuBookIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {t('journal')}
            </Typography>
          </Box>

          {/* Меню для десктопа */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 2 }}>
              {navItems.map(({ key, icon: IconComponent, path, isDropdown }) => {
                if (isDropdown) {
                  return (
                    <Box key={key}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        startIcon={IconComponent ? <IconComponent /> : null}
                        onClick={handleJournalClick}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 300,
                          borderColor: '#ddd',
                          '&:hover': { backgroundColor: 'rgba(221, 235, 34, 1)', color: 'rgba(20, 30, 40, 1)' },
                        }}
                        aria-controls={journalMenuOpen ? 'journals-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={journalMenuOpen ? 'true' : undefined}
                      >
                        {t('journals')}
                      </Button>
                      <Menu
                        id="journals-menu"
                        anchorEl={journalAnchorEl}
                        open={journalMenuOpen}
                        onClose={handleJournalClose}
                        MenuListProps={{ 'aria-labelledby': 'journals-button' }}
                      >
                        {journalItems.map(({ key, title, path }) => (
                          <MenuItem
                            key={key}
                            component={RouterLink}
                            to={path}
                            onClick={handleJournalClose}
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
                      '&:hover': { backgroundColor: 'rgba(221, 235, 34, 1)', color: 'rgba(20, 30, 40, 1)' },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {IconComponent && <IconComponent fontSize="small" aria-hidden="true" />}
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

              {/* Выбор языка */}
              <FormControl variant="standard" sx={{ minWidth: 80 }}>
                <InputLabel sx={{ color: '#eee' }}>Язык</InputLabel>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  label="Lang"
                  sx={{
                    color: '#eee',
                    '&::before, &::after': { borderBottomColor: '#eee' },
                  }}
                >
                  <MenuItem value="kg">KG</MenuItem>
                  <MenuItem value="ru">RU</MenuItem>
                  <MenuItem value="en">EN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Меню для мобильных */}
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
                  sx: { backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, width: 250 },
                }}
              >
                <List>
                  {navItems.map(({ key, icon: IconComponent, path, isDropdown }, index) => {
                    if (isDropdown) {
                      return (
                        <React.Fragment key={key}>
                          <ListItem>
                            <ListItemText primary={t('journals')} />
                          </ListItem>
                          {journalItems.map(({ key: jKey, title, path }) => (
                            <ListItemButton
                              key={jKey}
                              component={RouterLink}
                              to={path}
                              onClick={toggleDrawer(false)}
                              sx={{ pl: 4 }}
                            >
                              <ListItemIcon>
                                <MenuBookIcon />
                              </ListItemIcon>
                              <ListItemText primary={title} />
                            </ListItemButton>
                          ))}
                          <Divider />
                        </React.Fragment>
                      );
                    }

                    return (
                      <React.Fragment key={key}>
                        <ListItem disablePadding>
                          <ListItemButton component={RouterLink} to={path} onClick={toggleDrawer(false)}>
                            <ListItemIcon sx={{ color: theme.palette.secondary.main }}>
                              {IconComponent && <IconComponent aria-hidden="true" />}
                            </ListItemIcon>
                            <ListItemText primary={t(key)} />
                          </ListItemButton>
                        </ListItem>
                        {index < navItems.length - 1 && <Divider />}
                      </React.Fragment>
                    );
                  })}
                </List>

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
      <Toolbar /> {/* Отступ для основного контента */}
    </>
  );
};

export default Navbar;
