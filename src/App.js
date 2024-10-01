import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import OneGenPage from './Home/OneGenPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gen/:first/:last" element={<OneGenPage />} />
    </Routes>
  );
}

export default App;
