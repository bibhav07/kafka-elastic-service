import {defineConfig} from "drizzle-kit";
import { DB_URL } from "./src/config";

export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    dialect: "postgresql",
    driver: "pglite",
    dbCredentials: {
      url: DB_URL as string,
    },
    verbose: true,
    strict: true


})