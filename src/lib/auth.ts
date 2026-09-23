import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
  emailAndPassword: { 
    enabled: true, 
  }, 
 user: {
  additionalFields: {
    role: {
      type: "string",
      defaultValue: "farmer",
      input: true,
    },
    status: {
      type: "string",
      defaultValue: "active",
      input: true,
    },
  }
 } 
});