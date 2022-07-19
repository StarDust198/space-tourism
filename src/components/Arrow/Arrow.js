import './arrow.scss'
import cn from 'classnames';

const Arrow = ({direction, className, onClick}) => {
	return (
		<div onClick={onClick} className={cn('round', 'arrow-btn', {
			[`rotate-${direction}`]: !!direction,
			[className]: !!className
		})}>
			<div id="cta">
				<span className="arrow primera next "></span>
				<span className="arrow segunda next "></span>
			</div>
		</div>
	)
}

export default Arrow;
