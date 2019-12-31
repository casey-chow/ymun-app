import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource, NetworkErrorBoundary, NetworkError } from 'rest-hooks';
import LocationResource from '../../resources/location';
import SectionHeader from '../../components/SectionHeader';
import LocationMap from './LocationMap';

interface MapDetailInnerProps {
  id: string;
}

const ErrorFallback: React.FC<{ error: NetworkError }> = ({ error }) => (
  <span>No map found.</span>
);

const LocationDetailInner: React.FC<MapDetailInnerProps> = ({ id }) => {
  const location = useResource(LocationResource.detailShape(), { id });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/rooms" />
          </IonButtons>
          <IonTitle>Location</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="map-detail">
        <SectionHeader color="black">{location.name}</SectionHeader>
        <NetworkErrorBoundary fallbackComponent={ErrorFallback}>
          <LocationMap id={location.map} />
        </NetworkErrorBoundary>
      </IonContent>
    </>
  );
};
export default LocationDetailInner;
