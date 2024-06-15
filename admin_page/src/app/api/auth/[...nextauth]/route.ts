import NextAuth, { AuthOptions } from "next-auth";
import {client} from "../../../../components/config/user/api"
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

import CredentialsProvider from "next-auth/providers/credentials";
import Providers from "next-auth/providers"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const {response, data} = await client.post("auth/login", req.body
        )
        const user = await data.data
        // If no error and we have user data, return it
        if (response.status === 200 ) {
          return user
        }
        // Return null if user data could not be retrieved
        return data.message
    }
  })
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? "",
    //   clientSecret: process.env.GOOGLE_SECRET ?? "",
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/api/auth/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: "/" // If set, new users will be directed here on first sign in
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
