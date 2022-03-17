import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
 
import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/crew/background-crew-mobile.jpg'
import bgTablet from '../assets/crew/background-crew-tablet.jpg'
import bgDesktop from '../assets/crew/background-crew-desktop.jpg'

// import engineerPng from '../assets/crew/image-anousheh-ansari.png'
// import engineerWebp from '../assets/crew/image-anousheh-ansari.webp'
// import commanderPng from '../assets/crew/image-douglas-hurley.png'
// import commanderWebp from '../assets/crew/image-douglas-hurley.webp'
// import pilotPng from '../assets/crew/image-mark-shuttleworth.png'
// import pilotWebp from '../assets/crew/image-mark-shuttleworth.webp'
// import specialistPng from '../assets/crew/image-victor-glover.png'
// import specialistWebp from '../assets/crew/image-victor-glover.webp'

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

  const changeTab = (n) => {
    if (n === tab) return
    setTab(arr => [n, arr[0] - n])
  }

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

  const crewImage = crew.map(({ name, images: { png } }, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={name}
      className='crew-image'
      custom={direction}
    >
      <img src={png} alt={name} />
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
    >
      <h2 className="uppercase fs-500 ff-serif">{role} <span className="fs-700 d-block">{name}</span></h2>
      <p className="text-light">{bio}</p> 
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
      <div className="grid-container grid-container--crew">        
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