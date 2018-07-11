import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import registerServiceWorker from './src/registerServiceWorker';

import './src/style/sass/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./src/App', function(){
        var NextApp = require('./src/App')
        ReactDOM.render(<NextApp />, document.getElementById('root'))
        registerServiceWorker();
    });
}


