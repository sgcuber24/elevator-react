import { useEffect, useState } from 'react';
import './App.css';
import Elevator from './components/elvator/Elevator';
import Floors from './components/floors/Floors';

function App() {
	const [position, setPosition] = useState(0);
	const [stack, setStack] = useState([]);
	const [flag, setFlag] = useState(true);
	useEffect(() => {
		const timer = setInterval(() => {
			let removedElement;
			if (flag === true) {
				removedElement = Math.min(...stack);
				if (removedElement === Math.max(...stack)) {
					setFlag(false);
				}
			} else {
				removedElement = Math.max(...stack);
				if (removedElement === Math.min(...stack)) {
					setFlag(true);
				}
			}

			setPosition(removedElement);
			setStack(stack.filter(p => p !== removedElement));
		}, 1000);
		return () => clearInterval(timer);
	});
	const positionChangeHandler = position => {
		setStack(prev => [...prev, position]);
	};
	return (
		<div className='App'>
			<Floors positionChangeHandler={positionChangeHandler} />
			<Elevator position={position} />
		</div>
	);
}

export default App;
