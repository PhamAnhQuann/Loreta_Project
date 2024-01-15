import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../Menu/MenuRoute/index';
import route from './route';
function index() {
    return (
        <>
            <Router>
                <Menu />
                <Routes>
                    {
                        route.map((route) => (
                            <Route key={route.path} path={route.path} element={<route.component />} />
                        ))
                    }
                </Routes>
            </Router>
        </>
    )
}

export default index