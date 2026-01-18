import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/mongodb"; 
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
  GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const usersCollection = await dbConnect("users");
        const user = await usersCollection.findOne({ email: credentials.email });

        // LOGGING FOR DEBUGGING (Check your terminal)
        console.log("User found in DB:", user ? "YES" : "NO");

        if (user && user.password === credentials.password) {
          return { id: user._id.toString(), name: user.name, email: user.email };
        }
        
        return null;
      },
    }),
  ],
callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };