import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './style/sass/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./App', function(){
        var NextApp = require('./App')
        ReactDOM.render(<NextApp />, document.getElementById('root'))
        registerServiceWorker();
    });
}


