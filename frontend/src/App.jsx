import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Signup from './pages/SignUp';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import CreateFD from './pages/CreateFD';
import Marketplace from './pages/Marketplace';
import BuyToken from './pages/BuyToken';
import bgImage from './assets/BackgroundImage.png';
import Fractionalise  from './pages/Fractionalise';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
      }}>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Hero />} />
          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />
          {/* Login Route */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-fd" element={<CreateFD />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/buytoken" element={<BuyToken />} />
          <Route path="/fractionalise" element={<Fractionalise/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;