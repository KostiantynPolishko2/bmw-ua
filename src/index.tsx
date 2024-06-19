import React from 'react';
import ReactDOM from 'react-dom/client';
import 'the-new-css-reset';
import './index.css';
import CardBmw from './components/CardBmw/CardBmw';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardBmw 
    imgName = 'bmw320d_xdrive.png'
    isPropose = {true} 
    model='BMW 320d xDrive' 
    powerkWt={140}
    powerHorse={190}
    consume={5.1}
    emission={133}
    price={199327}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
