import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/**
 *
 * @param handler - this is a function that returns boolean telling the system if default back button action should be prevented
 */
export const useBackHandler = (handler: () => boolean) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
};
