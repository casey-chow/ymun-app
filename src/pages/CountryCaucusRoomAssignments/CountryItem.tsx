import React from 'react';
import { IonItem, IonLabel, IonNote, isPlatform } from '@ionic/react';
import { useCache } from 'rest-hooks';
import CountryResource from '../../resources/country';
import LocationResource from '../../resources/location';

export interface CountryItemProps {
  country: CountryResource;
}

const styles = {
  mdNote: {
    padding: '2em',
  },
};

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  const location = useCache(LocationResource.detailShape(), {
    id: country.country_caucus_location,
  });

  return (
    <IonItem routerLink={`/locations/${country.country_caucus_location}`}>
      <IonLabel>{country.name}</IonLabel>
      <IonNote
        class="ion-text-wrap"
        style={isPlatform('android') ? styles.mdNote : {}}
      >
        {location && location.name}
      </IonNote>
    </IonItem>
  );
};

export default CountryItem;
