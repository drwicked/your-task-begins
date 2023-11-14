import React from 'react';
import HomePage from './components/Home/HomePage';
import './App.css'

const App: React.FC = () => {
  return (
    <div id="App" className="flex items-center justify-center h-screen">
      <HomePage />
    </div>
  );
};

export default App;
