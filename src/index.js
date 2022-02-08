import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './scss/index.scss'

import App from './App'
import HomePage from './pages/HomePage'
import DestPage from './pages/DestPage'
import CrewPage from './pages/CrewPage'
import TechPage from './pages/TechPage'
import Design from './pages/Design'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>      
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<DestPage />} />
          <Route path="crew" element={<CrewPage />} />
          <Route path="tech" element={<TechPage />} />
        </Route>
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
