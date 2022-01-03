import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { app } from "../../../firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
    
//     // ...add more providers here
//   ],
//   secret: process.env.API_KEY, 
//   adapter: PrismaAdapter(prisma),
// });

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
    // ...add more providers here
  ],
  secret: process.env.API_KEY, 
  adapter: FirebaseAdapter(app),
});

