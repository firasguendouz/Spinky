// Card.tsx

import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { WithClassnameType } from 'types';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface CardType extends React.PropsWithChildren<WithClassnameType> {
  title: string;
  description?: string;
  reference: string;
}

export const Card = (props: CardType) => {
  const { title, children, description } = props;

  return (
    <div className='card' data-testid={props['data-testid']}>
      <h2 className='card-title'>
        {title}
        
      </h2>
      {description && <p className='card-description'>{description}</p>}
      {children}
    </div>
  );
};
