import React from 'react';
import { recList } from './recipes';

class Block1 extends React.Component {
    render() {
        const handleClick = () => {
            const randomId = Math.floor(Math.random() * recList.length) + 1;
            window.location.href = `/dishes/${randomId}`;
        }

        return (
            <div className='col-6 box__block_1__left'>
                <div>
                    <p className='text__block_1__big'>Where did you get to?</p>
                    <p className='text__block_1__small'>Welcome to my site! I am the owner of this site, Moki the octopus. Glad you stopped by, I hope you enjoy it! I have you can find different recipes for dishes, I add them here slowly but for that they are very tasty! All ghosts love them, I don’t know of course if they are suitable for people, but you can try</p>
                </div>
                <div className='box__block_1__buttons'>
                    <button onClick={handleClick} className='text__block_1__link'>Random dish! <div className='img__block_1__button'></div></button>
                    <a href="/recipes" className='text__block_1__link blue'>List of dishes <div className='img__block_1__button two'></div></a>
                </div>
            </div>
        )
    }
}

export default Block1