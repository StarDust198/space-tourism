import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

import bgMobile from '../assets/destination/background-destination-mobile.jpg'
import bgTablet from '../assets/destination/background-destination-tablet.jpg'
import bgDesktop from '../assets/destination/background-destination-desktop.jpg'

const transitionStyle = {
  duration: 1,
  type: "tween"
}

const textAnimation = {
  hidden: {
    filter: 'blur(10px)',
    scale: 1.15,
    opacity: 0,
    transition: transitionStyle
  },
  visible: {
    filter: 'blur(0px)',
    scale: 1,
    opacity: 1,
    transition: {...transitionStyle, delay: 0.5}
  }
}

const planetAnimation = {
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

export default function DestPage ({ destinations }) {
  const [[tab, direction], setTab] = useState([0, 0])

  const changePlanet = (n) => {
    if (n === tab) return
    setTab(arr => [n, arr[0] - n])
  }

  const destLinks = destinations.map((item, i) => (
   <li
      key={item.name}
      role="tab"
      aria-selected={tab === i ? "true" : "false"}
      className="text-light letter-spacing-2 uppercase"
      onClick={() => changePlanet(i)}
    >
      {item.name}
    </li>
  ))

  const destImages = destinations.map(({ name, images: { png, webp }, description, distance, travel }, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={planetAnimation}
      key={name}
      className='destination-image'
      custom={direction}
    >
      <img src={png} alt={name}></img>
    </motion.div>
  ))

  const { name, images: { png, webp }, description, distance, travel } = destinations[tab]

  return (    
    <>
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
      <div className="grid-container grid-container--destination">
        <h2 className="numbered-title letter-spacing-2"><span>01</span> Pick your destination</h2>
          <AnimatePresence
            custom={direction}
            exitBeforeEnter
          >
            {destImages[tab]}
          </AnimatePresence>
        <div className="destination-block">
          <ul className="tab-list underline-indicators flex ff-sans-cond fs-200">
            {destLinks}
          </ul>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate="visible"
              initial="hidden"
              exit="hidden"
              variants={textAnimation}
              key={name}
            >
              <h2 className="fs-800 ff-serif uppercase">{name}</h2>
              <p className="text-light fs-400">{description}</p>
              <div className="destination-info flex">
                <div className="flow" style={{"--flow-space": "0.75rem"}}>
                  <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Avg. distance</p>
                  <p className="fs-700 ff-serif uppercase">{distance}</p>
                </div>
                <div className="flow" style={{"--flow-space": "0.75rem"}}>
                  <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Est. travel time</p>
                  <p className="fs-700 ff-serif uppercase">{travel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}