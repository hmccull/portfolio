import './App.css';
import React, { Suspense, useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Email from './components/Email';
import SocialNavBar from './components/SocialNavBar';
import LoadingMain from './components/LoadingMain';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  if (loading) return <LoadingMain />;

  return (
    <div className='App'>
      <Suspense fallback={<LoadingMain />}>
        <div className='App-header'>
          <NavBar />
        </div>
        <div className='App-main'>
          <Home />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Email />
        </div>
        <div>
          <SocialNavBar />
        </div>
        <div>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
