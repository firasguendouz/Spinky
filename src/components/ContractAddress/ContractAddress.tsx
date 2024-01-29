import './ContractAddress.css';

import { ACCOUNTS_ENDPOINT, ExplorerLink } from 'components/sdkDappComponents';

import { Label } from 'components/Label';
import { contractAddress } from 'config/config.testnet';

export const ContractAddress = () => {
  return (
    <p>
      <Label>Contract: </Label>
      <ExplorerLink
        page={`/${ACCOUNTS_ENDPOINT}/${contractAddress}`}
        className='border-b border-dotted border-gray-500 hover:border-solid hover:border-gray-800'
      >
        {contractAddress}
      </ExplorerLink>
    </p>
  );
};
