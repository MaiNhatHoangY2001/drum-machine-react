import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App/App';
import { DrumContextProvider } from './component/context/DrumContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DrumContextProvider>
			<App />
		</DrumContextProvider>
	</React.StrictMode>
);
