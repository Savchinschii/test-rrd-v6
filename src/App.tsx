import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>
            <Routes>
                <Route path={'/*'} element={<div>404</div>}></Route>
                <Route path={'/'} element={<div>main</div>}></Route>
                <Route path={'/login'} element={<div>login</div>}></Route>
                <Route path={'/profile/*'} element={
                    <div>
                        profile
                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>}></Route>
                        </Routes>
                    </div>
                }></Route>

            </Routes>
        </div>
    );
}

export default App;
