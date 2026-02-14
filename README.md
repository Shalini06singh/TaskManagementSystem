🗂️ Task Management System – Full Stack Application

Project Link: https://task-management-system-bkk1-73w0p09nd.vercel.app/

A production-ready full-stack Task Management system built using React, Node.js, Express, Prisma ORM, and PostgreSQL (Supabase).

This project demonstrates end-to-end application development including secure authentication, protected API architecture, cloud database integration, and scalable backend configuration using connection pooling and direct database access strategies.

# 🚀 Key Highlights

* Designed and implemented a secure JWT-based authentication system
* Built RESTful APIs with protected routes using Express middleware
* Modeled relational database schema using Prisma ORM
* Integrated Supabase PostgreSQL with connection pooling + direct migration strategy
* Solved real-world cloud database connectivity issues
* Structured full-stack application using scalable folder architecture

---

# 🧰 Tech Stack

### Frontend

* React
* Axios
* React Router

### Backend

* Node.js
* Express.js
* Prisma ORM
* JWT Authentication
* bcrypt
* dotenv
* CORS

### Database

* PostgreSQL
* Supabase (Cloud Hosted)

---

# 🏗️ System Architecture

```
React Client
      ↓
Express REST API
      ↓
Prisma ORM
      ↓
PostgreSQL (Supabase Cloud)
```

This architecture separates concerns clearly between presentation, business logic, and data persistence layers.

---

# 🔐 Authentication & Security

* Passwords hashed using bcrypt before storage
* JWT token generation on login
* Token-based authorization middleware
* Protected task routes (user-specific access)
* Environment variables for sensitive configuration
* SSL-enabled Supabase connection

---

# 📊 Database Design

Relational schema modeled using Prisma:

```prisma
model User {
  id       String  @id @default(uuid())
  email    String  @unique
  password String
  tasks    Task[]
}

model Task {
  id        String   @id @default(uuid())
  title     String
  completed Boolean  @default(false)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
```

### Design Decisions

* UUID-based primary keys
* One-to-many relationship between User and Task
* Default values for task completion state
* Enforced unique user emails at database level

---

# 🗄️ Supabase Integration Strategy

While integrating Prisma with Supabase, connection pooling limitations were identified.

### Problem

Supabase pooler (port 6543) does not support schema push operations.

### Solution

Implemented dual-database configuration:

```env
DATABASE_URL   → Connection pooling (runtime)
DIRECT_URL     → Direct DB connection (migrations)
```

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

This ensures:

* Efficient connection handling in production
* Stable migration and schema updates
* SSL-secured database communication

---

# 📡 REST API Endpoints

## Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Authenticate user |

## Task Management (Protected)

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | /api/tasks     | Fetch user tasks |
| POST   | /api/tasks     | Create task      |
| PUT    | /api/tasks/:id | Update task      |
| DELETE | /api/tasks/:id | Delete task      |

---

# 🖥️ Frontend Responsibilities

* Login & registration forms
* Token storage in localStorage
* Axios interceptor for Authorization header
* Task dashboard UI
* CRUD operation integration with backend API

---

# 📁 Project Structure

```
root/
│
├── frontend/
│
└── backend/
    ├── prisma/
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── middleware/
    │   └── index.js
    └── .env
```

The backend follows modular separation for maintainability and scalability.

---

# ▶️ Running Locally

## Backend

```bash
cd backend
npm install
npx prisma db push
npm run dev
```

Runs at:

```
http://localhost:5000
```

## Frontend

```bash
cd frontend
npm install
npm start
```

Runs at:

```
http://localhost:3000
```




