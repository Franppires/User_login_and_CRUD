import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"


const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    //colocar outras autenticação ex. github
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ], 
  // pages: {
  //   signIn: "/signin" // vai criar
  // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }