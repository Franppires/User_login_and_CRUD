
import { UserProvider } from '@/context/users/users'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, 
  // Kaushan_Script 
} from 'next/font/google'
import { Providers } from '@/providers/providers'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

// export const kaushan = Kaushan_Script({ 
//   subsets: ['latin'],
//   variable: '--font-kaushan',
//   weight: ['400']  
  
// })

export const metadata: Metadata = {
  title: 'User Login and Crud',
  description: 'User Login and Crud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
