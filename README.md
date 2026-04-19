# ComaCare - Patient Management Dashboard

A comprehensive, full-stack dashboard for managing specialized coma patient care with real-time inventory tracking and flexible clinical documentation.

## 🎯 Overview

ComaCare focuses on two critical pillars:
1. **High-Precision Resource Management (Stock)** - Real-time inventory control for medical supplies
2. **Flexible Clinical Documentation (Daily Routine)** - Chronological patient care activity logging

The system aims to reduce human error and improve the quality of patient care through streamlined workflows and historical accuracy.

## 🛠 Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | Next.js 14+ (App Router) | Full-stack web application |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS | Responsive UI design |
| **Database (SQL)** | PostgreSQL | Relational data (Stock, Transactions) |
| **Database (NoSQL)** | MongoDB | Flexible logging (Daily Routines) |
| **ORM** | Prisma | Type-safe database queries (PostgreSQL) |
| **ODM** | Mongoose | MongoDB schema and queries |
| **Containerization** | Docker & Docker Compose | Development environment |

## 📋 Features

### Phase 1: Foundation ✅
- [x] Next.js 14+ project with TypeScript and Tailwind CSS
- [x] Docker Compose setup (PostgreSQL + MongoDB)
- [x] Prisma schema (User, Stock, StockLog models)
- [x] Mongoose schema (RoutineLog with flexible JSON)
- [x] Base layout (Sidebar, Header, Content Area)
- [x] Placeholder pages (Dashboard, Stock, Routine, Settings)
- [x] Health check API endpoint

### Planned: Phase 2 - Backend APIs
- Stock management endpoints
- Routine logging endpoints
- Transaction logging

### Planned: Phase 3 - Frontend Implementation
- Inventory management UI
- Activity logging interface
- Vital signs visualization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or higher
- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ong-korrawiz/patient_care_website.git
   cd patient_care_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Docker containers**
   ```bash
   docker-compose up -d
   ```
   This starts:
   - PostgreSQL on port 5432
   - MongoDB on port 27017

4. **Set up environment variables**
   ```bash
   # Copy .env.local (already configured for Docker)
   # Make sure it contains:
   DATABASE_URL="postgresql://patient_care:secure_password_change_me@localhost:5432/patient_care_db?schema=public"
   MONGODB_URI="mongodb://admin:admin_password_change_me@localhost:27017/patient_care_routine?authSource=admin"
   ```

5. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

   Visit: **http://localhost:3000**

## 📁 Project Structure

```
patient_care_website/
├── app/
│   ├── layout.tsx              # Root layout with Sidebar + Header
│   ├── page.tsx                # Home redirect
│   ├── dashboard/page.tsx       # Dashboard page
│   ├── stock/page.tsx           # Stock management page
│   ├── routine/page.tsx         # Daily routine page
│   ├── settings/page.tsx        # Settings page
│   ├── api/
│   │   └── health/route.ts      # Health check endpoint
│   ├── generated/
│   │   └── prisma/              # Prisma Client (auto-generated)
│   └── globals.css              # Global styles
├── components/
│   ├── Sidebar.tsx              # Navigation sidebar
│   └── Header.tsx               # Header with breadcrumbs
├── lib/
│   ├── mongodb.ts               # MongoDB connection helper
│   ├── schemas/
│   │   └── routineLog.ts        # Mongoose RoutineLog schema
│   └── types.ts                 # TypeScript type definitions
├── prisma/
│   ├── schema.prisma            # PostgreSQL schema definition
│   ├── migrations/              # Migration history
│   └── prisma.config.ts         # Prisma configuration
├── docker-compose.yml           # Docker services
├── init-mongo.js                # MongoDB initialization script
├── .env                         # Environment (PostgreSQL URL)
├── .env.local                   # Local environment (MongoDB URL)
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind CSS config
└── next.config.ts               # Next.js config
```

## 🗄 Database Schema

### PostgreSQL (Prisma)

