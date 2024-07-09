import { useEffect } from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const ScoreCard=()=>{
    const questionObject=useSelector((store)=>store.askedPlace)
    const userAnswer=useSelector((store)=>store.userAnswerCoords);
    const activeUser=useSelector((store)=>store.activeUser);
    const userLat=userAnswer.answerCoords.lat;
    const userLong=userAnswer.answerCoords.lng;
    const quesLat=questionObject.latitude;
    const quesLong=questionObject.longitude;
    
    const [points,setPoints]=useState(null);
   useEffect(() => {
    const fetchData = async () => {
        
        try {
            const response = await axios.post("https://mapplsbackend-6wmwpodt7-devanshgoel123s-projects.vercel.app/getDistance",{
                userLat,
                userLong,
                quesLat,
                quesLong
            });
            const distance = response.data;
            console.log(questionObject)
            console.log(distance)
             if(distance<11){
                setPoints(1000);
              }else if(distance>=11 && distance<100){
                  setPoints(500);
              }else if(distance>=100 && distance<400){
                  setPoints(250)
              }else{
                  setPoints(100);
              }
        } catch (err) {
            console.log(err);
        }
    };

    // Call fetchData only when userLat or userLong changes
    if (userLat !== "" && userLong !== "") {
        fetchData();
    }
    
}, [userLat, userLong]);
 
    const handleClick=async()=>{
        try{
            const result=await axios.post("https://mapplsbackend-6wmwpodt7-devanshgoel123s-projects.vercel.app/ScoreBoard",{
                points:points,
                user:activeUser,
                category:questionObject.keywords
              })
              console.log(result.data)
        }catch(error){
           console.log(error)
        }
    }
   return (
   <>   
    <div className="z-20 absolute top-1/3 h-44 w-96 flex flex-col justify-between items-center border bg-black rounded-xl">
        <p className="text-[#FBBC05] monseratt text-2xl">Round 1</p>
        <p className="text-xl monseratt">You earned {points} points!</p>

        <div className="w-60 h-3 bg-gray-200 rounded-2xl overflow-hidden">
          <div className="h-full bg-[#FBBC05]" style={{ width: `${points/10}%` , borderRadius: '100' }} />
        </div>

        <Link to={'/options'} onClick={handleClick} className="bg-[#FBBC05] w-24 h-8 flex rounded-xl m-2 justify-center items-center monseratt">Next</Link>
    </div>
   </>
   )
}
export default ScoreCard;