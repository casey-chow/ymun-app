import React from 'react';
import { IonText } from '@ionic/react';

export interface SectionHeaderProps {
  children: React.ReactNode;
  color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  color = 'light',
}) => {
  return (
    <h2
      style={{
        fontFamily: "'Cachet', sans-serif",
        fontSize: '24px',
        marginLeft: '15px',
      }}
    >
      <IonText color={color}>{children}</IonText>
    </h2>
  );
};

export default SectionHeader;
