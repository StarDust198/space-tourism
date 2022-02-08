import { Helmet } from 'react-helmet-async'

import '../scss/destpage.scss'

import bgMobile from '../assets/destination/background-destination-mobile.jpg'
import bgTablet from '../assets/destination/background-destination-tablet.jpg'
import bgDesktop from '../assets/destination/background-destination-desktop.jpg'

import moonPng from '../assets/destination/image-moon.png'
import moonWebp from '../assets/destination/image-moon.webp'
import marsPng from '../assets/destination/image-mars.png'
import marsWebp from '../assets/destination/image-mars.webp'
import europaPng from '../assets/destination/image-europa.png'
import europaWebp from '../assets/destination/image-europa.webp'
import titanPng from '../assets/destination/image-titan.png'
import titanWebp from '../assets/destination/image-titan.webp'

export default function DestPage () {
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
          <div className="destination-image"><img src={moonPng} alt="Destination planet"></img></div>
          <div className="destination-block">
            <ul className="tab-list underline-indicators flex ff-sans-cond fs-200">
              <li role="tab" aria-selected="true" className="text-light letter-spacing-2 uppercase">Moon</li>
              <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Mars</li>
              <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Europa</li>
              <li role="tab" aria-selected="false" className="text-light letter-spacing-2 uppercase">Titan</li>
            </ul>
            <h2 className="fs-800 ff-serif uppercase">Moon</h2>
            <p className="text-light fs-400">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className="destination-info flex">
              <div className="flow" style={{"--flow-space": "0.75rem"}}>
                <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Avg. distance</p>
                <p className="fs-700 ff-serif uppercase">384,400 km</p>
              </div>
              <div className="flow" style={{"--flow-space": "0.75rem"}}>
                <p className="fs-100 text-light uppercase ff-sans-cond letter-spacing-3">Est. travel time</p>
                <p className="fs-700 ff-serif uppercase">3 days</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}