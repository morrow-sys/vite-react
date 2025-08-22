// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Authors from './pages/authors/Authors';
// import News from './components/News';
// import BooksPage from './pages/Books';
// import EditorialBoard from './pages/EditorialBoard';
// import PublishingSlider from './components/PublishingSlider';
// import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import Journal1 from './pages/Journal1';
// import Journal2 from './pages/Journal2';
// import './i18n';

// import InfoPage from './pages/Authors/InfoPage';
// import RequirementsPage from './pages/Authors/RequirementsPage';
// import ReviewPage from './pages/Authors/ReviewPage';
// import ApplicationPage from './pages/Authors/ApplicationPage';

// function Home() {
//   return (
//     <>
//       <Hero />
//       <News />
//       <PublishingSlider />
//     </>
//   );
// }

// function App() {
//   useEffect(() => {
//     import('aos').then(({ default: AOS }) => {
//       AOS.init({ duration: 800, once: true });
//     });
//   }, []);

//   return (
//     <Router>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />

//           <Route path="/authors" element={<Authors />} />
//               <Route path="/authors/info" element={<InfoPage />} />
//               <Route path="/authors/requirements" element={<RequirementsPage />} />
//               <Route path="/authors/review" element={<ReviewPage />} />
//               <Route path="/authors/application" element={<ApplicationPage />} />

//           <Route path="/books" element={<BooksPage />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/editorialboard" element={<EditorialBoard />} />
//           <Route path="/publishing" element={<PublishingSlider />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/journal1" element={<Journal1 />} />
//           <Route path="/journal2" element={<Journal2 />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authors from './pages/authors/Authors';
import News from './components/News';
import BooksPage from './pages/Books';
import EditorialBoard from './pages/EditorialBoard';
import PublishingSlider from './components/PublishingSlider';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Journal1 from './pages/Journal1';
import Journal2 from './pages/Journal2';
import './i18n';

import InfoPage from './pages/Authors/InfoPage';
import RequirementsPage from './pages/Authors/RequirementsPage';
import ReviewPage from './pages/Authors/ReviewPage';
import ApplicationPage from './pages/Authors/ApplicationPage';

// Импорт админки
import AdminLayout from './admin/AdminLayout';
import PublishersPage from './admin/pages/PublishersPage';
import JournalsPage from './admin/pages/JournalsPage';
import BooksAdminPage from './admin/pages/BooksPage';
import EditorialPage from './admin/pages/EditorialPage';
import AuthorsPage from './admin/pages/AuthorsPage';
import NewsPage from './admin/pages/NewPage';

function Home() {
  return (
    <>
      <Hero />
      <News />
      <PublishingSlider />
    </>
  );
}

function App() {
  useEffect(() => {
    import('aos').then(({ default: AOS }) => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <Router>
      {/* Главный Navbar и Footer видны только в пользовательской части */}
      <Routes>
        {/* Админка — без Navbar и Footer */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AuthorsPage />} />
          <Route path="authors" element={<AuthorsPage/>} />
          <Route path="news" element={<NewsPage />} />
          <Route path="publishers" element={<PublishersPage />} />
          <Route path="journals" element={<JournalsPage />} />
          <Route path="books" element={<BooksAdminPage />} />
          <Route path="editorials" element={<EditorialPage />}/>
        </Route>

        {/* Пользовательская часть */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/authors" element={<Authors />} />
                  <Route path="/authors/info" element={<InfoPage />} />
                  <Route path="/authors/requirements" element={<RequirementsPage />} />
                  <Route path="/authors/review" element={<ReviewPage />} />
                  <Route path="/authors/application" element={<ApplicationPage />} />
                  <Route path="/books" element={<BooksPage />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/editorialboard" element={<EditorialBoard />} />
                  <Route path="/publishing" element={<PublishingSlider />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/journal1" element={<Journal1 />} />
                  <Route path="/journal2" element={<Journal2 />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
