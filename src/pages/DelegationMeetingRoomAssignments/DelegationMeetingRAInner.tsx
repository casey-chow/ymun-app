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
import React, { useCallback, useMemo, useState } from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import DelegationResource from '../../resources/delegation';
import LocationResource from '../../resources/location';
import DelegationItem from './DelegationItem';

const DelegationMeetingRAInner: React.FC = () => {
  const delegations = useResource(DelegationResource.listShape(), {
    sort: 'name',
  });
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

  const delegationsByLetter: [string, DelegationResource[]][] = useMemo(() => {
    const filtered = searchbarText
      ? delegations.filter((x) => x.name.toLowerCase().includes(searchbarText))
      : delegations;
    const grouped = _.groupBy(filtered, (x) => x.name[0].toUpperCase());
    const letters = _.keys(grouped).sort();

    return letters.map((letter) => [letter, grouped[letter]]);
  }, [delegations, searchbarText]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/rooms" />
          </IonButtons>
          <IonTitle>Delegations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Delegations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar animated={true} onIonInput={searchbarChanged} />
        <IonList lines="full">
          {delegationsByLetter.map(([letter, delegationsForLetter]) => (
            <IonItemGroup key={letter}>
              <IonItemDivider>
                <IonLabel>{letter}</IonLabel>
              </IonItemDivider>
              {delegationsForLetter.map((delegation) => (
                <DelegationItem key={delegation.id} delegation={delegation} />
              ))}
            </IonItemGroup>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default DelegationMeetingRAInner;
