import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Listing from './pages/listing/Listing'
import About from './pages/about/About'
import Error404 from './pages/error404/Error404'
import './index.scss'

export default function App(){
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="listings/:listingId" element={<Listing />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </Router>
    );
}

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);