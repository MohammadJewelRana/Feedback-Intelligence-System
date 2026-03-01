import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  gemini_api_key: process.env.GEMINI_API_KEY,
  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASS,
  
};
