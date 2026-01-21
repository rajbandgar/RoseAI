# RoseAI

RoseAI is an AI powered career guidance and mentoring platform that helps students and professionals make better career decisions. It provides personalized advice, roadmap planning, project ideas, learning resources, and resume improvement suggestions by leveraging modern AI capabilities.

RoseAI is designed to reduce the confusion around career paths, required skills, job readiness, and project building by answering user questions contextually and generating structured action plans.

---

## Table of Contents

- Introduction
- Key Features
- Tech Stack
- Architecture Overview
- Project Structure
- Local Setup Instructions
- Environment Variables
- Running the Application
- Core Concepts
- Development Guidelines
- Deployment Guide
- Roadmap
- Contributing
- License
- Contact

---

## Introduction

Choosing and navigating a tech career can be confusing due to scattered information, changing industry demands, and lack of structured resources. RoseAI organizes everything in one place and uses an intelligent conversational layer for guidance.

Users can ask questions such as:
- How do I become a data scientist
- What skills are required for DevOps
- Suggest me projects for web development
- How to improve my resume as a fresher
- Which certifications are useful for cloud engineers

RoseAI generates meaningful responses along with actionable steps, roadmaps, and external references when needed.

---

## Key Features

- AI based career Q and A
- Skill roadmap generation for different domains
- Resume and project recommendations
- Learning resource aggregation
- Lightweight and responsive UI
- Extensible and modular codebase
- Persistent session based conversations
- Structured output formatting
- Ready for production deployment on Vercel

---

## Tech Stack

The project uses the following technologies:

- Next.js (Application Framework)
- React (UI Layer)
- TailwindCSS (Styling)
- Prisma ORM (Database Access)
- PostgreSQL (Database)
- Inngest (Async Workflows if enabled)
- Gemini AI (Career Intelligence Model)
- Vercel (Recommended Deployment Platform)

---

## Architecture Overview

The system is built using a modular approach separating concerns into:

- Presentation Layer (Next.js components and pages)
- Backend Layer (API Routes and Services)
- Database Layer (Prisma schema and migrations)
- AI Service Layer (Integration with Gemini model)
- Utility Layer (Helper functions and mappers)

This makes the platform scalable and maintainable in the long term.

---

## Project Structure

Example project layout:

```
/app
  routes and rendering logic
/components
  shared UI components
/data
  static resources and constants
/hooks
  custom React hooks
/lib
  AI services, helpers, utilities
/prisma
  schema and migrations
/public
  static assets
```

This structure promotes clarity and separation of concerns.

---

## Local Setup Instructions

Steps to run the project on your machine:

1. Clone the repository  
   git clone https://github.com/rajbandgar/RoseAI.git

2. Navigate into the directory  
   cd RoseAI

3. Install dependencies  
   npm install

4. Configure environment variables (see below)

5. Launch development server  
   npm run dev

6. Visit http://localhost:3000 in a browser

---

## Environment Variables

Create a `.env` file in the root directory with:

```
NEXT_PUBLIC_GEMINI_API_KEY=
DATABASE_URL=
INNGEST_SECRET=
```

Optional variables may be added depending on deployment requirements.

---

## Running the Application

Development mode:
```
npm run dev
```

Build application:
```
npm run build
```

Start production mode:
```
npm start
```

---

## Core Concepts

RoseAI is based on three key ideas:

1. Conversational Interface  
   The user interacts through natural language and receives personalized responses.

2. Structured Outputs  
   Whenever possible, outputs include roadmaps, bullet points, skill lists, and resources.

3. Extensible Skill Framework  
   New domains or career paths can be added without significant architectural changes.

---

## Development Guidelines

- Use TypeScript where possible to avoid type issues.
- Maintain separation between UI components and logic.
- Keep AI prompt templates modular for clarity.
- Update Prisma schema whenever entities change.
- Write reusable hooks instead of repeating logic in components.

---

## Deployment Guide

RoseAI is deployment ready for platforms such as:

- Vercel
- Railway
- Render
- Fly.io
- Self Hosting (Node + PM2)

Typical Vercel Deployment Steps:

1. Push repository to GitHub
2. Import repository into Vercel dashboard
3. Configure environment variables
4. Deploy with automatic builds

---

## Roadmap

Potential future enhancements include:

- Full resume analysis feature
- Downloadable auto generated roadmaps
- Project portfolio builder
- Internship and job matching suggestions
- Mobile app version with offline content
- Admin dashboard for content curation
- Multi language career guidance

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your fork
5. Open a pull request with a clear explanation

---

## License

The project currently does not specify an open source license. Consider adding MIT or Apache 2.0 depending on your usage intentions.

---

## Contact

For questions, collaboration or feedback, open an issue on GitHub or reach out through your preferred communication method.
