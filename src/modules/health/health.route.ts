import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { healthController } from './health.controller';

/**
 * Health Routes Plugin
 *
 * Fastify plugin pattern untuk health check routes
 * Plugin ini akan di-register di main.ts
 *
 * Fastify plugin adalah cara yang proper untuk:
 * - Organize related routes
 * - Reusable module structure
 * - Plugin composition dan inheritance
 * - Proper type safety
 */

const healthRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance
) => {
  /**
   * Health Check Endpoint
   *
   * GET /health
   *
   * Schema (optional tapi recommended untuk validation & documentation):
   */
  fastify.get(
    '/health',
    {
      // Schema untuk OpenAPI/Swagger documentation
      schema: {
        description: 'Application health check endpoint',
        tags: ['Health'],
        response: {
          200: {
            description: 'Application is healthy',
            type: 'object',
            properties: {
              status: {
                type: 'string',
                enum: ['healthy', 'degraded', 'unhealthy'],
              },
              timestamp: { type: 'string' },
              uptime: { type: 'number' },
              environment: { type: 'string' },
              checks: {
                type: 'object',
                additionalProperties: { type: 'boolean' },
              },
            },
          },
          503: {
            description: 'Application is degraded or unhealthy',
            type: 'object',
            properties: {
              status: {
                type: 'string',
                enum: ['degraded', 'unhealthy'],
              },
              timestamp: { type: 'string' },
              uptime: { type: 'number' },
              environment: { type: 'string' },
            },
          },
        },
      },
    },
    (request, reply) => healthController.checkHealth(request, reply)
  );

  fastify.log.info('Health routes registered');
};

export default healthRoute;