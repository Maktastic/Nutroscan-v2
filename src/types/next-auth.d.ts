import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    role?: string
    onboardingCompleted?: boolean
  }

  interface Session {
    user: {
      id: string
      role: string
      onboardingCompleted: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: string
    onboardingCompleted: boolean
  }
}
