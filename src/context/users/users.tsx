import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext({}) 

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('')

  const handleChangeName = useCallback((name: string) => { 
    setName(name)
  }, [])


  return (
    <UserContext.Provider value={{ name, handleChangeName}}>
      {children}
    </UserContext.Provider>
  ) 
}

export const useUserContext = () => useContext(UserContext)