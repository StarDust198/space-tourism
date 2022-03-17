import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  // Routes,
  // Route
} from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'

// import data from './data.json'
import './scss/index.scss'

import App from './App'
// import HomePage from './pages/HomePage'
// import DestPage from './pages/DestPage'
// import CrewPage from './pages/CrewPage'
// import TechPage from './pages/TechPage'
// import Design from './pages/Design'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
