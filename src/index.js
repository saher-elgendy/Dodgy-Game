import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Game playerSize={25} boardUnit={11} />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
