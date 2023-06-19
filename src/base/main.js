import React from 'react';
import Header from './header';
import Block1 from './block_1';

class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Header />
                    <Block1 />
                    <div className='col-1'></div>
                    <div className='col-5 moki_1'></div>
                </div>
            </div>
        )
    }
}

export default Main