import React from 'react';

class Block1 extends React.Component {
    render() {
        return (
            <div className='col-6 box__block_1__left'>
                <div>
                    <p className='text__block_1__big'>Where did you get to?</p>
                    <p className='text__block_1__small'>Welcome to my site! I am the owner of this site, Moki the octopus. Glad you stopped by, I hope you enjoy it! I have you can find different recipes for dishes, I add them here slowly but for that they are very tasty! All ghosts love them, I don’t know of course if they are suitable for people, but you can try</p>
                </div>
                <div className='box__block_1__buttons'>
                    <a href="https://www.google.com/?hl=ru" className='text__block_1__link' target="blank">Random dish! <div className='img__block_1__button'></div></a>
                    <a href="https://www.google.com/?hl=ru" className='text__block_1__link blue' target="blank">List of dishes <div className='img__block_1__button two'></div></a>
                </div>
            </div>
        )
    }
}

export default Block1