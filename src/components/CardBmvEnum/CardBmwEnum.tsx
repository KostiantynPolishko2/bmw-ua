import React from 'react';
import './CardBmwEnum.css';
import CardBmw from '../CardBmw/CardBmw';

interface AutoDataProps {
    cars: Array<{model: string, isPropose: boolean, imgName: string, powerkWt: number, powerHorse: number, consume: number, emission: number, price: number}>;
}

const CardBmwEnum = (props: AutoDataProps) => {

    let arr = [];

    for(const car of props.cars){
        arr.push(<CardBmw auto = {car}/>)
    }

    return <>{arr}</>;
}

CardBmwEnum.defaultProps = {
    cars: [{model: 'unknown', isPropose: false, imgName: 'error404.jpg', powerkWt: 0, powerHorse: 0, consume: 0, emission: 0, price: 0}],
}

export default CardBmwEnum;