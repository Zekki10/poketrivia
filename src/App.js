import { Suspense } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu/Menu';
import { PokeProvider } from './context/pokeContext';
import { Survival } from './pages/Survival/Survival';
import { ClassicGame } from './pages/ClassicGame/ClassicGame';
import { HighScores } from './pages/HighScores/HighScores';
import { OptionsMenu } from './pages/OptionsMenu/OptionsMenu';

function App() {

  return (
    <Suspense fallback={null}>
      <PokeProvider>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Menu />}/>
            <Route path='Survival' element={<Survival />}/>
            <Route path='ClassicGame' element={<ClassicGame />}/>
            <Route path='HighScores' element={<HighScores />} />
            <Route path='Options' element={<OptionsMenu />} />
          </Routes>
        </BrowserRouter>
      </PokeProvider>
    </Suspense>
  );
}

export default App;
