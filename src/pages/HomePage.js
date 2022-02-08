import { Helmet } from 'react-helmet-async'

import bgMobile from '../assets/home/background-home-mobile.jpg'
import bgTablet from '../assets/home/background-home-tablet.jpg'
import bgDesktop from '../assets/home/background-home-desktop.jpg'

export default function HomePage () {
  return (    
    <>
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
      <div className="grid-container grid-container--home">
        <div>
          <h1 className="ff-sans-cond letter-spacing-1 uppercase text-light fs-500">
            So, you want to travel&nbsp;to
            <span className="ff-serif d-block fs-900 text-white">Space</span>
          </h1>
          <p className="text-light fs-400">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className="main-button">
          <a href="/" className="large-button bg-white text-dark uppercase ff-serif">Explore</a>
        </div>
      </div>
    </>
  )
}