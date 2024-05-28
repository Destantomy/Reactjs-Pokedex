import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbarr from './components/Navbarr';
import PokemonPage from './pages/PokemonPage';

function App() {
  useEffect(() => {
    document.title = 'Pokédex';
  })

  return (
    <Router>
      <div className="app">
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<PokemonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
