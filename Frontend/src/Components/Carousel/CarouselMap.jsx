import { useEffect} from "react";

const CarosuelMap=(props)=>{
  useEffect(() => {
    function renderMap() {
        map = new mappls.Map('map', {center:{lat:props.lat,lng:props.long} });
    }
    renderMap();
  }, []);

  return <>
    <div className="flex w-full h-full">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>  
  </>

}

export default CarosuelMap;