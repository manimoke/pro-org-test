import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.warn("Warning: DATABASE_URL is not set. Database operations will fail if executed.");
}

export const pool = new Pool(connectionString ? { connectionString } : {});
export const db = drizzle(pool, { schema });

export * from "./schema";
