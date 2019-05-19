import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../components/app';

console.log('Hello World from Webpacker');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
});
