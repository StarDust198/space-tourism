import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

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

export default function CrewPage ({ crew }) {
  const [ crewTab, setCrewTab ] = useState(0)

  const buttons = crew.map(({role}, i) => (
    <button 
      role="tab"
      aria-selected={i === crewTab}
      onClick={() => setCrewTab(i)}
      key={i}
    >
      <span className="sr-only">{role}</span>
    </button>
  ))

  const crewImage = crew.map(({ name, images: { png } }, i) => (
    <div className={`crew-image d-${i === crewTab ? 'block' : 'none'}`}><img src={png} alt={name} /></div>
  ))

  const crewBlock = crew.map(({role, bio, name}, i) => (
    <div
      className={`crew-block d-${i === crewTab ? 'block' : 'none'}`}
      key={i}
    >
      <h2 className="uppercase fs-500 ff-serif">{role} <span className="fs-700 d-block">{name}</span></h2>
      <p className="text-light">{bio}</p> 
    </div>
  ))

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
      <div className="grid-container grid-container--crew">
        <h2 className="numbered-title letter-spacing-2"><span>02</span> Meet your crew</h2>    
        {crewImage} 
        {/* <div className="crew-image"><img src={commanderPng} alt="Commander" /></div> */}
        <div className="dot-indicators flex">
            {buttons}
        </div>
        {crewBlock}
        {/* <div className="crew-block">
          <h2 className="uppercase fs-500 ff-serif">Commander <span className="fs-700 d-block">Douglas Hurley</span></h2>
          <p className="text-light">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>          
        </div>  */}
        
      </div>
    </>
  )
}