#### User
```typescript
{
  id: string (unique)
  name: string
  email: string (unique)
  password: string (optional)
  role: 'nurse' | 'doctor' | 'caregiver' (default: 'nurse')
  active: boolean (default: true)
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Stock
```typescript
{
  id: string (unique)
  name: string
  quantity: number (default: 0)
  unit: string (e.g., "pieces", "ml", "boxes")
  minLevel: number (alert threshold)
  notes: string (optional)
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### StockLog
```typescript
{
  id: string (unique)
  stockId: string (foreign key → Stock)
  action: 'IN' | 'OUT'
  quantity: number
  notes: string (optional)
  userId: string (foreign key → User)
  timestamp: DateTime
}
```

### MongoDB (Mongoose)

#### RoutineLog
```typescript
{
  _id: ObjectId
  patientId: string
  activityType: 'feeding' | 'turning' | 'suctioning' | 'cleaning' | 'vitals' | 'other'
  details: {
    // Flexible JSON object for activity-specific data
    // Examples:
    // Feeding: { volume: 250, type: 'tube', tolerance: 'well' }
    // Turning: { position: 'left', duration: 30 }
    // Vitals: { bp: '120/80', hr: 72, spo2: 98, temp: 37.2 }
  }
  timestamp: DateTime
  userId: string
  notes: string (optional)
  createdAt: DateTime
  updatedAt: DateTime
}
```

## 🔌 API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns system status
  - Response: `{ status: "ok", timestamp: ISO8601, uptime: number }`

### Coming Soon (Phase 2)
- **GET** `/api/stock` - List all inventory items
- **POST** `/api/stock` - Create new item
- **PUT** `/api/stock/:id` - Update item
- **DELETE** `/api/stock/:id` - Delete item
- **POST** `/api/stock/log` - Log stock transaction
- **GET** `/api/routine` - List routine activities
- **POST** `/api/routine` - Log patient activity

## 🐳 Docker Commands

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# View containers
docker-compose ps

# Reset databases (⚠️ deletes data)
docker-compose down -v
docker-compose up -d
```

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript checks
npx tsc --noEmit

# Format code
npx prettier --write .

# Prisma commands
npx prisma generate        # Generate Prisma Client
npx prisma migrate dev     # Create and apply migrations
npx prisma studio         # Open Prisma Studio (GUI)
```

## 📚 Database Connections

### PostgreSQL
- **Host**: localhost
- **Port**: 5432
- **User**: patient_care
- **Password**: secure_password_change_me
- **Database**: patient_care_db

```bash
# Connect via psql
psql postgresql://patient_care:secure_password_change_me@localhost:5432/patient_care_db
```

### MongoDB
- **Host**: localhost
- **Port**: 27017
- **User**: admin
- **Password**: admin_password_change_me
- **Database**: patient_care_routine
- **Auth Source**: admin

```bash
# Connect via mongosh
mongosh "mongodb://admin:admin_password_change_me@localhost:27017/patient_care_routine?authSource=admin"
```

## 📝 Environment Variables

Create `.env.local` in the project root:

```bash
# PostgreSQL (Docker)
DATABASE_URL="postgresql://patient_care:secure_password_change_me@localhost:5432/patient_care_db?schema=public"

# MongoDB (Docker)
MONGODB_URI="mongodb://admin:admin_password_change_me@localhost:27017/patient_care_routine?authSource=admin"

# Application
NODE_ENV="development"
```

⚠️ **Important**: Never commit `.env.local` to version control. Sensitive credentials should be managed securely.

## 🎨 UI Components

### Sidebar
- Navigation menu with active state detection
- Links: Dashboard, Stock Management, Daily Routine, Settings
- Responsive design with Tailwind CSS

### Header
- Breadcrumb navigation
- User info display
- Avatar placeholder

### Pages
All pages feature a clean, professional design with:
- Clear page titles and descriptions
- Responsive grid layouts
- Interactive elements (buttons, forms)
- Placeholder content ready for Phase 2 implementation

## 🔐 Security Considerations

- [ ] Authentication/Authorization (Phase 3)
- [ ] Password hashing (Phase 3)
- [ ] Input validation (Phase 2+)
- [ ] SQL injection prevention (Prisma handles this)
- [ ] CORS configuration (as needed)
- [ ] Rate limiting (Phase 3)
- [ ] Audit logging (Phase 2+)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -m "feat: description"`
3. Push to remote: `git push origin feature/feature-name`
4. Open a Pull Request

## 📄 License

[Add your license here - e.g., MIT, GPL, etc.]

## 👨‍💻 Developer Notes

### Prisma Workflow
- Schema is defined in `prisma/schema.prisma`
- Changes are tracked as migrations in `prisma/migrations/`
- Client is generated to `app/generated/prisma`

### Mongoose Workflow
- Schemas defined in `lib/schemas/`
- MongoDB connection managed in `lib/mongodb.ts`
- Models are imported directly from schema files

### TypeScript
- Centralized types in `lib/types.ts`
- Prisma generates types automatically
- Mongoose interfaces defined in schema files

## 📞 Support

For issues or questions:
- GitHub Issues: [Create an issue](https://github.com/Ong-korrawiz/patient_care_website/issues)
- Documentation: See project files and inline comments

## 🚦 Project Roadmap

### Phase 1: Foundation ✅
- Project structure, databases, base layout

### Phase 2: Backend Development 🔄
- Stock API endpoints
- Routine API endpoints
- Server actions and business logic

### Phase 3: Frontend Implementation 📅
- Inventory management UI
- Activity logging interface
- Vital signs visualization
- Authentication/RBAC

### Phase 4: Advanced Features 📅
- Medication scheduler
- Advanced analytics
- Mobile app support
- Real-time notifications

---

**Last Updated**: April 19, 2026  
**Version**: 0.1.0 (Phase 1)  
**Repository**: https://github.com/Ong-korrawiz/patient_care_website
