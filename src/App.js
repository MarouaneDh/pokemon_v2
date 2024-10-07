import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import OneGenPage from './Home/OneGenPage';
import OnePokemonPage from './Home/OnePokemonPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gen/:first/:last" element={<OneGenPage />} />
      <Route path="/pokemon/:id" element={<OnePokemonPage />} />
    </Routes>
  );
}

export default App;
