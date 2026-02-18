import 'dotenv/config';

import { neon, neonConfig} from "@neondatabase/serverless"

import {drizzle} from "drizzle-orm/neon-http";

const sql = process.env.SQL_URL;

const db = drizzle(sql);

export {db, sql};