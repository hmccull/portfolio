import './App.css';
import React, { Suspense, useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import SocialNavBar from './components/SocialNavBar';
import LoadingMain from './components/LoadingMain';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  // if (loading) return <LoadingMain />;

  return (
    <div className="App">
      <Suspense fallback={<LoadingMain />}>
        <div className="App-header">
          <NavBar />
        </div>
        <div className="App-main">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Resume />
        </div>
        <div>
          <SocialNavBar />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
