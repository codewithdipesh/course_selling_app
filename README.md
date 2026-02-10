# Course Selling Platform (Udemy-like Backend)

A modular Node.js + Express + MongoDB backend with JWT auth, RBAC, course management, enrollments, reviews, wishlist, Stripe-style payments, dashboards, caching, notifications, logging, and Swagger docs.

## Folder Structure

```bash
src/
  app.js
  config/
  controllers/
  docs/
  middleware/
  models/
  routes/
  services/
  utils/
  validators/
```

## Setup

1. Copy envs:

```bash
cp .env.example .env
```

2. Install and run:

```bash
npm install
npm run dev
```

3. Swagger docs:

- `http://localhost:3005/api-docs`

## Key Features Implemented

- **Authentication & Authorization**
  - JWT login/signup (`/api/v1/auth/signup`, `/api/v1/auth/login`)
  - RBAC roles: `student`, `instructor`, `admin`
  - Protected middleware for admin/instructor-only course management

- **Course Management**
  - Create/update/delete/list/preview courses
  - Categories, tags, difficulty level
  - Thumbnail/preview upload support via Cloudinary + Multer
  - Search + filters (category, difficulty, price, rating)

- **User Features**
  - Student enrollment + progress tracking
  - Wishlist
  - Reviews + ratings with aggregate rating updates
  - Student/Instructor dashboards

- **Payments**
  - Stripe PaymentIntent integration (with mock fallback if no key)
  - Coupons (`SAVE10`, `SAVE20`), confirm, refund endpoint

- **Advanced / Best Practices**
  - Pagination + response caching (`node-cache`)
  - Email notifications (`Nodemailer`) on enrollment
  - Logging (`Winston`) + request logs (`Morgan`)
  - Validation (`express-validator`) + global error handlers
  - Swagger/OpenAPI docs configured

## Sample API Routes

### Auth
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/login`

### Courses
- `POST /api/v1/courses` (admin/instructor)
- `PUT /api/v1/courses/:id` (admin/instructor)
- `DELETE /api/v1/courses/:id` (admin/instructor)
- `GET /api/v1/courses?page=1&limit=10&category=Web&minPrice=0&maxPrice=100&rating=4`
- `GET /api/v1/courses/:id/preview`

### Enrollment
- `POST /api/v1/enrollments/:courseId` (student)
- `PATCH /api/v1/enrollments/:courseId/progress` (student)

### Payments
- `POST /api/v1/payments/course/:courseId` (student)
- `PATCH /api/v1/payments/:paymentId/confirm`
- `POST /api/v1/payments/:paymentId/refund` (admin)

## Frontend Integration Suggestions (React/Next.js)

- Use Axios interceptors to inject `Authorization: Bearer <token>`.
- Store auth token in `httpOnly` cookies via a BFF layer for better security.
- Build pages:
  - Marketplace with server-side filtered search (`/courses` query params)
  - Course details with preview + ratings
  - Checkout page calling payment endpoints and Stripe.js
  - Student dashboard + instructor analytics dashboard
- Add optimistic UI for wishlist and progress updates.
- In Next.js, use API routes or server actions to proxy sensitive calls.

## Frontend (New)

A responsive recruiter-friendly frontend is included under `public/` with modular folders:

```bash
public/
  css/
  js/
  assets/
  index.html
  dashboard.html
```

- Login page (`/index.html`) includes glowing input borders and clear validation errors.
- Dashboard page (`/dashboard.html`) includes CRUD action buttons, playful cherry blossom stats panel, and sample PDF download generation.
