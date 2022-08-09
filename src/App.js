
import './App.css';
import { browserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu/Menu';
import { NavBar } from './components/NavBar/NavBar';
import { TriviaOptions } from './components/TriviaOptions/TriviaOptions';
import { PokeProvider } from './context/pokeContext';
import { Survival } from './pages/Survival/Survival';
import { ClassicGame } from './pages/ClassicGame/ClassicGame';

function App() {

  
  return (
    <PokeProvider>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='Survival' element={<Survival />}/>
          <Route path='ClassicGame' element={<ClassicGame />}/>
        </Routes>
      </BrowserRouter>
    </PokeProvider>
  );
}

export default App;
