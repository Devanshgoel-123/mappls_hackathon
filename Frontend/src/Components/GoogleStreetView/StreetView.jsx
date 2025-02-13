import React, { useEffect, useState } from "react";
import Streetview from "react-google-streetview";
import { useSelector } from "react-redux";

function StreetViewMap() {
  const googleMapsKey =import.meta.env.VITE_API_GMAPS_KEY;
   const questionObject=useSelector((store)=>store.askedPlace);
  const lat=questionObject.latitude;
  const lng=questionObject.longitude;
  console.log(lat,lng)
  const StreetMapOptions = {
    position: { lat:parseFloat(lat), lng:parseFloat(lng) },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    disableDefaultUI: true,
  };
  // console.log("street View")
  return (
    <div className={`w-full h-full rounded-lg`}>
      <div className="w-full h-full rounded-2xl overflow-hidden">
        <Streetview
          apiKey={googleMapsKey}
          streetViewPanoramaOptions={StreetMapOptions}
        />
      </div>
    </div>
  );
}
export default StreetViewMap;
