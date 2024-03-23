import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StepContextProvider } from './StepContext';

ReactDOM.render(
  <React.StrictMode>
    <StepContextProvider>
      <App />
    </StepContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
