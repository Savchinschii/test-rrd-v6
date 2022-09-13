import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>
      <Routes>
        <Route path={'/'} element={<div>main</div>}></Route>
        <Route path={'/login'} element={<div>login</div>}></Route>
        <Route path={'/profile'} element={<div>profile</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
