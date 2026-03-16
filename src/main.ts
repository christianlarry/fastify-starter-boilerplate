import fastify from 'fastify';
import { envConfig } from './config/env-config';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyCompress from '@fastify/compress';
import fastifyCookie from '@fastify/cookie'
import { internalErrorHandler } from './core/error-handlers/internal-error.handler';

function bootstrap() {
  const app = fastify({
    logger: true
  });

  // ----- Register Plugins -----
  // CORS configuration - adjust the origin as needed for production
  app.register(fastifyCors, {
    origin: envConfig.CORS_ORIGIN, // Adjust as needed for production
  })
  // Helmet for security headers - adjust the configuration as needed for production
  app.register(fastifyHelmet, {
    contentSecurityPolicy: false // Disable CSP for development; adjust for production as needed
  })
  // Compression for response payloads
  app.register(fastifyCompress, {
    global: true, // Enable compression for all routes
  })
  // Cookie handling with a secret for signed cookies
  app.register(fastifyCookie, {
    secret: envConfig.COOKIE_SECRET, // for cookies signature, required for cookies "signed" option
  })

  // ----- Define Routes -----


  // ----- Error Handler -----
  app.setErrorHandler(internalErrorHandler);

  // Health check route
  app.get('/health', async () => {
    return { status: 'ok' };
  });

  // Start the server
  const PORT = envConfig.APP_PORT;
  app.listen({
    port: PORT,
    host: '0.0.0.0'
  }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`Server is running at ${address}`);
  });
}


bootstrap();