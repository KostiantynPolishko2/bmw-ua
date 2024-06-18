import React, { FC } from 'react';
import './CardBmw.css';

interface CardBmwProps {}

const CardBmw: FC<CardBmwProps> = () => (
  <div className="card-bmw">
    <div className='card-bmw__propose'>
      <div>
        <i className='material-symbols-outlined' style={{fontSize: 15+'px'}}>star</i>
        <p>СПЕЦІАЛЬНА ПРОПОЗИЦІЯ</p>
      </div>
      <div></div>
    </div>
  </div>
);

export default CardBmw;
