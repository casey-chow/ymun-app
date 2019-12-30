import React from 'react';

export interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <h2
      style={{
        color: 'white',
        fontFamily: "'Verdana', sans-serif",
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '15px',
      }}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
