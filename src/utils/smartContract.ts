import { Address, SmartContract } from './sdkDappCore';

import { contractAddress } from 'config/config.testnet';

export const smartContract = new SmartContract({
  address: new Address(contractAddress),
  
});
