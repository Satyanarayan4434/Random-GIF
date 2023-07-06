import {useState, useEffect} from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
   
    const[spinner,setSpinner] = useState(false)
    const [gif, setGif] =useState('');
    async function fetchData(){
        setSpinner(true);
        let {data} = await axios.get(tag?`${url}&tag=${tag}`:`${url}`);       
        let imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setSpinner(false);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return {spinner, gif, fetchData};
};

export default useGif;
