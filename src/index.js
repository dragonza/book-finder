import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Routes from './containers/App/routes';
import WebFont from 'webfontloader';


import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Satisfy:300,400,700', 'sans-serif']
  }
});


ReactDOM.render(<Routes />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
