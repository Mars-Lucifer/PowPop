import React from 'react';
import Header from './header';

class Recipes extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Header />
                    <p>Page 2</p>
                </div>
            </div>
        )
    }
}

export default Recipes