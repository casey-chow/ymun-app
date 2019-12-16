import { IonIcon, IonItem, IonLabel, IonRippleEffect } from '@ionic/react';
import Interweave from 'interweave';
import { arrowDropdown, arrowDropleft } from 'ionicons/icons';
import React, { useCallback } from 'react';
import { Section } from '../../resources/resourcePage';

interface EventDetailProps {
  readonly section: Section;
  readonly expanded: boolean;
  readonly onClick: (expanded: boolean) => void;
}

const PageSection: React.FC<EventDetailProps> = ({
  section,
  expanded,
  onClick,
}) => {
  const memoizedOnClick = useCallback(() => {
    onClick(expanded);
  }, [expanded, onClick]);

  return (
    <IonItem
      style={{
        cursor: 'pointer',
      }}
      onClick={memoizedOnClick}
      className="ion-activatable"
      button // needed for ripple: https://git.io/JeQM7
      lines="full"
    >
      <IonRippleEffect />

      <IonLabel className="ion-text-wrap">
        <span>{section.title}</span>
        {expanded && <Interweave content={section.body} />}
      </IonLabel>

      <div slot="end" className="ion-text-end">
        {expanded ? (
          <IonIcon icon={arrowDropdown} />
        ) : (
          <IonIcon icon={arrowDropleft} />
        )}
      </div>
    </IonItem>
  );
};

export default PageSection;
