import React from 'react';
import { useParams } from 'react-router-dom';
import Block2 from './block_2';
import { recList } from './recipes';

const Dishes = () => {
    const { id } = useParams();
    const dish = recList.find((dish) => dish.id === parseInt(id));

    return (
        <div className='row'>
            <Block2 title={dish.title} desc={dish.big_desc}/>
            <div className='col'></div>
            <div className='col-4 moki_1 moki_2'></div>

            <div className='col-8'>
                <img className="img_1" src={dish.img} alt="img"/>
            </div>
            <div className='col-4 box__dish_1'>
                <div className='el__dish ed_1'>
                    <p>Water</p>
                    <p className='text__el'>{dish.water}</p>
                </div>

                <div className='el__dish ed_2'>
                    <p>Carbohydrates</p>
                    <p className='text__el'>{dish.carbohydrates}</p>
                </div>

                <div className='el__dish ed_3'>
                    <p>Fats</p>
                    <p className='text__el'>{dish.fats}</p>
                </div>
            </div>
        </div>
    )
}

export default Dishes;