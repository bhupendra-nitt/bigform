import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BigList from './BigList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BigList />, document.getElementById('root'));
registerServiceWorker();
