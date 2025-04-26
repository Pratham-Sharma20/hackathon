import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { FileUpload } from './components/FileUpload';
// import { Header } from './components/Header';
// import { Brain } from 'lucide-react';
import HomePage from "./HomePage";
import ResumePage from './ResumePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyze" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;