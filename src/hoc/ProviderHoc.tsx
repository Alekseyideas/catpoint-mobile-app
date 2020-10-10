import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';

export const MainProviderWrapper = (Component: any): Element => {
  return <Provider store={store}>{Component}</Provider>;
};
