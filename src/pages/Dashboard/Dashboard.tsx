import './Dashboard.css';

import { Account } from './widgets';
import { AuthRedirectWrapper } from 'wrappers';
import { Card } from 'components/Card';
import React from 'react';

type WidgetsType = {
  title: string;
  widget: (props: any) => JSX.Element;
  description?: string;
  props?: { receiver?: string };
  reference: string;
};

const WIDGETS: WidgetsType[] = [
  {
    title: 'Account',
    widget: Account,
    description: 'Connected account details',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  }
];

export const Dashboard = () => (
  <AuthRedirectWrapper>
    <div className="dashboard-container">
      {WIDGETS.map((element) => {
        const { title, widget: MxWidget, description, props = {}, reference } = element;

        return (
          <Card key={title} title={title} description={description} reference={reference}>
            <MxWidget {...props} />
          </Card>
          
        );
      })}

    </div>
  </AuthRedirectWrapper>
);
