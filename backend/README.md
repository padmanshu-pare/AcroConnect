# AcroConnect Backend

Your Campus. Your Events. Your Identity.

## Setup
```bash
npm install
cp .env.example .env   # then edit values
npm run dev
```

Health check: `GET http://localhost:5000/api/health`

## Structure
```
src/
  config/        env + database connection
  controllers/   request/response handling
  services/      business logic
  models/        Mongoose schemas
  routes/        route definitions
  middleware/    auth, error handling, etc.
  validators/    request validation schemas
  utils/         ApiError, response helpers, asyncHandler
  constants/     roles, statuses, etc.
  integrations/  Cloudinary, email, etc.
```

## API conventions
- Success: `{ "success": true, "message": "...", "data": ... }`
- Error: `{ "success": false, "message": "...", "details": ... }`

## Module progress
| Module | Status |
|---|---|
| Foundation | Implemented (needs testing) |
| 1 Auth & Users | Not Started |
| 2 Event Discovery | Not Started |
| 3 Event Creation & Approval (+ Clubs) | Not Started |
| 4 Registration | Not Started |
| 5 QR Attendance | Not Started |
| 6 Activity Passport & Certificates | Not Started |
| 7 Admin & Analytics | Not Started |
