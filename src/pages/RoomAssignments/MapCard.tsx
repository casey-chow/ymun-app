import React from 'react';
import { useCache } from 'rest-hooks';
import FileResource from '../../resources/file';
import MapResource from '../../resources/map';
import RoomAssignmentsCard from './RoomAssignmentsCard';

export interface MapCardProps {
  readonly map: MapResource;
}

const MapCard: React.FC<MapCardProps> = ({ map }) => {
  const attachment = useCache(FileResource.detailShape(), {
    id: map.attachment,
  });

  const thumbnail =
    attachment &&
    attachment.data.thumbnails.find((thumb) => thumb.width === 300);

  return (
    <RoomAssignmentsCard
      href={`/maps/${map.id}`}
      thumbnailUrl={thumbnail && thumbnail.url}
      title={map.name}
    />
  );
};

export default MapCard;
