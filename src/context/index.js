import React from 'react';
import {DataProvider} from './DataProvider';

const AppProviders = ({children}) => (
  <DataProvider>
    {children}
  </DataProvider>
)

export default AppProviders