'use client' 
import { SessionProvider } from 'next-auth/react'

interface ProviderProps { 
  children: React.ReactNode
}

export const Provider = ({children}: ProviderProps ) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>   

  )
}
