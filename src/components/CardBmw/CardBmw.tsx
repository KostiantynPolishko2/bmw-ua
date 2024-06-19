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
    <div className='card-bmw__main'>
      <img src={require('./img/bmw_x3_drive.png')} alt='bmw-x3-drive'></img>
      <div className='card-bmw__main-date'>
        <p>BMW 320d xDrive</p>
        <div className='card-bmw__main-date__text'>
          <p>140 кВт (190 к.с.)</p>
          <p>5.1 л/100км</p>
          <p>Викиди СО2 133 0 гм/км</p>
        </div>
        <div>
          <p>199 327 грн</p>    
        </div>
      </div>
      <button type='button' name='detail' className='card-bmw__btn'>Детальніше</button>
    </div>
  </div>
);

export default CardBmw;
