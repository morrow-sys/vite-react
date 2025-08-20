// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import News from './components/News';
// import ArchivePage from './pages/ArchivePage';
// import PublishingSlider from './components/PublishingSlider';
// import Footer from './components/Footer';
// import Contact from './pages/Contact'; // твой компонент с контактами
// import './i18n';



// function Home() {
//   // Можно собрать главную страницу из нескольких компонентов
//   return (
//     <>
//       <Hero />
//       <News />
//       <ArchivePage />
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
//           {/* Если понадобится, можно вынести остальные страницы */}
//           <Route path="/about" element={<ArchivePage />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/publishing" element={<PublishingSlider />} />
//           <Route path="/contact" element={<Contact />} />
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
import News from './components/News';
import BooksPage from './pages/Books';
import PublishingSlider from './components/PublishingSlider';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Journal1 from './pages/Journal1';
import Journal2 from './pages/Journal2';
import './i18n';


function Home() {
  return (
    <>
      <Hero />
      <News />
      <BooksPage/>
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
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage/>} />
          <Route path="/news" element={<News />} />
          <Route path="/publishing" element={<PublishingSlider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal1" element={<Journal1 />} />
          <Route path="/journal2" element={<Journal2 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
