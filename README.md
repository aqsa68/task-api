# 🗂️ Task Manager API

A full-featured Task Management API built with **Next.js (App Router)**, **Prisma ORM**, **PostgreSQL**, and **JWT Authentication**.

Users can register, log in, create and manage task categories and tasks. Each task is associated with a user and a category, with full CRUD operations and secure authentication using JWT tokens.

---

## 🚀 Features

- 🔐 User authentication (Register, Login, Logout) with JWT
- 🧾 Task category creation (user-specific)
- ✅ Task creation, filtering, updating, deleting
- 🔍 Filter tasks by category or completion status
- 🗃️ PostgreSQL database with Prisma ORM
- 🛡️ Secure API endpoints (token required for most actions)

---

## 📁 Project Structure

/app
/api
/auth → Auth endpoints (register, login, logout)
/categories → Category CRUD routes
/tasks → Task CRUD & filtering routes
/components → Reusable React components
/lib
prisma.ts → Prisma Client configuration
auth.ts → JWT utils
middleware.ts → Token validation
/types
index.ts → TypeScript types

/prisma
schema.prisma → DB schema

.env → Environment variables

yaml
Copy code

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **Prisma ORM**
- **PostgreSQL**
- **JWT** for authentication
- **TypeScript**

---

## 🧑‍💻 Getting Started

### 📦 Prerequisites

- Node.js ≥ 18
- PostgreSQL installed locally or via cloud (e.g. Supabase, Railway)
- Git installed

### 🔧 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/aqsa68/task-api.git
cd task-api
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file:

env
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/taskmanager
JWT_SECRET=your_super_secret_key
Set up the database:

bash
Copy code
npx prisma migrate dev --name init
Start the dev server:

bash
Copy code
npm run dev
