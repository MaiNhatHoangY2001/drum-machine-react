import { useContext } from 'react';
import { DrumContext } from '../context/DrumContext';
import './Tools.scss';

function Tools() {
	const drumContext = useContext(DrumContext);

	const handleCheckbox = () => {
		if (document.getElementById("checkbox-bank").checked) 
			drumContext.setIsPiano(false);
		else 
			drumContext.setIsPiano(true);

	}

	return (
		<div className="tool text-center">
			<div id="display">
				<span className="text text-white text-center"></span>
			</div>
			<div className="switch-bank mt-5">
				<span className="text-white">Bank</span>
				<br/>
				<label className="switch-wrap">
					<input id="checkbox-bank" type="checkbox" onChange={handleCheckbox}/>
					<div className="switch"></div>
				</label>
			</div>
		</div>
	);
}

export default Tools;
