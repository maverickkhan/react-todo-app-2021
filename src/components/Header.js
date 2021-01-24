//import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
    const onClick = () => {
        console.log('Button Clicked')
    }
    return ( 
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title : "Task tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'royalblue',
//     fontSize: '1.5em'
// }



export default Header