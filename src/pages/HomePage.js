import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import AnimatedPage from './AnimatedPage'
import bgMobile from '../assets/home/background-home-mobile.jpg'
import bgTablet from '../assets/home/background-home-tablet.jpg'
import bgDesktop from '../assets/home/background-home-desktop.jpg'

const textAnimation = {
  hidden: custom => ({
    [custom]: -100,
    opacity: 0
  }),
  visible: custom => ({
    x: 0,
    y: 0,
    opacity: 1
  })
}

const buttonAnimation = {
  hidden: custom => ({
    [custom]: 100,
    opacity: 0
  }),
  visible: custom => ({
    x: 0,
    y: 0,
    opacity: 1
  })
}

export default function HomePage () {
  // const isTablet = useMediaQuery({ query: '(min-width: 35em)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 55em)' })

  return (    
    <AnimatedPage>
      <Helmet>
        <style>{`
          body {
            background-image: url(${bgMobile});
            background-size: cover;
            background-position: center 70%;
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
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid-container grid-container--home"
      >
        <motion.div 
          variants={textAnimation}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
          custom={isDesktop ? 'x' : 'y'}
        >
          <h1 className="ff-sans-cond letter-spacing-1 uppercase text-light fs-500">
            So, you want to travel&nbsp;to
            <span className="ff-serif d-block fs-900 text-white">Space</span>
          </h1>
          <p className="text-light fs-400">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </motion.div>

        <motion.div
          variants={buttonAnimation}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="main-button"
          custom={isDesktop ? 'x' : 'y'}
        >
          <Link 
            to="/destination"
            className="large-button bg-white text-dark uppercase ff-serif"
          >
            Explore
          </Link>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  )
}