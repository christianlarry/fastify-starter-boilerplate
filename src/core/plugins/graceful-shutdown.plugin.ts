import { logger } from "@/config/logger";
import { FastifyInstance } from "fastify/types/instance";

interface PluginOptions {
  cb: () => Promise<void>;
}

export const gracefulShutdownPlugin = (app: FastifyInstance, options: PluginOptions) => {
  // Listen for termination signals (e.g., SIGINT, SIGTERM)
  process.on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully...');

    await options.cb();
    await app.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    logger.info('Received SIGTERM. Shutting down gracefully...');

    await options.cb();
    await app.close();
    process.exit(0);
  });
}