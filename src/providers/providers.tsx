'use client'
import { UserProvider } from "@/context/users/users"

export const Providers = ({ children }: { children: React.ReactNode }) =>  { 
  return (

      <UserProvider>{children}</UserProvider>

  ) 

}