import React from 'react'
import PropTypes from 'prop-types';
export default function Button({text, color, onClick}) {
    // const onClick = (e) => {
    // }   
    
    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
        {text}
        </button>
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
