import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './ViewPage.css';

export default function ViewPage(){
    const location=useLocation();
    const navigate=useNavigate();
    const {imdbId,poster}=location.state;
    const [datas,setData]=useState("");

    const api_key="48002d20";
      const url = `https://www.omdbapi.com/?apikey=${api_key}&i=${imdbId}`;
      (async ()=>{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        setData(data);
      })();

    const handle=()=>{
        navigate("/");
    }
    <button onClick={handle}></button>
    return(
        <>
        
        <h2 className="h2">{imdbId}</h2>
        <img src={poster} alt=""  className="image-setter"/>
        <div className="text-setter">
            <h1>Actor in the film are:{datas.Actors}</h1>
            <h1>Awards:{datas.Awards}</h1>
            <h1>BoxOffice:{datas.BoxOffice}</h1>
            <h1>Writer:{datas.Writer}</h1>
            <h1>Year:{datas.Year}</h1>
        </div>
        <button onClick={handle}className="back">Back</button>
        </>
    );
}