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
    <div className='card-bmw_main'>
      <img src={require('./img/bmw_x3_drive.png')} alt='bmw-x3-drive'></img>
      <button type='button' name='detail' className='card-bmw__btn'>Детальніше</button>
    </div>
  </div>
);

export default CardBmw;
