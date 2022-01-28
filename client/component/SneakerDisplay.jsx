import React , { useState, useEffect}  from 'react';
import SneakerCard from './SneakerCard';



function SneakerDisplay(){
  const [display, setDisplay] = useState([]);
 
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('/sneakers');
        const result = await response.json();
        setDisplay(result);
      }catch(error){
        console.log('error',error);
      }
    }
    fetchData();
  },[])


const fetchJordanData = async()=>{
  try{
    const response = await fetch('/jordans');
    const result = await response.json();
    console.log('result', result);
    setDisplay(result);
  }catch(error){
    console.log('error',error)
  }
}

const fetchNikeData = async()=>{
  try{
    const response = await fetch('/nike');
    const result = await response.json();
    console.log('result', result);
    setDisplay(result);
  }catch(error){
    console.log('error',error)
  }
}

const fetchAdidasData = async()=>{
  try{
    const response = await fetch('/adidas');
    const result = await response.json();
    console.log('result', result);
    setDisplay(result);
  }catch(error){
    console.log('error',error)
  }
}

const fetchConverseData = async()=>{
  try{
    const response = await fetch('/converse');
    const result = await response.json();
    console.log('result', result);
    setDisplay(result);
  }catch(error){
    console.log('error',error)
  }
}

const arr = [];
  function iterate(){
  for(let i=0;i<display.length;i++){
    arr.push(<SneakerCard key={i} card={display[i]} />);
  }
}
iterate();
  
return (<>
       <div className='options' style={styles.menu}>
            {/* <h3>WELCOME</h3> */}
            <label>Choose Brands: </label>
            <button onClick={()=>fetchJordanData()}>Jordan</button>
            <button onClick={()=>fetchAdidasData()}>Adidas</button>
            <button onClick={()=>fetchNikeData()}>Nike</button>
            <button onClick={()=>fetchConverseData()}>Converse</button>
            </div>
            <div className='feed' style={styles.container}>
            {arr};
            </div>
            </>
  )
}

const styles = {
  container : {
      display: 'flex',
      flex : '1',
      gap: '10px',
      flexWrap : 'wrap',
      flex: '1',
      justifyContent: 'center'
  },
  menu:{
    display: 'flex',
    margin: '10px',
    justifyContent: 'center'
  }
}

export default SneakerDisplay;