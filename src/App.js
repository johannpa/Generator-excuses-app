import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonGenerateExcuses from './components/ButtonGenerateExcuses';
import { Routes, Route } from "react-router-dom";
import Lost from './components/Lost';
import HttpCode from './components/HttpCode';
import PageNotFound from './components/PageNotFound';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";


function App() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(
      setShowTitle(true)
    , 2000);
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
          <h1>My apologizes</h1>
          <Routes>
            <Route path='/' element={<ButtonGenerateExcuses/>} />
            <Route path='/lost' element={<Lost />}/>
            <Route path='/$http_code/:http_code' element={<HttpCode/>}/>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
