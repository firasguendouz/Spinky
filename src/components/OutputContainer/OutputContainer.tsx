// OutputContainer.tsx

import { Loader } from 'components/sdkDappComponents';
import React from 'react';
import { WithClassnameType } from 'types';
import classNames from 'classnames';

interface OutputContainerPropsType extends React.PropsWithChildren<WithClassnameType> {
  isLoading?: boolean;
}

export const OutputContainer = (props: OutputContainerPropsType) => {
  const { children, isLoading = false, className = 'pixel-padded' } = props;

  return (
    <div
      className={classNames(
        'output-container', // Custom class for pixel styling
        className,
        { 'loading-state': isLoading } // Conditional class for loading state
      )}
      data-testid={props['data-testid']}
    >
      {isLoading ? <div className="loader"><Loader /></div> : children}
    </div>
  );
};
