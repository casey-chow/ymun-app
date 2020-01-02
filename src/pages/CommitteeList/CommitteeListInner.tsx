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
import CommitteeResource from '../../resources/committee';
import LocationResource from '../../resources/location';
import CommitteeItem from './CommitteeItem';

const CommitteeListInner: React.FC = () => {
  const committees = useResource(CommitteeResource.listShape(), {});
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

  const committeesByLetter: [string, CommitteeResource[]][] = useMemo(() => {
    const filtered = searchbarText
      ? committees.filter((x) => x.name.toLowerCase().includes(searchbarText))
      : committees;
    const grouped = _.groupBy(filtered, (x) => x.name[0].toUpperCase());
    const letters = _.keys(grouped).sort();

    return letters.map((letter) => [letter, _.sortBy(grouped[letter], 'name')]);
  }, [committees, searchbarText]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/rooms" />
          </IonButtons>
          <IonTitle>Committees</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Committees</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar animated={true} onIonInput={searchbarChanged} />
        <IonList lines="full">
          {committeesByLetter.map(([letter, committeesForLetter]) => (
            <IonItemGroup key={letter}>
              <IonItemDivider>
                <IonLabel>{letter}</IonLabel>
              </IonItemDivider>
              {committeesForLetter.map((committee) => (
                <CommitteeItem key={committee.id} committee={committee} />
              ))}
            </IonItemGroup>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default CommitteeListInner;
