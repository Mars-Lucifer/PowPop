//Sistem
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//My Page
import Main from './base/main';
import Recipes from './base/recipes';
//CSS
import './index.css';
import "./base/css/component.css"
import "./base/css/font.css"
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<div>
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
    </Router>
    <Analytics />
</div>)