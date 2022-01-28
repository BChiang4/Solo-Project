import React  from "react";
import NavBar from "./NavBar";
import SneakerDisplay from "./SneakerDisplay";


const App = () => {
    return (
        <div style={styles.container}> 
            <NavBar />
            <SneakerDisplay />
        </div>
    )
}

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'pink',
    }
}

export default App;