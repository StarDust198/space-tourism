import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

import AnimatedPage from './AnimatedPage'

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

export default function DestPage ({ destinations, images }) {
  const [[tab, direction], setTab] = useState([0, 0])
  // const isDesktop = useMediaQuery({ query: `(${deskQuery})` })

  const changePlanet = (n) => {
    if (n === tab) return
    setTab(arr => [n, arr[0] - n])
  }
  
  const nextTab = () => {
    changePlanet(tab === 3 ? 0 : tab + 1)
  }

  const prevTab = () => {
    changePlanet(tab === 0 ? 3 : tab - 1)
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

  const onPan = (event, info) => {
    if (info.offset.x < -100) changePlanet(tab === 3 ? 0 : tab + 1)
    if (info.offset.x > 100) changePlanet(tab === 0 ? 3 : tab - 1)
  }

  const destImages = images.map((item, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={planetAnimation}
      key={item}
      className='destination-image no-select'
      custom={direction}
      onPanEnd={onPan}
    >
      <img src={item} alt='planet' draggable="false"></img>
    </motion.div>
  ))

  const { name, description, distance, travel } = destinations[tab]

  return (    
    <AnimatedPage>
      <Helmet>
        <meta
          name="description"
          content="Space tour - Destination"
        />
        <title>Space Tour - Pick Your Destinaion</title>
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
          <ul className="tab-list underline-indicators flex ff-sans-cond fs-10">
            {destLinks}
          </ul>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate="visible"
              initial="hidden"
              exit="hidden"
              variants={textAnimation}
              key={name}
              className='no-select'
              onPanEnd={onPan}
            >
              <h2 className="fs-80 ff-serif uppercase">{name}</h2>
              <p className="text-light">{description}</p>
              <div className="destination-info flex">
                <div className="flow" style={{"--flow-space": "0.75rem"}}>
                  <p className="fs-01 text-light uppercase ff-sans-cond letter-spacing-3">Avg. distance</p>
                  <p className="fs-70 ff-serif uppercase">{distance}</p>
                </div>
                <div className="flow" style={{"--flow-space": "0.75rem"}}>
                  <p className="fs-01 text-light uppercase ff-sans-cond letter-spacing-3">Est. travel time</p>
                  <p className="fs-70 ff-serif uppercase">{travel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  )
}