import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import bgMobile from '../assets/destination/background-destination-mobile.jpg'
import bgTablet from '../assets/destination/background-destination-tablet.jpg'
import bgDesktop from '../assets/destination/background-destination-desktop.jpg'

// import moonPng from '../assets/destination/image-moon.png'
// import moonWebp from '../assets/destination/image-moon.webp'
// import marsPng from '../assets/destination/image-mars.png'
// import marsWebp from '../assets/destination/image-mars.webp'
// import europaPng from '../assets/destination/image-europa.png'
// import europaWebp from '../assets/destination/image-europa.webp'
// import titanPng from '../assets/destination/image-titan.png'
// import titanWebp from '../assets/destination/image-titan.webp'

export default function DestPage ({ destinations }) {
  const [ page, setPage ] = useState(0)

  const destLinks = destinations.map((item, i) => (
   <li
      key={i}
      role="tab"
      aria-selected={page === i ? "true" : "false"}
      className="text-light letter-spacing-2 uppercase"
      onClick={() => setPage(i)}
    >
      {item.name}
    </li>
  ))

  const destInfo = destinations.map(({ name, images: { png, webp }, description, distance, travel }, i) => (
    <>
      <div className="destination-image"><img src={png} alt={name}></img></div>
      <div className="destination-block">
        <ul className="tab-list underline-indicators flex ff-sans-cond fs-200">
          {destLinks}
        </ul>
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
      </div>
    </>
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
      <div className="grid-container grid-container--destination">
        <h2 className="numbered-title letter-spacing-2"><span>01</span> Pick your destination</h2>
          {destInfo[page]}
      </div>
    </>
  )
}

// {/* <h2 className="numbered-title letter-spacing-2"><span>01</span> Pick your destination</h2>      
// <div className="destination-image"><img src={png} alt="Destination planet"></img></div>
// <div className="destination-block">
//   <ul className="tab-list underline-indicators flex ff-sans-cond fs-200">
//     {destLinks}
// {/*               <li role="tab" aria-selected="true" className="text-light letter-spacing-2 uppercase">Moon</li>
//     <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Mars</li>
//     <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Europa</li>
//     <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Titan</li> */}
//   </ul>
//   <h2 className="fs-800 ff-serif uppercase">{name}</h2>
//   <p className="text-light fs-400">{description}</p>
//   <div className="destination-info flex">
//     <div className="flow" style={{"--flow-space": "0.75rem"}}>
//       <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Avg. distance</p>
//       <p className="fs-700 ff-serif uppercase">{distance}</p>
//     </div>
//     <div className="flow" style={{"--flow-space": "0.75rem"}}>
//       <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Est. travel time</p>
//       <p className="fs-700 ff-serif uppercase">{travel}</p>
//     </div>
//   </div>
// </div> */}