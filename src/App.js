import HomePage from './screens/HomePage';
import AboutUsPage from './screens/AboutUsPage';
import NetworkPage from './screens/NetworkPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/network" element={<NetworkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
