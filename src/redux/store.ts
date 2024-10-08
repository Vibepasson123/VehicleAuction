import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import vehiclesSlicer from './vehiclesSlicer';


const middleware = [thunk];
const rootReducer = combineReducers({
    vehiclesData: vehiclesSlicer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [createWhitelistFilter('vehiclesData')],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});
export const persistedStore = persistStore(store);
