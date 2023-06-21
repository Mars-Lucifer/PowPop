import React from 'react';

class Block2 extends React.Component {
    render() {
        return (
            <div className='col-6 box__block_1__left'>
                <div>
                    <p className='text__block_1__big'>{this.props.title}</p>
                    <p className='text__block_1__small'>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Block2