# 📚 Course Selling App

## Project Overview
A Node.js application for selling and purchasing courses online.  
Includes authentication for users and admins, course management, and purchase flow.

---

## Steps to Build

- Initialize a new Node.js project
- Install dependencies: `express`, `jsonwebtoken`, `mongoose`, `dotenv`
- Create `index.js` with basic Express server setup
- Add route skeletons:
  - User: signup, login, purchase course, view courses
  - Admin: signup, login, create course, delete course, add course content
- Add middleware for:
  - User authentication
  - Admin authentication
- Setup MongoDB database connection (store URI in `.env`)
- Define schemas:
  - User
  - Admin
  - Course
  - Purchase
- Complete routes:
  - User login/signup
  - Purchase course
  - View available courses
  - Admin course management
- (Extra) Use Express Router for modular route structure
- Create frontend for browsing and purchasing courses

---

## Project Structure
course-selling-app/
│── index.js
│── routes/
│   ├── user.js
│   ├── admin.js
│── middleware/
│   ├── authUser.js
│   ├── authAdmin.js
│── models/
│   ├── User.js
│   ├── Admin.js
│   ├── Course.js
│   ├── Purchase.js
│── .env
│── package.json



---

## Extra Points
- Add error handling middleware
- Use React for frontend UI
- Deploy on Render/Heroku/Vercel with MongoDB Atlas
