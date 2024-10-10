import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home'
import OneGenPage from './Pages/OneGenPage/OneGenPage';
import OnePokemonPage from './Pages/OnePokemonPage/OnePokemonPage'

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
