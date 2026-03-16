import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Define a schema for environment variables using Zod
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  APP_NAME: z.string().default('Fastify Starter Template'),
  APP_PORT: z.number().default(3000),
  API_PREFIX: z.string().default('api'),
  FRONTEND_DOMAIN: z.string().default('http://localhost:5173'),
  BACKEND_DOMAIN: z.string().default('http://localhost:3000'),
  DOCS_URL: z.string().default('http://localhost:3000/docs'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  COOKIE_SECRET: z.string().default('your-secret-key'),
});

export type EnvConfig = z.infer<typeof envSchema>;

// Validate environment variables and export the validated config
const validateEnv = () => {
  const validationResult = envSchema.safeParse(process.env);

  if (!validationResult.success) {
    console.error('Environment variable validation failed with the following errors: %s', z.formatError(validationResult.error));
    throw new Error('Invalid environment variables');
  } else {
    console.info('Environment variable validation succeeded.');
    return validationResult.data;
  }
}

export const envConfig = validateEnv();