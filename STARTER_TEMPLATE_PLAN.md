# Fastify Starter Template - Setup Plan

Dokumen ini berisi rencana lengkap untuk mengembangkan starter template Fastify yang production-ready.

---

## 📋 Table of Contents

1. [Environment & Package Setup](#environment--package-setup)
2. [Project Structure](#project-structure)
3. [Core Dependencies](#core-dependencies)
4. [Configuration Files](#configuration-files)
5. [Development Tools](#development-tools)
6. [Application Architecture](#application-architecture)
7. [API & Routes Setup](#api--routes-setup)
8. [Error Handling & Validation](#error-handling--validation)
9. [Logging](#logging)
10. [Database Integration](#database-integration)
11. [Security](#security)
12. [Testing](#testing)
13. [Documentation](#documentation)
14. [Deployment](#deployment)

---

## 1. Environment & Package Setup

### Environment Variables
- [ ] Setup `.env` file untuk development
- [ ] Setup `.env.example` sebagai template
- [ ] Install package `dotenv` untuk load environment variables
- [ ] Create `.env.development`, `.env.production`, `.env.test` untuk berbagai environment
- [ ] Setup environment validation di startup

### Package Manager
- [ ] Ensure pnpm@10.0.0+ digunakan
- [ ] Node.js version >= 20.0.0

### Package.json Updates
- [ ] Update metadata (name, version, description, author)
- [ ] Add proper npm scripts:
  - `dev`: Run dengan nodemon
  - `build`: Build TypeScript
  - `start`: Run production build
  - `lint`: Run ESLint
  - `lint:fix`: Fix ESLint issues
  - `test`: Run unit tests
  - `test:watch`: Run tests in watch mode
  - `type-check`: Check TypeScript types

---

## 2. Project Structure

### Current Structure
```
src/
├── main.ts                      # Entry point
├── app/
│   ├── controllers/             # HTTP handlers
│   ├── routes/                  # Route definitions
│   ├── services/                # Business logic
│   └── repositories/            # Data access layer
├── config/
│   ├── config.ts                # Main config
│   └── database.ts              # Database config (TBD)
├── middleware/                  # Custom middlewares (TBD)
├── utils/                       # Helper functions
├── types/                       # TypeScript types
└── constants/                   # Constants & enums
```

### Directories to Create
- [ ] `src/middleware/` - Custom middleware functions
- [ ] `src/types/` - TypeScript interfaces & types
- [ ] `src/constants/` - Enums, constants, messages
- [ ] `src/decorators/` - TypeScript decorators (optional)
- [ ] `tests/` - Unit & integration tests

---

## 3. Core Dependencies

### Production Dependencies
- [ ] `fastify@^5.8.2` ✅ (already installed)
- [ ] `dotenv` - Environment variables management
- [ ] `@fastify/helmet` - Security headers
- [ ] `@fastify/cors` - CORS handling
- [ ] `joi` or `zod` - Input validation
- [ ] `pino` or Winston - Logging
- [ ] `@fastify/jwt` - JWT authentication (optional)
- [ ] `pg` or `mysql2` - Database driver (based on choice)
- [ ] `prisma` - ORM (optional, can use raw SQL)

### Development Dependencies
- [ ] `@types/node@^20` - Node.js types
- [ ] `nodemon@^3` - Auto-reload
- [ ] `ts-node@^10.9.2` ✅ (already installed)
- [ ] `typescript@^5.9.3` ✅ (already installed)
- [ ] `tsc-alias@^1.8.16` ✅ (already installed)
- [ ] `@testing-library/jest-dom` - Testing utilities
- [ ] `jest` - Testing framework
- [ ] `jest-extended` - Jest matchers
- [ ] `vitest` - Alternative faster test runner

---

## 4. Configuration Files

### tsconfig.json
- [ ] Ensure strict mode enabled
- [ ] Configure path aliases (`@/`) ✅ (already configured)
- [ ] Set proper module output
- [ ] Enable source maps for debugging

### .eslintrc / eslint.config.mjs
- [ ] Configure TypeScript ESLint rules
- [ ] Add Prettier integration
- [ ] Define custom rules for the project

### nodemon.json
- [ ] Monitor `src` folder ✅ (already configured)
- [ ] Ignore test files ✅ (already configured)
- [ ] Configure exec command ✅ (already configured)

### .env Setup
- [ ] Create `.env.example` dengan template variables:
  ```
  NODE_ENV=development
  PORT=3000
  HOST=localhost
  LOG_LEVEL=debug
  DATABASE_URL=
  JWT_SECRET=
  ```

### prettier.config.js (TBD)
- [ ] Setup code formatting preferences
- [ ] Configure with ESLint integration

---

## 5. Development Tools

### nodemon Configuration
- [ ] Monitor source files
- [ ] Reload on changes
- [ ] Execute via ts-node

### TypeScript Configuration
- [ ] Strict type checking
- [ ] Path aliases for imports
- [ ] Source maps for debugging

### Linting & Formatting
- [ ] ESLint configuration ✅ (basic setup exists)
- [ ] Prettier for code formatting
- [ ] Pre-commit hooks (husky)

### Debug Configuration
- [ ] Create `.vscode/launch.json` untuk debugging
- [ ] Configure breakpoints & inspection

---

## 6. Application Architecture

### Bootstrap (main.ts)
- [ ] Initialize Fastify instance
- [ ] Load environment variables
- [ ] Setup middleware
- [ ] Register plugins
- [ ] Start server gracefully

### Middleware Stack
- [ ] Helmet (security headers)
- [ ] CORS
- [ ] Request logging
- [ ] Request ID tracking
- [ ] Error handling middleware
- [ ] Compression (optional)

### Service Layer Pattern
```
Routes → Controllers → Services → Repositories → Database
```
- [ ] Controllers: Handle HTTP requests/responses
- [ ] Services: Contain business logic
- [ ] Repositories: Handle data access
- [ ] Controllers tidak boleh langsung access database

### Dependency Injection (Optional)
- [ ] Setup basic DI container
- [ ] Register services & repositories
- [ ] Inject dependencies ke controllers

---

## 7. API & Routes Setup

### Route Organization
- [ ] Group routes by feature/domain
- [ ] Create example routes structure
- [ ] Define route versioning strategy (v1, v2, etc.)

### Controller Pattern
- [ ] Request validation
- [ ] Error handling
- [ ] Response formatting

### Example Controllers (TBD)
- [ ] Health check endpoint
- [ ] Example CRUD endpoints (with validation)

### Response Format (Standardized)
```typescript
{
  success: boolean
  data: any | null
  error: string | null
  message: string
  timestamp: string
}
```

---

## 8. Error Handling & Validation

### Input Validation
- [ ] Setup Joi/Zod untuk validation
- [ ] Create validation middleware
- [ ] Validator hooks per route

### Error Handling
- [ ] Create custom error classes
- [ ] Setup global error handler
- [ ] Implement error response formatting
- [ ] Handle async errors with try-catch wrappers

### HTTP Exception Handling
- [ ] 400 - Bad Request
- [ ] 401 - Unauthorized
- [ ] 403 - Forbidden
- [ ] 404 - Not Found
- [ ] 409 - Conflict
- [ ] 500 - Internal Server Error

### Validation Examples
- [ ] Request body validation
- [ ] Query parameter validation
- [ ] URL parameter validation
- [ ] Custom validation rules

---

## 9. Logging

### Logger Setup
- [ ] Choose logger (Pino/Winston)
- [ ] Configure log levels (debug, info, warn, error)
- [ ] Setup different transports (console, file)
- [ ] Production vs development config

### Logging Patterns
- [ ] Request/response logging
- [ ] Error logging dengan stack trace
- [ ] Performance logging
- [ ] Database query logging

### Log Format
- [ ] Structured logging (JSON)
- [ ] Include correlation IDs
- [ ] Timestamp every log

---

## 10. Database Integration

### Database Choice Options
- [ ] PostgreSQL (recommended)
- [ ] MySQL
- [ ] SQLite (development only)
- [ ] MongoDB (if NoSQL needed)

### ORM/Query Builder Choice
- [ ] Prisma (recommended, type-safe)
- [ ] TypeORM
- [ ] SQL.js / Drizzle ORM
- [ ] Raw SQL dengan library

### Repository Pattern Implementation
- [ ] Create base repository class
- [ ] Implement repository methods:
  - `findById(id)`
  - `findAll(filters, pagination)`
  - `create(data)`
  - `update(id, data)`
  - `delete(id)`
- [ ] Error handling di repository layer

### Database Seeding (TBD)
- [ ] Create seed scripts
- [ ] Setup test data

### Migrations (TBD)
- [ ] If Prisma: use Prisma migrations
- [ ] If raw SQL: use migration tool

---

## 11. Security

### Security Headers
- [ ] Helmet.js untuk security headers ✅
- [ ] HTTPS/TLS configuration
- [ ] HSTS headers

### Authentication & Authorization (TBD)
- [ ] JWT token implementation
- [ ] Refresh token strategy
- [ ] Role-based access control (RBAC)
- [ ] Permission checking middleware

### Input Validation & Sanitization
- [ ] Validate all inputs
- [ ] Sanitize user inputs
- [ ] Prevent SQL injection (use prepared statements)
- [ ] XSS protection

### Rate Limiting
- [ ] Setup rate limit middleware
- [ ] Configure per route/endpoint

### CORS Configuration
- [ ] Setup allowed origins
- [ ] Configure allowed methods
- [ ] Handle credentials

### Environment Secrets
- [ ] Never commit secrets to git
- [ ] Use `.env` files properly
- [ ] Rotate secrets regularly

---

## 12. Testing

### Testing Setup
- [ ] Choose test runner (Jest/Vitest)
- [ ] Configure test environment
- [ ] Setup test database (test fork)
- [ ] Setup test utilities

### Unit Tests
- [ ] Services layer tests
- [ ] Utilities tests
- [ ] Helper functions tests
- [ ] Target: 80%+ coverage

### Integration Tests
- [ ] Controller tests
- [ ] API endpoint tests
- [ ] Database interaction tests
- [ ] Middleware tests

### E2E Tests (Optional)
- [ ] Full API flow tests
- [ ] Authentication flow tests
- [ ] Error scenarios

### Test Structure
```
tests/
├── unit/
│   ├── services/
│   └── utils/
├── integration/
│   ├── controllers/
│   └── repositories/
└── e2e/
    └── api/
```

---

## 13. Documentation

### README.md
- [ ] Project description
- [ ] Installation instructions
- [ ] Setup guide
- [ ] Running the application
- [ ] API documentation reference

### API Documentation
- [ ] OpenAPI/Swagger setup
- [ ] Auto-generate API docs dari code
- [ ] Example requests/responses

### Code Documentation
- [ ] JSDoc comments untuk functions
- [ ] README di setiap folder
- [ ] Setup guide

### Changelog
- [ ] CHANGELOG.md untuk track changes
- [ ] Version history

---

## 14. Deployment

### Docker (Optional)
- [ ] Create Dockerfile
- [ ] Create docker-compose.yml untuk dev
- [ ] Optimize layers

### Build & Optimization
- [ ] Minification
- [ ] Tree-shaking
- [ ] Environment-specific builds

### Environment-Specific Config
- [ ] Development config
- [ ] Staging config
- [ ] Production config

### CI/CD (Optional)
- [ ] GitHub Actions workflow
- [ ] Automated testing on PR
- [ ] Automated deployment

### Monitoring & Logging (Production)
- [ ] Setup application monitoring
- [ ] Error tracking (Sentry, etc.)
- [ ] Performance monitoring

### Graceful Shutdown
- [ ] Handle SIGTERM signals
- [ ] Close database connections
- [ ] Complete in-flight requests

---

## 🚀 Quick Start Checklist

### Phase 1: Core Setup (Foundation)
- [ ] Install dependencies
- [ ] Setup .env files
- [ ] Configure logging
- [ ] Setup error handling
- [ ] Create example routes

### Phase 2: Development Infrastructure
- [ ] Setup validation
- [ ] Configure database
- [ ] Create repository pattern
- [ ] Setup middleware stack

### Phase 3: Production Ready
- [ ] Security setup (JWT, RBAC)
- [ ] Setup testing framework
- [ ] Documentation
- [ ] CI/CD pipeline

### Phase 4: Advanced Features
- [ ] Caching strategy
- [ ] Queue system (optionalfor async tasks)
- [ ] File upload handling
- [ ] Background jobs

---

## 📝 Configuration Summary

| Aspect | Status | Tool/Package |
|--------|--------|--------------|
| TypeScript | ✅ Configured | typescript@5.9.3 |
| Fastify | ✅ Installed | fastify@5.8.2 |
| Development | ✅ Configured | nodemon + ts-node |
| Linting | ✅ Basic Setup | ESLint + TypeScript |
| Path Aliases | ✅ Configured | `@/` alias |
| Environment | 🔄 Partial | .env files exist |
| Database | ⏳ TBD | - |
| Logging | ⏳ TBD | - |
| Validation | ⏳ TBD | - |
| Testing | ⏳ TBD | - |
| Security | ⏳ TBD | - |
| Documentation | ⏳ TBD | - |

---

## 📚 Recommended Next Steps

1. **Install core dependencies** (dotenv, helmet, cors, zod/joi)
2. **Setup environment variables** dengan proper validation
3. **Implement logging system** dengan Pino/Winston
4. **Create middleware stack** (helmet, cors, logging, error handling)
5. **Setup database layer** dengan chosen ORM
6. **Create example resources** (CRUD endpoints as reference)
7. **Setup validation** untuk input
8. **Configure testing framework**
9. **Write documentation**
10. **Setup CI/CD**

---

**Last Updated:** March 15, 2026
**Status:** Planning Phase ✅
