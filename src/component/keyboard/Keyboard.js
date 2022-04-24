import { useContext, useEffect } from 'react';
import { DrumContext } from '../context/DrumContext';
import './Keyboard.scss';
const $ = document.querySelector.bind(document);

function Keyboard() {
	const drumContext = useContext(DrumContext);
	const drumData = drumContext.bank;

	useEffect(() => {
		addEventKeyDown(drumData);
	}, [drumData]);

	const playAudio = (id) => {
		const audio = document.getElementById(id);
		audio.play();
	};

	const handleClickKeypad = (id) => {
		playAudio(id);
		$('#display .text').innerHTML = id;
	};

	return (
		<div className="keyboard d-flex row">
			{drumData.map((key, index) => {
				return (
					<div
						className="drum-pad text-white text-center col-md-3 m-2"
						key={index}
						id={key.keyTrigger}
						onClick={() => handleClickKeypad(key.id)}
					>
						<audio src={key.url} id={key.id} type="audio/mpeg"></audio>
						<span className="text noselect">{key.keyTrigger}</span>
					</div>
				);
			})}
		</div>
	);
}

function addEventKeyDown(data) {
	/** add Event keydown and keyup for drum pad */
	data.forEach((key) => {
		document.addEventListener(
			'keydown',
			function (event) {
				if (event.keyCode === key.keyCode) {
					$(`#${key.keyTrigger}`).click();
					//add css when key down
					$(`#${key.keyTrigger}`).classList.add('active');
				}
			},
			true
		);
		document.addEventListener(
			'keyup',
			function (event) {
				if (event.keyCode === key.keyCode) {
					//remove css when key up
					$(`#${key.keyTrigger}`).classList.remove('active');
				}
			},
			true
		);
	});
}

export default Keyboard;
