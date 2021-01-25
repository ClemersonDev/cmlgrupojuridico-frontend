import React from 'react';
import './global.css';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsbtn from './components/WpButton/WpButton';
import Topbtn from './components/TopoButton/TopoButton';
import Sidebar from './components/Menu/sidebar';
import './components/Menu/styles.css';

function App() {
  return (
    <div>

      <div id="App">

        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div>
          <Header />
          <Routes />
          <Whatsbtn />
          <Topbtn />
          <Footer />
        </div>
      </div>          
    </div>
    
  );
}

export default App;
