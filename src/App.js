import React, { Component } from 'react';
import '/home/ritik/my_p/src/index.css';
import './App.css';
import  CenteredTabs from './components/main'
import About from './components/About'
import {BrowserRouter,Route} from 'react-router-dom'
import Work from './components/work'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
   
      <div className="App button">
        
           <CenteredTabs />
          <Route path = '/About' component = {About}/>
          <Route path = '/work' component = {Work}/>
        
          </div>
    
          </BrowserRouter>
    );
  }
}

export default App;
