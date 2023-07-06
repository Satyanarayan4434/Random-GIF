import axios from 'axios';
import Spinner from './Spinner';
import React, { useEffect, useState } from 'react'



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Random() {
    const[spinner,setSpinner] = useState(false)
    const [gif, setGif] =useState('');
    async function fetchData(){
        setSpinner(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        let {data} = await axios.get(url);       
        let imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setSpinner(false);
    }
    useEffect(()=>{
        fetchData();
    },[])
    let clickHandler=()=>{
        fetchData();
    }
  return (
    <div className='min-w-[40rem] p-6 gap-7 bg-green-500 min-h-[40rem] my-7 rounded-md flex flex-col items-center justify-around'>
        <h1>A Random GIF</h1>
        {
            spinner?(<Spinner/>):(<img src={gif} alt='GIF' className='rounded-md'/>)
        }
        
        <button onClick={clickHandler} className='bg-yellow-400 p-2 rounded-md text-white'>Generate</button>
    </div>
  )
}

export default Random