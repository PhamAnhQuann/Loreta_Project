import React, { useState } from 'react';
import Menu from './Menu/MenuRoute/index';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Porsche911 from './Porsche911/porsche911';
import route from './Route/route';
import Paramera from './PorscheParamera/paramera';
function App() {

    return (
        <div className='content'>
            <Router>
                <div>
                    <Menu />
                    <Routes>
                        <Route path='/' element={<Porsche911 />} />
                        {
                            route.map((item) => (
                                <Route path={item.path} element={<item.component />} />
                            ))
                        }
                    </Routes>
                </div>
            </Router >
        </div >
    );
}

export default App;
