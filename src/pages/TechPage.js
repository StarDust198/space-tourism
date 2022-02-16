import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMediaQuery } from 'react-responsive'

import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import bgDesktop from '../assets/technology/background-technology-desktop.jpg'
// import tech1Landscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
// import tech1Portrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
// import tech2Landscape from '../assets/technology/image-spaceport-landscape.jpg'
// import tech2Portrait from '../assets/technology/image-spaceport-portrait.jpg'
// import tech3Landscape from '../assets/technology/image-space-capsule-landscape.jpg'
// import tech3Portrait from '../assets/technology/image-space-capsule-portrait.jpg'

export default function TechPage ({ tech }) {
  const [ techTab, setTechTab ] = useState(0)

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
    console.log('hi')
  }

  const isTablet = useMediaQuery({ query: '(min-width: 35rem)' }, undefined,  handleMediaQueryChange)
  const isDesktop = useMediaQuery({ query: '(min-width: 55rem)' }, undefined,  handleMediaQueryChange)

  // (({ name, desctription, images: { portraint, landscape } }))

  const buttons = tech.map((item, i) => (
    <button 
      role="tab"
      aria-selected={techTab === i ? true : false}
      onClick={() => setTechTab(i)}
      className="fs-600"
      key={i}
    >
      <span className="sr-only">Slide</span> {i+1}
    </button>
  ))

  const techImage = tech.map(({name, images: {portrait, landscape}}, i) => (
    <img 
      src={isDesktop ? portrait : landscape} 
      alt={name} 
      key={i}
      className={`d-${i === techTab ? 'block' : 'none'}`}
    />
  ))

  const techBlock = tech.map(({name, description}, i) => (
    <div
      key={i}
      className={`d-${i === techTab ? 'block' : 'none'}`}
    >
      <h2 className="fs-200 text-light uppercase ff-sans-cond letter-spacing-2">
        The terminology..
        <span className="fs-40 d-block text-white ff-serif">{name}</span>
      </h2>
      <p className="text-light">{description}</p>
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
      <div className="grid-container grid-container--tech">
        <h2 className="numbered-title letter-spacing-2 container"><span>03</span> Space launch 101</h2> 
        <div className="tech-image">
          {/* <img src={isDesktop ? tech1Portrait : tech1Landscape} alt='Spacevehicle' /> */}
          {techImage}
        </div>  
        <div className="tech-block container">
          <div className="number-indicators flex">
            {buttons}
          </div>
          {techBlock}
{/*           <div>
            <h2 className="fs-200 text-light uppercase ff-sans-cond letter-spacing-2">
              The terminology..
              <span className="fs-40 d-block text-white ff-serif">Launch vehicle</span>
            </h2>
            <p className="text-light">A launch vehicle or carrier rocket is a rocket&#8209;propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div> */}
        </div>
      </div>
    </>
  )
}