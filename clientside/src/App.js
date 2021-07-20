import './App.css';
import Questions from './components/questions';
import DropDownDifficulty from './components/dropDownDifficulty';
import Score from './score';
import {useState, createContext} from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
function App() {
  
  const getdData = (values)=>{
    sessionStorage.setItem('category',`${values[0]}`)
    sessionStorage.setItem('difficulty', `${values[1]}`)
  }
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <DropDownDifficulty sendData={getdData}/>
        </Route>
          <Route exact path = '/quiz'>
            <Questions/>
          </Route>
          <Route exact path = '/score'>
            <Score/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
