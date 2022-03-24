import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/crew/background-crew-mobile.jpg'
import bgTablet from '../assets/crew/background-crew-tablet.jpg'
import bgDesktop from '../assets/crew/background-crew-desktop.jpg'

const transitionStyle = {
  duration: 1,
  type: "tween"
}

const tabAnimation = {
  enter: direction =>  ({
    x: direction < 0 ? 300 : direction > 0 ? -300 : 0,
    opacity: 0,
    transition: transitionStyle
  }),
  exit: direction => ({ 
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    transition: transitionStyle
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: transitionStyle
  }
}

export default function CrewPage ({ crew }) {
  const [[tab, direction], setTab] = useState([0, 0])

  const isTablet = useMediaQuery({ query: '(min-width: 35em)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 55em)' })

  const changeTab = (n) => {
    if (n === tab) return
    setTab(arr => [n, arr[0] - n])
  }

  const nextTab = () => {
    changeTab(tab === 3 ? 0 : tab + 1)
  }

  const prevTab = () => {
    changeTab(tab === 0 ? 3 : tab - 1)
  }
 
  useEffect(() => {
    const onKeypress = e => {
      if (e.code === 'ArrowLeft') {
        prevTab()
      } else if (e.code === 'ArrowRight') {
        nextTab()
      }
    }

    document.addEventListener('keydown', onKeypress)

    return () => {
      document.removeEventListener('keydown', onKeypress)
    }
  }, [tab])

  const buttons = crew.map(({role}, i) => (
    <button 
      role="tab"
      aria-selected={i === tab}
      onClick={() => changeTab(i)}
      key={role}
    >
      <span className="sr-only">{role}</span>
    </button>
  ))

  const onPan = (event, info) => {
    if (info.offset.x < -100) nextTab()
    if (info.offset.x > 100) prevTab()
  }

  const crewImage = crew.map(({ name, images: { png } }, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={name}
      className='crew-image'
      custom={direction}
      onPanEnd={onPan}
      style={{touchAction:'none', userSelect: 'none'}}
    >
      <img src={png} alt={name} draggable="false" />
    </motion.div>
  ))

  const crewBlock = crew.map(({role, bio, name}, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={i}
      className='crew-block'
      custom={direction}
      onPanEnd={onPan}
      style={{touchAction:'none', userSelect: 'none'}}
    >
      <h2 className="uppercase fs-500 ff-serif">{role} <span className="fs-700 d-block">{name}</span></h2>
      <p
        className="text-light"
        style={isTablet && !isDesktop ? {'max-width': `${bio.length/3.6}ch`} : null}
      >
        {bio}
      </p> 
    </motion.div>
  ))

  return (    
    <AnimatedPage>
      <Helmet>
        <style>{`
          body {
            background-image: url(${bgMobile});
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
          }
          
          @media(min-width:35em) {
            body {
              background-image: url(${bgTablet});
              background-position: center center
            }
          }

          @media(min-width:55em) {
            body {
              background-image: url(${bgDesktop});
            }
          }          
        `}</style>
      </Helmet>      
      <div
        className="grid-container grid-container--crew"
      >        
        <h2 className="numbered-title letter-spacing-2"><span>02</span> Meet your crew</h2>    
        <AnimatePresence custom={direction} exitBeforeEnter>
          {[crewImage[tab]]}
        </AnimatePresence>
        <div className="dot-indicators flex">
            {buttons}
        </div>
        <AnimatePresence custom={direction} exitBeforeEnter>
          {crewBlock[tab]}
        </AnimatePresence>
      </div>

    </AnimatedPage>
  )
}