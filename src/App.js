import React from 'react';

import {ThemeProvider} from '@material-ui/core';

import Header from './t2020/Header';
import BodyPart from './Body';
import Theme from './t2020/Theme';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<div id="back-to-top-anchor"></div>
			<Header />
			<BodyPart />
		</ThemeProvider>
	);
}

export default App;
