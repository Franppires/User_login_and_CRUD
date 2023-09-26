'use client' 

import { useSession } from "next-auth/react"

export default function Form() { 
  const { data: session } = useSession({
    required: true
  })
  return (
    
    <h1>oi</h1>

  )
}