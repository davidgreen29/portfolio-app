import React from 'react';
import NavBar from './components/Navbar/NavBar.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'



import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
