import React from 'react';
import ReactDOM from 'react-dom/client';
import 'the-new-css-reset';
import './index.css';
import bmwData from './components/CardBmwData/CardBmdData';
import CardBmwEnum from './components/CardBmvEnum/CardBmwEnum';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
      <CardBmwEnum cars = {bmwData}/>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
