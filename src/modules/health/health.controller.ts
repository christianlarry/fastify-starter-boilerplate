import { FastifyReply, FastifyRequest } from 'fastify';
import { healthService, HealthStatus } from './health.service';

/**
 * Health Controller
 *
 * Handles HTTP requests untuk health check endpoint
 * Ini adalah layer yang menghubungkan route dengan service
 */

class HealthController {
  /**
   * GET /health
   *
   * Handler untuk health check endpoint
   * Return status kesehatan aplikasi
   *
   * @param request - Fastify request object
   * @param reply - Fastify reply object
   * @returns Health status information
   *
   * @example
   * // Response 200 OK
   * {
   *   "status": "healthy",
   *   "timestamp": "2024-03-16T10:30:00.000Z",
   *   "uptime": 3600,
   *   "environment": "development",
   *   "checks": {
   *     "database": true,
   *     "cache": true
   *   }
   * }
   */
  async checkHealth(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<HealthStatus> {
    request.log.debug('Health check endpoint called');

    const healthStatus = await healthService.checkHealth();

    // Set appropriate status code berdasarkan health status
    // 200: healthy, 503: degraded/unhealthy
    const statusCode =
      healthStatus.status === 'healthy' ? 200 : 503;

    reply.code(statusCode);

    return healthStatus;
  }
}

// Export controller instance
export const healthController = new HealthController();