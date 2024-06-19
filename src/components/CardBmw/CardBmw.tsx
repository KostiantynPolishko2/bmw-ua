import React from 'react';
import './CardBmw.css';
import './CardBmwPropose.css';
import IconInfo from './CardBmwIconInfo';

interface CardBmwProps {
  imgName: string;
  isPropose: boolean;
  model: string;
  powerkWt: number;
  powerHorse: number;
  consume: number;
  emission: number;
  price: number;
}

const propose = (flag: boolean) => {
  if (flag){
    return(
      <div className='card-bmw__propose'>
        <div>
            <i className='material-symbols-outlined' style={{fontSize: 15+'px'}}>star</i>
            <p>СПЕЦІАЛЬНА ПРОПОЗИЦІЯ</p>
        </div>
        <div></div>
      </div>
    );
  }
}

const CardBmw = (props : CardBmwProps) => {

  return(
    <div className="card-bmw">
      {propose(props.isPropose)}
      <div className='card-bmw__main'>
        <img src={require(`./img/${props.imgName}`)} alt={props.model == 'unknown'? 'auto logo' : props.model}></img>
        <div className='card-bmw__main-date'>
          <p>{props.model}</p>
          <div className='card-bmw__main-date__text'>
            <p>{props.powerkWt} кВт ({props.powerHorse} к.с.)</p>
            <p>{props.consume} л/100км</p>
            <p>Викиди СО2 {props.emission} 0 гм/км</p>
          </div>
          <div className='card-bmw__main-date__price-icon-info'>
            <p>{props.price > 1000 ? `${Math.trunc(props.price/1000)} ` : ''}{props.price%1000} грн</p>
            <IconInfo />
          </div>
        </div>
        <button type='button' name='detail' className='card-bmw__btn'>Детальніше</button>
      </div>
    </div>
  );
  
}

CardBmw.defaultProps = {
  imgName: 'error404.jpg',
  isPropose: false,
  model: 'unknown',
  powerkWt: 0,
  powerHorse: 0,
  consume: 0,
  emission: 0,
  price: 0,
}

export default CardBmw;
