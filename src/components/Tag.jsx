import React, {useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Tag() {
    
    const [tag, setTag]=useState('cat')
    const { spinner, gif, fetchData} = useGif(tag)
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