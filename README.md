# FacultyPulse

A GitHub-ready React/Vite recreation of the FacultyPulse Faculty Feedback System theme.

## Features

- Student and Admin login screens
- Student faculty list
- Five-category anonymous ratings
- Anonymous comments
- One submission per student per faculty
- Admin overview dashboard
- Faculty management
- Feedback browser with rating breakdown
- Responsive desktop/mobile layout
- LocalStorage persistence
- No backend required for the demo

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Demo login

### Student
- Role: Student
- Roll number: any value, e.g. `CSE3A001`
- Password: any value

### Admin
- Role: Admin
- Username: any value
- Password: any value

## Notes

This project recreates the public-facing visual direction and workflow of the linked FacultyPulse deployment. It is an independent implementation and does not include proprietary Lovable source code, backend secrets, or private assets.

For production use, replace the LocalStorage demo authentication with a real backend, secure authentication, database, authorization, and server-side anonymity protections.
