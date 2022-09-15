import React, {useEffect} from 'react';
import './App.css';
import { NavLink, Route, Routes, useSearchParams} from "react-router-dom";


const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get('name'))
    console.log(Object.fromEntries(searchParams))

    useEffect(()=> {
        console.log('research...')
    }, [searchParams])

    return (
        <div>
            profile
            <button
                onClick={() => {
                    setSearchParams({age: '21'})
                }}
            >
                add age
            </button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/'} element={<Profile/>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;
