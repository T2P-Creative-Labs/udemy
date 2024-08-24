// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// import * as schema from "./schema";

// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(sql, { schema });
import "dotenv/config";
import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../db/schema";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

const db = drizzle(client, { schema });

export default db;
