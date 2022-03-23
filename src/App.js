import { useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
// import classNames from 'classnames'
import { HelmetProvider } from 'react-helmet-async'
import data from './data.json'

import HomePage from './pages/HomePage'
import DestPage from './pages/DestPage'
import CrewPage from './pages/CrewPage'
import TechPage from './pages/TechPage'

import { AnimatePresence } from 'framer-motion'

import './scss/app.scss'
import './scss/grid.scss'
import logo from './assets/shared/logo.svg'

const App = () => {
  const location = useLocation()
  
  const pages = [
    {
      page: 'home',
      href: '/'
    }, {
      page: 'destination',
      href: '/destination'
    }, {
      page: 'crew',
      href: '/crew'
    }, {
      page: 'technology', 
      href: '/tech'
    }
  ]
  
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

  const linkClass = `
    ff-sans-cond uppercase text-white
    ${isTablet ? 'letter-spacing-3 fs-200' : 'letter-spacing-2 fs-300'}  
  `
  const activeLinkClass = linkClass + ' active'

  const renderNavLinks = pages.map(({page, href}, i) => (
    <li key={page}>
      <NavLink
        className={({ isActive }) => isActive ? activeLinkClass : linkClass}
        to={href}
      >
        <span className={isTablet && !isDesktop ? 'd-none' : ''}>0{i}</span>{page}
      </NavLink>
    </li>
  ))

  return (
    <HelmetProvider>
      <header className='primary-header flex'>
        <div><img className="logo" src={logo} alt="Space Tourism Logo" /></div>

        { isDesktop ?
          <div className="header-line"></div>
        : null}
        <nav>
          <ul 
            id="primary-navigation" 
            className={`primary-navigation underline-indicators flex ${showMenu ? 'menu-active' : ''}`}
          >
            {renderNavLinks}
          </ul>
        </nav>
        { !isTablet ?
          <button
            onClick={onMenuToggle}
            className={`mobile-nav-toggle ${showMenu ? 'mobile-nav-transform' : ''}`}
            aria-controls="primary-navigation"
          >
            <span className='sr-only' aria-expanded={showMenu}>Menu</span>
          </button>
        : null}
      </header>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>      
          <Route index element={<HomePage />} />
          <Route path="/destination" element={<DestPage destinations={data.destinations} />} />
          <Route path="/crew" element={<CrewPage crew={data.crew} />} />
          <Route path="/tech" element={<TechPage tech={data.technology} />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  )
}

export default App