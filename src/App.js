import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MapPage from './MapPage';
import './App.css';
import ReportPage from './ReportPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/about" element={<AboutPage />} /> 
      </Routes>
    </>
  );
}

export default App;
