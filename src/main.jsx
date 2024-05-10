import React from 'react'
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
