# Fastify Starter Template

A production-ready, type-safe, and well-structured boilerplate for building scalable REST APIs with **Fastify** and **TypeScript**.

## 🚀 Features

- ⚡ **Fastify** - Ultra-fast and low-overhead web framework
- 📘 **TypeScript** - Type-safe development experience
- 🏗️ **Layered Architecture** - Controllers → Services → Repositories pattern
- 🔍 **Path Aliases** - Clean imports with `@/` prefix
- 🔧 **Hot Reload** - Nodemon for instant development feedback
- ✅ **ESLint** - Code quality and consistency
- 📝 **Structured Project** - Organized folder structure for scalability
- 🔐 **Ready for Security** - Foundation for authentication, validation, and more

## 📋 Prerequisites

- **Node.js** `>= 20.0.0`
- **pnpm** `>= 10.0.0` (or npm/yarn)

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Fastify 5.8.2 | Web server & routing |
| Language | TypeScript 5.9.3 | Type-safe development |
| Runtime | Node.js 20+ | JavaScript runtime |
| Package Manager | pnpm 10.0.0 | Fast & efficient package management |
| Development | Nodemon + ts-node | Hot reload & development |
| Linting | ESLint | Code quality |
| Build | tsc + tsc-alias | TypeScript compilation |

## 📁 Project Structure

```
fastify-starter-template/
├── src/
│   ├── main.ts                 # Application entry point
│   ├── app/
│   │   ├── controllers/        # HTTP request handlers
│   │   ├── services/           # Business logic layer
│   │   ├── repositories/       # Data access layer
│   │   └── routes/             # Route definitions
│   ├── config/
│   │   └── config.ts           # Application configuration
│   ├── middleware/             # Custom middlewares (TBD)
│   ├── types/                  # TypeScript interfaces & types
│   ├── constants/              # Constants & enums
│   └── utils/                  # Helper functions & utilities
├── .env                        # Environment variables (local)
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── nodemon.json                # Nodemon configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project metadata & dependencies
└── pnpm-lock.yaml              # Locked dependencies
```

## 🚀 Quick Start

### 1. Clone or Initialize Project

```bash
# If cloning from repository
git clone <repository-url>
cd fastify-starter-template

# Or initialize a new project from this template
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your configuration
# Minimum required:
# NODE_ENV=development
# PORT=3000
# HOST=localhost
```

### 4. Run Development Server

```bash
pnpm dev
```

The server will start at `http://localhost:3000` with hot reload enabled.

### 5. Build for Production

```bash
pnpm build
```

### 6. Run Production Build

```bash
pnpm start
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm start` | Run production build |
| `pnpm lint` | Check code quality with ESLint |
| `pnpm lint:fix` | Fix ESLint issues automatically |
| `pnpm type-check` | Type-check without emitting code |

## 🏛️ Architecture

### Layered Architecture Pattern

```
HTTP Request
    ↓
Routes (Fastify)
    ↓
Controllers (Request handling & validation)
    ↓
Services (Business logic)
    ↓
Repositories (Database access)
    ↓
Database
```

### Key Principles

- **Separation of Concerns**: Each layer has a specific responsibility
- **Type Safety**: Full TypeScript support throughout
- **Scalability**: Easy to add new features without affecting existing code
- **Testability**: Layered structure makes unit testing easier
- **Maintainability**: Clear structure and naming conventions

## 📝 Configuration Files

### `tsconfig.json`

TypeScript compiler configuration with:
- Path aliases (`@/*` → `src/*`)
- CommonJS module output
- ES2020+ target support

### `nodemon.json`

Development server configuration:
- Watches `src` directory
- Hot reload on `.ts` and `.json` changes
- Ignores `.spec.ts` test files

### `eslint.config.mjs`

Code quality rules:
- Recommended ESLint rules
- TypeScript-ESLint recommended rules

### `.env.example`

Template for environment variables:

```
NODE_ENV=development
PORT=3000
HOST=localhost
LOG_LEVEL=debug
DATABASE_URL=
JWT_SECRET=
```

## 💡 Usage Examples

### Creating a New Feature

1. **Create Route** → `src/app/routes/userRoutes.ts`
2. **Create Controller** → `src/app/controllers/UserController.ts`
3. **Create Service** → `src/app/services/UserService.ts`
4. **Create Repository** → `src/app/repositories/UserRepository.ts`

### Basic Controller Example

```typescript
// src/app/controllers/HealthController.ts
import { FastifyRequest, FastifyReply } from 'fastify';

export class HealthController {
  static async check(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(200).send({
      success: true,
      data: { status: 'OK' },
      message: 'Server is healthy',
      timestamp: new Date().toISOString()
    });
  }
}
```

### Basic Service Example

```typescript
// src/app/services/UserService.ts
export class UserService {
  async getUserById(id: string) {
    // Business logic here
    return { id, name: 'John Doe' };
  }

  async createUser(data: unknown) {
    // Validation and creation logic
    return data;
  }
}
```

## 🔐 Security Considerations

This starter template is built with security best practices in mind:

- ✅ TypeScript for type safety
- ⏳ Helmet for security headers (to be configured)
- ⏳ CORS configuration support
- ⏳ Input validation framework ready
- ⏳ JWT authentication ready
- ⏳ Environment variable management

See [STARTER_TEMPLATE_PLAN.md](STARTER_TEMPLATE_PLAN.md) for security setup checklist.

## 📖 Development Guidelines

### Code Style

- Follow ESLint rules
- Use TypeScript with strict mode
- Use `@/` path aliases for imports
- Keep functions small and focused

### Import Examples

```typescript
// ✅ Good - using path alias
import { UserService } from '@/app/services/UserService';

// ❌ Avoid - relative paths
import UserService from '../../../app/services/UserService';
```

### Naming Conventions

- **Files**: PascalCase for classes, camelCase for utilities
- **Classes**: PascalCase (e.g., `UserController`)
- **Functions/Variables**: camelCase (e.g., `getUserById`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_TIMEOUT`)

## 🧪 Testing (Coming Soon)

Planned testing setup:
- Jest or Vitest for unit testing
- Integration testing for APIs
- E2E testing framework

See [STARTER_TEMPLATE_PLAN.md](STARTER_TEMPLATE_PLAN.md) for testing setup checklist.

## 🗺️ Roadmap

See [STARTER_TEMPLATE_PLAN.md](STARTER_TEMPLATE_PLAN.md) for the complete implementation plan including:

- ✅ Phase 1: Core Setup (Done)
- 🔄 Phase 2: Development Infrastructure (In Progress)
- ⏳ Phase 3: Production Ready
- ⏳ Phase 4: Advanced Features

## 📚 Learning Resources

- [Fastify Official Documentation](https://www.fastify.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [RESTful API Best Practices](https://restfulapi.net/)

## 🤝 Contributing

When extending this starter template:

1. Follow the established architecture pattern
2. Add proper TypeScript types
3. Write self-documenting code with comments
4. Update documentation when adding features
5. Run `pnpm lint` before committing

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 📞 Support

For issues, questions, or suggestions:

1. Check [STARTER_TEMPLATE_PLAN.md](STARTER_TEMPLATE_PLAN.md) for setup guidelines
2. Review existing code examples
3. Create an issue on the repository

---

**Happy coding! 🚀**

Built with ❤️ for scalable, type-safe API development.
