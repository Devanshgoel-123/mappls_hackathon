import React from 'react';
import { useSelector } from 'react-redux';
const MapWidget = () => {
  const questionObject=useSelector((store)=>store.askedPlace);
  const lat=questionObject.latitude;
  const lng=questionObject.longitude;
  return (
    <div>
      <iframe
        src={`https://realview.mappls.com/realview_widget/${lat},${lng}?access_token=5fb7616f-3353-430b-b7bc-3a58cf171490&minDistance=1&maxDistance=500&arrow=true&map=true&zoomControls=true&controls=true&mapWidth=200&mapHeight=200`}
        style={{ width: '100%', height: '80vh' }}
        title="embed Example"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapWidget;
