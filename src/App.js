
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu/Menu';
import { PokeProvider } from './context/pokeContext';
import { Survival } from './pages/Survival/Survival';
import { ClassicGame } from './pages/ClassicGame/ClassicGame';
import { HighScores } from './pages/HighScores/HighScores';

function App() {

  return (
    <PokeProvider>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='Survival' element={<Survival />}/>
          <Route path='ClassicGame' element={<ClassicGame />}/>
          <Route path='HighScores' element={<HighScores />} />
        </Routes>
      </BrowserRouter>
    </PokeProvider>
  );
}

export default App;
