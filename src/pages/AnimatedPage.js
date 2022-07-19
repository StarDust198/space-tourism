import { motion } from 'framer-motion'

const animations = {
	initial: {
		opacity: 0,
		scale: 0.9,
		filter: 'blur(30px)'
	},
	animate: {
		opacity: 1, 
		scale: 1,
		filter: 'blur(0px)',
	},
	exit: {
		opacity:0, 
		scale: 0.9,
		filter: 'blur(30px)'
	}
}

const AnimatedPage = ({children}) => {
  return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 1.5 }}
			className='grid'
		>
			{children}
		</motion.div>
  )
}

export default AnimatedPage