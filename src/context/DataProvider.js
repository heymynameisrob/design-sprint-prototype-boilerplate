import React, { useState, useContext } from 'react';

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);  

  
  const getData = () => {    
    const data = 'Hello'
    setData(data);
  }

  return (
    <DataContext.Provider value={{
      data, getData,
    }} {...props} />
  )
}

const useData = () => React.useContext(DataContext)

export { DataProvider, useData }