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
        fontFamily: "'Verdana', sans-serif",
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '15px',
      }}
    >
      <IonText color={color}>{children}</IonText>
    </h2>
  );
};

export default SectionHeader;
