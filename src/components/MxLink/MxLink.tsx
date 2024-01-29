import './MxLink.css'

import { Link } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import { WithClassnameType } from 'types';

interface MxLinkPropsType extends PropsWithChildren, WithClassnameType {
  to: string;
}

export const MxLink = ({
  to,
  children,
  className = 'mx-link'
}: MxLinkPropsType) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
