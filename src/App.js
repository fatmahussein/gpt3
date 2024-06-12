import React from 'react';
import { Footer,Header,whatGPT3,Blog ,Possibility,Features} from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
      <Brand />
      <whatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
