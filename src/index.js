import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/uikit.min.css'
import './assets/css/main.css'
import 'semantic-ui-react';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
