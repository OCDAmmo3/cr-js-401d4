import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js.js.js';

function Main() {
  return (
    <App />
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
