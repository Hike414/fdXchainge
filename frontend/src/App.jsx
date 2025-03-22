import React from 'react';
import { BarChart3} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400">
       <Navbar/>
      {/* Hero Section */}
       <Hero/>
    </div>
  );
}

export default App;