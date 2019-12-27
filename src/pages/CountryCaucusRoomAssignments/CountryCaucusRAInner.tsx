import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import _ from 'lodash';
import React, { useMemo, useState, useCallback } from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import CountryResource from '../../resources/country';
import LocationResource from '../../resources/location';
import CountryItem from './CountryItem';

const CountryCaucusRAInner: React.FC = () => {
  const countries = useResource(CountryResource.listShape(), { sort: 'name' });
  useRetrieve(LocationResource.listShape(), {});

  const [searchbarText, setSearchbarText] = useState<string | null>(null);
  const searchbarChanged = useCallback(
    (evt) => {
      setSearchbarText(
        evt.target && (evt.target.value as string).toLowerCase()
      );
    },
    [setSearchbarText]
  );

  const countriesByLetter: [string, CountryResource[]][] = useMemo(() => {
    const filtered = searchbarText
      ? _.filter(countries, (x) => x.name.toLowerCase().includes(searchbarText))
      : countries;
    const grouped = _.groupBy(filtered, (x) => x.name[0].toUpperCase());
    const letters = _.keys(grouped);

    return letters.map((letter) => [letter, grouped[letter]]);
  }, [countries, searchbarText]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" collapse>
            <IonBackButton defaultHref="/rooms" />
          </IonButtons>
          <IonTitle>Country Caucus</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonButtons slot="start" collapse>
            <IonBackButton defaultHref="/rooms" text="Getting Around" />
          </IonButtons>
          <IonToolbar>
            <IonTitle size="large">Country Caucus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar animated={true} onIonInput={searchbarChanged} />
        <IonList lines="full">
          {countriesByLetter.map(([letter, countriesForLetter]) => (
            <IonItemGroup key={letter}>
              <IonItemDivider>
                <IonLabel>{letter}</IonLabel>
              </IonItemDivider>
              {countriesForLetter.map((country) => (
                <CountryItem key={country.id} country={country} />
              ))}
            </IonItemGroup>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default CountryCaucusRAInner;
