import React from 'react';
import './CardBmw.css';
import './CardBmwPropose.css';
import IconInfo from './CardBmwIconInfo';

interface CardBmwProps {
  auto: {model: string, isPropose: boolean, imgName: string, powerkWt: number, powerHorse: number, consume: number, emission: number, price: number};
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

  const {model = 'unknown', isPropose, imgName, powerkWt, powerHorse, consume, emission, price} = props.auto;

  return(
    <div className="card-bmw">
      {propose(isPropose)}
      <div className='card-bmw__main'>
        <img src={require(`../CardBmwData/img/${imgName}`)} alt={model == 'unknown'? 'auto logo' : model}></img>
        <div className='card-bmw__main-date'>
          <p>{model}</p>
          <div className='card-bmw__main-date__text'>
            <p>{powerkWt} кВт ({powerHorse} к.с.)</p>
            <p>{consume} л/100км</p>
            <p>Викиди СО2 {emission} 0 гм/км</p>
          </div>
          <div className='card-bmw__main-date__price-icon-info'>
            <p>{price > 1000 ? `${Math.trunc(price/1000)} ` : ''}{price%1000} грн</p>
            <IconInfo />
          </div>
        </div>
        <button type='button' name='detail' className='card-bmw__btn'>Детальніше</button>
      </div>
    </div>
  );
  
}

CardBmw.defaultProps = {
  auto: {model: 'unknown', isPropose: false, imgName: 'error404.jpg', powerkWt: 0, powerHorse: 0, consume: 0, emission: 0, price: 0},
}

export default CardBmw;
