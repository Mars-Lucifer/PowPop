import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Main from './base/main';
import { Analytics } from '@vercel/analytics/react';
//CSS
import './index.css';
import "./base/css/component.css"
import "./base/css/font.css"
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<div>
    <Main />
    <Analytics />
</div>)