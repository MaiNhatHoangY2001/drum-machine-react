import './App.scss';
import Keyboard from '../keyboard/Keyboard';
import Tools from '../tools/Tools';

function App() {
	return (
		<div className="drum-machine row">
			<div className="col-md-8">
				<Keyboard />
			</div>
			<div className="col-md-4">
				<Tools />
			</div>
		</div>
	);
}

export default App;
