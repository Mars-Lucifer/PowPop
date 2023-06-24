import React from 'react';
import Header from './header';
import Block1 from './block_1';

class Main extends React.Component {
    render() {
        return (
            <div className='row'>
                <Header />
                <Block1 />
                <div className='col-lg-1'></div>
                <div className='col-lg-5 col-md-4 order-md-2 moki_1'></div>
            </div>
        )
    }
}

export default Main