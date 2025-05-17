import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SyntaxLab from 'assets/images/SyntaxLab.png';

import Dashboard from 'pages/Dashboard';
import Trial from 'pages/Trial';
import NotFound from 'pages/NotFound';

function App() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    fetch('/data/labs.json')
      .then(response => response.json())
      .then(data => setLabs(data));
  }, []);

  return (
    <div
      className="w-full h-full relative bg-background flex flex-col"
    >
      <nav className="border-background-light border-b-2 p-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={SyntaxLab} alt="SyntaxLab Logo" className='w-12' />
          <h1 className="text-2xl font-bold text-primary">SyntaxLab</h1>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard labs={labs} />} />
        <Route path="/trial/:labId/:trialId" element={<Trial labs={labs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;
