import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

const mount = (el) => {
  ReactDOM.render(<TestComponent />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_sub-a-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };