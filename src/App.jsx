import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import BooksPage from './pages/BooksPage.jsx'
import BookDetail from './components/BookDetail.jsx'
import CharacterDetail from './pages/CharacterDetail.jsx'
import GenesisPopup from "./pages/Popup.jsx";
import Preloader from './components/Preloader.jsx'
import CharactersPage from './pages/Characters.jsx'
import UnderConstructionPopup from './pages/Construction.jsx'


function App() {
  return (
    <div>
      <Preloader>
        <GenesisPopup />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<BooksPage />} />
          <Route path="/livros/:id" element={<BookDetail />} />
          <Route path="/personagens/:id" element={<CharacterDetail />} />
          <Route path="/personagens" element={<CharactersPage />} />
          <Route path="/sobre" element={<UnderConstructionPopup />} />

        </Routes>
      </Preloader>
    </div>
  )
}

export default App