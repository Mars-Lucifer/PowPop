//Sistem
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//My Page
import Main from './base/main';
import Recipes from './base/recipes';
import Dishes from './base/dishes';
//CSS
import './index.css';
import "./base/css/component.css"
import "./base/css/font.css"
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<div>
    <div className='container'>
        <Router>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='/dishes/:id' element={<Dishes/>}/>
            </Routes>
        </Router>
    </div>
    <Analytics />
</div>)