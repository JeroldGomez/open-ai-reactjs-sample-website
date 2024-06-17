import React from 'react';

import { Blog, Footer, Possibility, Header, Features, WhatGPT3 } from './container'
import { Article, Brand, Navbar, CTA } from './components'
import './App.css';

const App = () => {
  return <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog/>
    <Footer />
  </div>;
};

export default App;

