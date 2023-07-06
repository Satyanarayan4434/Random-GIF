import Spinner from './Spinner';
import useGif from '../hooks/useGif';





function Random() {
   
    
    const { spinner, gif, fetchData} = useGif('')
    
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