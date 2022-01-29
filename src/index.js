import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './index.scss';

import App from './App';
import StartPage from './pages/StartPage';
import Design from './pages/Design'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>      
        <Route path="/" element={<App />}>
          <Route index element={<StartPage />} />
        </Route>
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
