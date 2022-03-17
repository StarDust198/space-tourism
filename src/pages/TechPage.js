import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import bgDesktop from '../assets/technology/background-technology-desktop.jpg'
// import tech1Landscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
// import tech1Portrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
// import tech2Landscape from '../assets/technology/image-spaceport-landscape.jpg'
// import tech2Portrait from '../assets/technology/image-spaceport-portrait.jpg'
// import tech3Landscape from '../assets/technology/image-space-capsule-landscape.jpg'
// import tech3Portrait from '../assets/technology/image-space-capsule-portrait.jpg'
const transitionStyle = {
  duration: 1,
  type: "tween"
}

const tabAnimation = {
  enter: arr =>  {
    return {
      [arr[1]]: arr[0] < 0 ? 300 : arr[0] > 0 ? -300 : 0,
      opacity: 0,
      transition: transitionStyle
    }
  },
  exit: arr => {
    return { 
      [arr[1]]: arr[0] > 0 ? 300 : arr[0] < 0 ? -300 : 0,
      opacity: 0,
      transition: transitionStyle
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: transitionStyle
  }
}

export default function TechPage ({ tech }) {
  const [[tab, direction, angle], setTab] = useState([0, 0, 'x'])

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    // console.log('hi')
  }

  const isTablet = useMediaQuery({ query: '(min-width: 35rem)' }, undefined,  handleMediaQueryChange)
  const isDesktop = useMediaQuery({ query: '(min-width: 55rem)' }, undefined,  handleMediaQueryChange)

  const changeTab = (n) => {
    if (n === tab) return
    const turn = !isDesktop ? 'x' : 'y'
    // console.log([n, tab-n, turn]);
    setTab(arr => [n, arr[0]-n, turn])    
  }

  const buttons = tech.map((item, i) => (
    <button 
      role="tab"
      aria-selected={tab === i ? true : false}
      onClick={() => changeTab(i)}
      className="fs-600"
      key={i}
    >
      <span className="sr-only">Slide</span> {i+1}
    </button>
  ))

  const techImage = tech.map(({name, images: {portrait, landscape}}, i) => (
    <motion.img 
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={name}
      custom={[direction, angle]}
      src={isDesktop ? portrait : landscape} 
      alt={name} 
    />
  ))

  const techBlock = tech.map(({name, description}, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={name}
      className='crew-image'
      custom={[direction, angle]}
    >
      <h2 className="fs-200 text-light uppercase ff-sans-cond letter-spacing-2">
        The terminology..
        <span className="fs-40 d-block text-white ff-serif">{name}</span>
      </h2>
      <p className="text-light">{description}</p>
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
      <div className="grid-container grid-container--tech">
        <h2 className="numbered-title letter-spacing-2 container"><span>03</span> Space launch 101</h2> 
        <div className="tech-image">
          <AnimatePresence exitBeforeEnter custom={[direction, angle]}>
            {techImage[tab]}
          </AnimatePresence>
        </div>  
        <div className="tech-block container">
          <div className="number-indicators flex">
            {buttons}
          </div>
          <AnimatePresence exitBeforeEnter custom={[direction, angle]}>
            {techBlock[tab]}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  )
}