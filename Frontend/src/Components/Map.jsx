import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnswerActions } from "../Store/userAnswerSlice";
import { useDispatch } from "react-redux";
import axios from "axios"
require('dotenv').config();
const Map=()=>{
  const [answerCoords,setAnswerCoords]=useState({lat:"",lng:""});
  const dispatch=useDispatch();
  const baseUrlReverseGeo="https://apis.mappls.com/advancedmaps/v1"
  const ApiKey=process.env.API_KEY_GMAPS;
  
  useEffect(() => {
    function renderMap() {
      const map = new mappls.Map('map', {zoom:3});
      map.addListener("click", function(e) {   
        var marker = new mappls.Marker({
          map: map,
          position: {"lat":e.lngLat.lat,"lng":e.lngLat.lng}
          });
        const answerLat = e.lngLat.lat;
        const answerLng = e.lngLat.lng;
        setAnswerCoords({ lat: answerLat, lng: answerLng });
      });
    }
    renderMap();
  }, []);

  useEffect(() => {
    if (answerCoords.lat !== "" && answerCoords.lng !== "") {
      try {
        var address;
        axios.get(`${baseUrlReverseGeo}/${ApiKey}/rev_geocode`,{
          params:{
            lat:answerCoords.lat,
            lng:answerCoords.lng
          }
        })
        .then((response)=>{
         address=response.data.results[0].formatted_address;
         dispatch(AnswerActions.setUserAnswers({answerCoords,address}));
        })
        .catch((error)=>{
          console.log(error)
        })
      } catch(err) {
        console.log(err);
      }
    }
  }, [answerCoords, dispatch]);
  
  return <>
    <div className="flex w-full h-full">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>  
  </>

}

export default Map;