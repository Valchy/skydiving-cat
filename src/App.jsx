import moon from './imgs/moon.png';
import land from './imgs/land.png';
import cat from './imgs/cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
	return (
		<div>
			<Parallax pages={4}>
				<ParallaxLayer>
					<h1>Hello</h1>
				</ParallaxLayer>
				<ParallaxLayer>
					<h2>World</h2>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
