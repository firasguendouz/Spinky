import { chainIdByEnvironment } from '@multiversx/sdk-dapp/constants/network';
import { environment } from 'config/config.testnet';

export const getChainId = () => {
  return chainIdByEnvironment[environment];
};
