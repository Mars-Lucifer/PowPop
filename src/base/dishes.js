import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Block2 from './block_2';
import Header from './header';
import { recList } from './recipes';

const Dishes = () => {
    const { id } = useParams();
    const dish = recList.find((dish) => dish.id === parseInt(id));

    useEffect(() => {
        const img = document.getElementById('img');
        img.style.backgroundImage = `url(${dish.img})`;
    }, [dish]);

    return (
        <div className='row'>
            <Header/>
            <Block2 title={dish.title} desc={dish.big_desc}/>
            <div className='col'></div>
            <div className='col-4 moki_1 moki_2'></div>

            <div className='col-8'>
                <div className='img_1' id="img"></div>
            </div>

            <div className='col-4 box__dish_1'>
                <div className='el__dish'>
                    <p>Water</p>
                    <p className='text__el'>{dish.water}</p>
                </div>

                <div className='el__dish ed_2'>
                    <p>Carbohydrates</p>
                    <p className='text__el ed_2'>{dish.carbohydrates}</p>
                </div>

                <div className='el__dish ed_3'>
                    <p>Fats</p>
                    <p className='text__el ed_3'>{dish.fats}</p>
                </div>
            </div>
        </div>
    )
}

export default Dishes;