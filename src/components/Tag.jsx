import React,{useState, useEffect} from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Tag() {
    const [tag, setTag]=useState('cat')
    const[spinner,setSpinner] = useState(false)
    const [gif, setGif] =useState('');
    async function fetchData(){
        setSpinner(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
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
    <div className='min-w-[40rem] p-6 gap-7 bg-green-500 min-h-[50rem] my-7 rounded-md flex flex-col items-center justify-around'>
        <h1 >A Random {tag} GIF</h1>
        {
            spinner?(<Spinner/>):(<img src={gif} alt='GIF' className='rounded-md mx-7'/>)
        }
        <input type='text' value={tag} onChange={(event)=>setTag(event.target.value)} placeholder='Search Here...' className="p-2 outline-none border-none rounded-md font-mono"/>
        <button onClick={clickHandler} className='bg-yellow-400 p-2 rounded-md text-white'>Generate</button>
    </div>
  )
}

export default Tag