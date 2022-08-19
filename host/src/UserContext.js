import React from 'react';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = React.useState({name: 'A'});

  return <UserContext.Provider value={{user, setUser}}>
      {children}
  </UserContext.Provider>
}
 
export const useUser = () => {
  const context = React.useContext(UserContext);
  return context;
}
