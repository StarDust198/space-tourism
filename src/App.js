import { Outlet } from 'react-router-dom'

import './scss/app.scss'
import logo from './assets/shared/logo.svg'

function App() {
  return (
    <>
      <header className='primary-header flex'>
        <div><img className="logo" src={logo} alt="Space Tourism Logo" /></div>
        <button className='mobile-nav-toggle' aria-controls="primary-navigation"><span className='sr-only' aria-expanded="false">Menu</span></button>
        <nav>
          <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
            <li className="active"><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>00</span> Home</a></li>
            <li><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>01</span> Destination</a></li>
            <li><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>02</span> Crew</a></li>
            <li><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>04</span> Technology</a></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App;
