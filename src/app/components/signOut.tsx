'use client'
import { signOut, useSession } from "next-auth/react"

export const SignOut = () => { 
  const { data: session } = useSession()
  return ( 
    <>
    {
      session &&  
      <div className="flex  flex-col  gap-4 items-center">
        <button className="cursor-pointer bg-customGreen hover:bg-curstomDarkPurple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center p-2 rounded-3xl text-lg" onClick={() => signOut()}>Sair</button>
      </div>
    }
    </>
  )
}
