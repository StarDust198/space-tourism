import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
// import classNames from 'classnames'
import { HelmetProvider } from 'react-helmet-async'

import './scss/app.scss'
import logo from './assets/shared/logo.svg'

function App() {
  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    setShowMenu(isTablet)
  }

  const isTablet = useMediaQuery({ query: '(min-width: 35rem)' }, undefined,  handleMediaQueryChange)
  const isDesktop = useMediaQuery({ query: '(min-width: 55rem)' }, undefined,  handleMediaQueryChange)

  const [showMenu, setShowMenu] = useState(isTablet)

  const onMenuToggle = () => {
    setShowMenu(showMenu => !showMenu)
  }

  console.log('render');

  return (
    <HelmetProvider>
      <header className='primary-header flex'>
        <div><img className="logo" src={logo} alt="Space Tourism Logo" /></div>
        { !isTablet ?
          <button
            onClick={onMenuToggle}
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
          >
            <span className='sr-only' aria-expanded="false">Menu</span>
          </button>
        : null}
        <nav>
          <ul 
            id="primary-navigation" 
            className={`primary-navigation underline-indicators flex ${showMenu ? 'menuActive' : ''}`}
          >
            <li className="active">
              <a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/">
                <span className={isTablet && !isDesktop ? 'd-none' : ''}>00</span> Home
              </a>
            </li>
            <li>
              <a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/">
                <span className={isTablet && !isDesktop ? 'd-none' : ''}>01</span> Destination
              </a>
            </li>
            <li>
              <a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/">
                <span className={isTablet && !isDesktop ? 'd-none' : ''}>02</span> Crew
              </a>
            </li>
            <li>
              <a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/">
                <span className={isTablet && !isDesktop ? 'd-none' : ''}>04</span> Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </HelmetProvider>
  )
}

export default App;
