import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStoredState, PersistConfig } from 'redux-persist';

type GetStoredStateFunction = <S>(
  config: PersistConfig<S, any, any, any>,
) => Promise<S | undefined>;

const getStoredStateAsync: GetStoredStateFunction = async config => {
  return (getStoredState(config) as Promise<any>).catch(err => {
    return getStoredState({ ...config, storage: AsyncStorage });
  });
};

export default getStoredStateAsync;
