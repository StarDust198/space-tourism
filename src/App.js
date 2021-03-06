import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import cn from 'classnames'
import { AnimatePresence } from 'framer-motion'

import HomePage from './pages/HomePage'
import DestPage from './pages/DestPage'
import CrewPage from './pages/CrewPage'
import TechPage from './pages/TechPage'

import './scss/app.scss'
import './scss/grid.scss'
import logo from './assets/shared/logo.svg'
import * as info from './info'

const App = () => {
  const { data, pages, queries, bgs: {desktop, tablet, mobile}, imgs } = info

  const location = useLocation()

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    setShowMenu(isTablet)
  }

  const isTablet = useMediaQuery({ query: `(${queries.tabQuery})` }, undefined, handleMediaQueryChange)
  const isDeskWidth = useMediaQuery({ query: `(min-width: ${queries.deskWidth})`}, undefined, handleMediaQueryChange)
  const isDesktop = useMediaQuery({ query: `(${queries.deskQuery})` }, undefined, handleMediaQueryChange)

  const [showMenu, setShowMenu] = useState(isTablet)

  const onMenuToggle = () => {
    setShowMenu(showMenu => !showMenu)
  }

  const closeMobileMenu = () => {
    if (!isTablet && !isDesktop) setShowMenu(false)
  }

  const renderNavLinks = pages.map(({page, href}, i) => (
    <li key={page}>
      <NavLink
        className={({ isActive }) => cn(
          'ff-sans-cond', 'uppercase', 'text-white', 'fs-21', 'letter-spacing-2', 
          {
            'letter-spacing-3': isTablet,
            'active': isActive
          }
        )}
        to={href}
        onClick={closeMobileMenu}
      >
        <span className={cn({ 
          'd-none': (isTablet && !isDesktop) || (isDesktop && !isDeskWidth)
        })}>0{i}</span>{page}
      </NavLink>
    </li>
  ))

  const page = pages.findIndex(item => item.href === location.pathname)

  return (
    <HelmetProvider>
      <Helmet>
        {
          !isTablet && !isDesktop && mobile.map((item, i) => (
            <link key={item} rel="preload" href={item} as="image"/>
          ))
        }
        {
          isTablet &&
          tablet.map((item, i) => (
            <link key={item} rel="preload" href={item} as="image"/>
          ))
        }
        { isDesktop &&
          desktop.map((item, i) => (
            <link key={item} rel="preload" href={item} as="image"/>
          ))
        }
        <style>{`
          body {
            background-image: url(${mobile[page]});
          }
          
          @media(${queries.tabQuery}) {
            body {
              background-image: url(${tablet[page]});
            }
          }

          @media(${queries.deskQuery}) {
            body {
              background-image: url(${desktop[page]});
            }
          }          
        `}</style>
      </Helmet>
      <header className='primary-header flex'>
        <Link to="/"><img className="logo" src={logo} alt="Space Tourism Logo" /></Link>

        { isDesktop &&
          <div className="header-line"></div>
        }
        <nav>
          <ul 
            id="primary-navigation" 
            className={cn('underline-indicators', 'flex', {'menu-active': showMenu})}
          >
            {renderNavLinks}
          </ul>
        </nav>
        { !isTablet &&
          <button
            onClick={onMenuToggle}
            className={cn('mobile-nav-toggle', {'mobile-nav-transform': showMenu})}
            aria-controls="primary-navigation"
          >
            <span className='sr-only' aria-expanded={showMenu}>Menu</span>
          </button>
        }
      </header>
      <AnimatePresence exitBeforeEnter>        
        <Routes key={location.pathname} location={location}>      
          <Route index element={<HomePage />} />
          <Route path="/destination" element={<DestPage images={imgs.dest} destinations={data.destinations} />} />
          <Route path="/crew" element={<CrewPage images={imgs.crew} crew={data.crew} />} />
          <Route path="/tech" element={<TechPage images={imgs.tech} tech={data.technology} />} />
        </Routes>        
      </AnimatePresence>
      {!isTablet && !isDesktop && showMenu && 
        <div
          className="modal"
          onClick={closeMobileMenu}
        >
        </div>
      }
    </HelmetProvider>
  )
}

export default App