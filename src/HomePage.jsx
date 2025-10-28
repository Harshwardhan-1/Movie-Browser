import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import './HomePage.css'
export default function HomePage(){
    const [input,setInput]=useState("");
    const [input2,setInput2]=useState("");
    const [input3,setInput3]=useState("");
    const navigate=useNavigate();


    const handle=async ()=>{
        const api_key="48002d20";
        const url=`http://www.omdbapi.com/?apikey=${api_key}&s=${input}&y=${input2}&type=${input3}`;
        try{
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            navigate("ResultPage",{state:{images:data.Search}})
        }catch(error){
            console.log(error); 
        }
    }
    return(
        
        <>
        <h1>Search your Movie,Web Series Here</h1>
        <div className="homePage">
        <div>
            <input className="input1" type="text"placeholder="Search Movie..."onChange={(e)=>setInput(e.target.value)} />
        </div>
        
        <div>
            <input  className="input2"type="text" placeholder="Year..." onChange={(e)=>setInput2(e.target.value)}/>
        </div>
        <div>
        <select className="input3" name="" id="" onChange={(e)=>setInput3(e.target.value)}>
            <option value="movie">movie</option>
            <option value="web series">web series</option>
        </select>    
        </div>
        
        <button className="button" onClick={handle}>Search</button> 
  
        </div>

      
        </>

    );
}