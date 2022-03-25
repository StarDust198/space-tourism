import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import bgDesktop from '../assets/technology/background-technology-desktop.jpg'

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
  const [changeSize, setChangeSize] = useState(0)

  const handleMediaQueryChange = (matches) => {
    setChangeSize(changeSize => changeSize + 1)
  }

  const isTablet = useMediaQuery({ query: '(min-width: 35em)' }, undefined,  handleMediaQueryChange)
  const isDesktop = useMediaQuery({ query: '(min-width: 55em)' }, undefined,  handleMediaQueryChange)

  const changeTab = (n) => {
    if (n === tab) return
    const turn = !isDesktop ? 'x' : 'y'
    setTab(arr => [n, arr[0]-n, turn])    
  }

    const nextTab = () => {
    changeTab(tab === 2 ? 0 : tab + 1)
  }

  const prevTab = () => {
    changeTab(tab === 0 ? 2 : tab - 1)
  }
 
  useEffect(() => {
    const onKeypress = e => {
      if (e.code === 'ArrowLeft' && !isDesktop) {
        prevTab()
      } else if (e.code === 'ArrowRight' && !isDesktop) {
        nextTab()
      } else if (e.code === 'ArrowUp' && isDesktop) {
        prevTab()
      } else if (e.code === 'ArrowDown' && isDesktop) {
        nextTab()
      }
    }

    document.addEventListener('keydown', onKeypress)

    return () => {
      document.removeEventListener('keydown', onKeypress)
    }
  }, [tab, changeSize])

  const buttons = tech.map((item, i) => (
    <button 
      role="tab"
      aria-selected={tab === i ? true : false}
      onClick={() => changeTab(i)}
      className="fs-40"
      key={i}
    >
      <span className="sr-only">Slide</span> {i+1}
    </button>
  ))

  const onPan = (event, info) => {
    if (!isDesktop) {
      if (info.offset.x < -100) nextTab()
      if (info.offset.x > 100) prevTab()
    } else {
      if (info.offset.y < -100) nextTab()
      if (info.offset.y > 100) prevTab()
    }
  }

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
      draggable="false"
      onPanEnd={onPan}
      style={{touchAction:'none', userSelect: 'none'}}
    />
  ))

  const techBlock = tech.map(({name, description}, i) => (
    <motion.div
      animate="visible"
      initial="enter"
      exit="exit"
      variants={tabAnimation}
      key={name}
      custom={[direction, angle]}
      onPanEnd={onPan}
      style={{touchAction:'none', userSelect: 'none'}}
    >
      <h2 className="fs-10 text-light uppercase ff-sans-cond letter-spacing-2">
        The terminology..
        <span className="fs-60 d-block text-white ff-serif">{name}</span>
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
        <div className="tech-block container flex">
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