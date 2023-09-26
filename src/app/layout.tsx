// RootLayout.jsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'
import { Provider } from './provider/provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login de Usuário e CRUD',
  description: 'Login de Usuário e CRUD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt" className={inter.className}>
      <body className='bg-gradient-header '>
        <Provider>
          <Header />
          <main className="w-full max-w-screen-xl pt-8  md:flex-row justify-center items-center mx-auto">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
