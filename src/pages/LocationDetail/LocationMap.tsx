import React from 'react';
import PinchToZoom from 'react-pinch-and-zoom';
import { useResource } from 'rest-hooks';
import FileResource from '../../resources/file';

export interface LocationMapProps {
  id?: number;
}

const LocationMap: React.FC<LocationMapProps> = ({ id }) => {
  const map = useResource(FileResource.detailShape(), { id: id || '_' });

  return (
    <PinchToZoom
      debug={false}
      className=""
      minZoomScale={1}
      maxZoomScale={4}
      boundSize={{
        width: 100,
        height: 100,
      }}
      contentSize={{
        width: 100,
        height: 100,
      }}
    >
      <img src={map && map.data.url} alt={map.filename} />
    </PinchToZoom>
  );
};

export default LocationMap;
