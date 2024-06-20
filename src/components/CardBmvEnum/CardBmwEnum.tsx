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

    return (
        <>
            <nav className='card-bmw_menu'>
                <a className='card-bmw_pagination' href="#page-1">1</a>
                <a className='card-bmw_pagination' href="#page-2">2</a>
                <a className='card-bmw_pagination' href="#page-3">3</a>
            </nav>
            <div className='card-bmw__scroll-container'>
                <div id = 'page-1' className='card-bmw__scroll-page'>
                    {arr[0]}
                    {arr[1]}
                    {arr[2]}
                </div>
                <div id = 'page-2' className='card-bmw__scroll-page'>
                    {arr[3]}
                    {arr[4]}
                    {arr[5]}
                </div>
                <div id = 'page-3' className='card-bmw__scroll-page'>
                    {arr[6]}
                    {arr[7]}
                    {arr[8]}
                </div>
            </div>
        </>
    );
}

CardBmwEnum.defaultProps = {
    cars: [{model: 'unknown', isPropose: false, imgName: 'error404.jpg', powerkWt: 0, powerHorse: 0, consume: 0, emission: 0, price: 0}],
}

export default CardBmwEnum;