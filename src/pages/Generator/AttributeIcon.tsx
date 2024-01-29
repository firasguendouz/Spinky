// AttributeIcon.tsx

import React from 'react';

interface AttributeIconProps {
  type: string;
  src: string;
  onClick: () => void;
}

const AttributeIcon: React.FC<AttributeIconProps> = ({ type, src, onClick }) => {
  return (
    <div className="attribute-icon" onClick={() => onClick(type, src)}>
      <img src={`${process.env.PUBLIC_URL}/${src}`} alt={type} />
    </div>
  );
};

export default AttributeIcon;
