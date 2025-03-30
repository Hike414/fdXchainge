import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Signup from './pages/SignUp';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import CreateFD from './pages/CreateFD';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-fd" element={<CreateFD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;