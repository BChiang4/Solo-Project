import React, {useState} from 'react';


// Define NavBar Componenet
const NavBar = (props) => {
    return (
        <>
            <p style={style.container}>Cart</p>
        </>
    )
}

// const Cart = (props) =>{
//     [item,setItem] = useState(0);
//     return (
//         <>    
//             <p>CART</p>
//         </>
//     )
// }


const style = {
    container: {
        display : 'flex',
        justifyContent: 'flex-end'
    }
}



export default NavBar;
