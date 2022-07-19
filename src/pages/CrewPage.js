import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import Arrow from '../components/Arrow/Arrow'
import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/crew/background-crew-mobile.jpg'
import bgTablet from '../assets/crew/background-crew-tablet.jpg'
import bgDesktop from '../assets/crew/background-crew-desktop.jpg'
import { tabQuery, deskQuery } from '../widths'

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

  const isTablet = useMediaQuery({ query: `(${tabQuery})` })
  const isDesktop = useMediaQuery({ query: `(${deskQuery})` })
  // const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

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
    // eslint-disable-next-line
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
      className='crew-image no-select'
      custom={direction}
      onPanEnd={onPan}
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
      className='crew-block no-select'
      custom={direction}
      onPanEnd={onPan}
    >
      <h2 className="uppercase fs-40 ff-serif">{role} <span className="fs-60 d-block">{name}</span></h2>
      <p
        className="text-light"
        style={isTablet && !isDesktop ? {'maxWidth': `${bio.length/3.6}ch`} : null}
      >
        {bio}
      </p> 
    </motion.div>
  ))

  return (    
    <AnimatedPage>
      <Helmet>
        <meta
          name="description"
          content="Space tour - Crew Page"
        />
        <title>Space Tour - Meet Our Crew</title>
        <style>{`
          body {
            background-image: url(${bgMobile});
            background-size: cover;
            background-position: center center;
            background-attachment: fixed;
          }
          
          @media(${tabQuery}) {
            body {
              background-image: url(${bgTablet});
              background-position: center center
            }
          }

          @media(${deskQuery}) {
            body {
              background-image: url(${bgDesktop});
            }
          }          
        `}</style>
      </Helmet>      
      <div
        className="grid-container grid-container--crew"
      >     
        {isDesktop && 
          <>
            <Arrow direction="left" onClick={prevTab} />
            <Arrow onClick={nextTab} />
          </>
        }
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