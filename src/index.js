import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Housing from './pages/housing/Housing'
import About from './pages/about/About'
import Error404 from './pages/error404/Error404'
import './index.scss'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={< Home/>} />
                    <Route path="housing" element={< Housing/>} />
                    <Route path="about" element={< About/>} />
                    <Route path="*" element={< Error404/>} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);