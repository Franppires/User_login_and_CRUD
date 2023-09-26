'use client'
import { signIn, useSession } from "next-auth/react"

export const SignIn = () => { 
  const { data: session } = useSession()
  console.log(session)
  return ( 
    <>
    <div className="mt-2 flex  flex-col  gap-4 items-center">
      <p className="text-2xl">Acesse com</p>
      <button className="rounded p-2 bg-customLightPurple flex justify-center w-96	" onClick={() => signIn("google")} >
        <img src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg" alt="Logo Gmail" className="pr-2" width={30}/>
          Google
      </button>
      <button className="rounded p-2 bg-customLightPurple flex justify-center w-96 " onClick={() => signIn("github")} >
        <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="Logo Githib" className="pr-2" width={35}/>
          Github
      </button>
    </div>
    </>
  )
}