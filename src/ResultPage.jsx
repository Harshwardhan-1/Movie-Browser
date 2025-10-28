import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ResultPage.css'
export default function ResultPage(){
    const location=useLocation();
    const images=location.state?.images;
    const navigate=useNavigate();
    const handle=()=>{
        navigate("/")
    }

    const handleView=(image)=>{
        navigate("/ResultPage/ViewPage",{
            state:{
                imdbId:image.imdbID,
                poster:image.Poster
            }
        });
    }
    return(
       <>
       <button className="btn" onClick={handle}>Back</button>
       <div className="harsh">
       {images.map((image)=>(
        <div  className="harsh2">
        <img key={image.imdbId} src={image.Poster} alt="" height="200px" width="200px" className="harsh3" />
        <button  onClick={()=>handleView(image)} className="btn2">Know More</button>
        </div>
       ))}
       </div>
       </>
    );
}