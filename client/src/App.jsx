import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <MultiStepForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
