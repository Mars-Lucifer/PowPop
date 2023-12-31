import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='col-12 box__header_main'>
                <div className='box__header_1'>
                    <a href='/' className='logo'>PowPop</a>
                    <p className='version'>version: 0.3.0</p>
                </div>
                <div className='box__header_link'>
                    <a href='https://github.com/Mars-Lucifer/PowPop' className='text_header_link' target="blank">git</a>
                    <a href='https://t.me/w2_14' className='text_header_link' target="blank">artist</a>
                    <a href='https://t.me/Mars_Lucifer' className='text_header_link' target="blank">author</a>
                </div>
            </div>
        )
    }
}

export default Header