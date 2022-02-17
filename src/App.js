import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
// import classNames from 'classnames'
import { HelmetProvider } from 'react-helmet-async'

import './scss/app.scss'
import './scss/grid.scss'
import logo from './assets/shared/logo.svg'

function App() {
  const { pathname } = useLocation()
  
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

  const currentPage = pages.findIndex(item => item.href === pathname)
  const [ activePage, setActivePage ] = useState(currentPage)

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

  const renderNavLinks = pages.map(({page, href}, i) => (
    <li
      className={i === activePage ? 'active' : ''}
      onClick={() => setActivePage(i)}
      key={i}
    >
      <Link 
        className={`ff-sans-cond ${isTablet ? 'letter-spacing-3 fs-200' : 'letter-spacing-2 fs-300'} uppercase text-white`}
        to={href}
      >
        <span className={isTablet && !isDesktop ? 'd-none' : ''}>0{i}</span>{page}
      </Link>
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
      <Outlet />
    </HelmetProvider>
  )
}

export default App;
