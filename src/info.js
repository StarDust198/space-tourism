// Backgrounds
import bgHomeMobile from './assets/home/background-home-mobile.jpg'
import bgHomeTablet from './assets/home/background-home-tablet.jpg'
import bgHomeDesktop from './assets/home/background-home-desktop.jpg'
import bgDestMobile from './assets/destination/background-destination-mobile.jpg'
import bgDestTablet from './assets/destination/background-destination-tablet.jpg'
import bgDestDesktop from './assets/destination/background-destination-desktop.jpg'
import bgCrewMobile from './assets/crew/background-crew-mobile.jpg'
import bgCrewTablet from './assets/crew/background-crew-tablet.jpg'
import bgCrewDesktop from './assets/crew/background-crew-desktop.jpg'
import bgTechMobile from './assets/technology/background-technology-mobile.jpg'
import bgTechTablet from './assets/technology/background-technology-tablet.jpg'
import bgTechDesktop from './assets/technology/background-technology-desktop.jpg'

// Images
import crewImage1 from './assets/crew/image-anousheh-ansari.png'
// import crewImage1 from './assets/crew/image-anousheh-ansari.webp'
import crewImage2 from './assets/crew/image-douglas-hurley.png'
// import crewImage2 from './assets/crew/image-douglas-hurley.webp'
import crewImage3 from './assets/crew/image-mark-shuttleworth.png'
// import crewImage3 from './assets/crew/image-mark-shuttleworth.webp'
import crewImage4 from './assets/crew/image-victor-glover.png'
// import crewImage4 from './assets/crew/image-victor-glover.webp'
import destImage1 from './assets/destination/image-europa.png'
// import destImage1 from './assets/destination/image-europa.webp'
import destImage2 from './assets/destination/image-mars.png'
// import destImage2 from './assets/destination/image-mars.webp'
import destImage3 from './assets/destination/image-moon.png'
// import destImage3 from './assets/destination/image-moon.webp'
import destImage4 from './assets/destination/image-titan.png'
// import destImage4 from './assets/destination/image-titan.webp'
import techImage1 from './assets/technology/image-launch-vehicle-landscape.jpg'
import techImage1p from './assets/technology/image-launch-vehicle-portrait.jpg'
import techImage2 from './assets/technology/image-space-capsule-landscape.jpg'
import techImage2p from './assets/technology/image-space-capsule-portrait.jpg'
import techImage3 from './assets/technology/image-spaceport-landscape.jpg'
import techImage3p from './assets/technology/image-spaceport-portrait.jpg'

// Data
import data from './data.json'

// Background group
const bgs = {
  mobile: [bgHomeMobile, bgDestMobile, bgCrewMobile, bgTechMobile],
  tablet: [bgHomeTablet, bgDestTablet, bgCrewTablet, bgTechTablet],
  desktop: [bgHomeDesktop, bgDestDesktop, bgCrewDesktop, bgTechDesktop]
}

// Images group
const imgs = {
	dest: [destImage1, destImage2, destImage3, destImage4],
	crew: [crewImage1, crewImage2, crewImage3, crewImage4],
	tech: [techImage1, techImage2, techImage3, techImage1p, techImage2p, techImage3p]
}

// Queries
const queries = {
	tabWidth: '35em',
	deskWidth: '60em',
	tabQuery: 'min-width: 35em',
	deskQuery: 'orientation : landscape) and (min-width: 35em), (min-width: 60em'
}

// Pages
const pages = [
	{
		page: 'home',
		href: '/'
	}, {
		page: 'destination',
		href: '/destination'
	}, {
		page: 'crew',
		href: '/crew'
	}, {
		page: 'technology', 
		href: '/tech'
	}
]

export { data, pages, queries, bgs, imgs }