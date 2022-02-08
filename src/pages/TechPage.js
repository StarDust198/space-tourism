import { Helmet } from 'react-helmet-async'

import '../scss/techpage.scss'

import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import bgDesktop from '../assets/technology/background-technology-desktop.jpg'

export default function TechPage () {
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
      <div className="grid-container grid-container--technology">

      </div>
    </>
  )
}