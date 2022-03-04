import React, {useState} from 'react';
import Cart from './Cart'

// Define NavBar Componenet
const NavBar = (props) => {
    return (
        <>
            <p style={style.container}>Cart</p>
            
        </>
    )
}




const style = {
    container: {
        display : 'flex',
        justifyContent: 'flex-end'
    }
}



export default NavBar;
