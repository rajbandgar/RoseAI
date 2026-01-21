RoseAI – Your AI-Powered Career Coach & Mentor

RoseAI is an intelligent career guidance platform built to empower students, freshers, and professionals with data-driven career planning, personalized learning paths, curated resources, and project guidance. The system uses Google’s Gemini AI to simulate conversational mentoring and deliver actionable steps toward career goals in tech domains like Web, AI/ML, DevOps, and more.

RoseAI is designed to be intuitive, responsive, and extensible, making it simple for users to get expert-level career advice without the overhead of manual research or planning.

Table of Contents

About

Features

Technologies Used

Architecture & Folder Structure

Getting Started

Installation

Environment Configuration

Usage Instructions

How It Works

Deployment

Roadmap

Contributing

License

Contact

1. About

RoseAI fills a gap in online career planning tools by pairing conversational AI with curated learning resources and structured roadmaps. Users can ask open-ended questions about careers, skills, job prospects, compensation insights, resume tips, and project ideas — receiving customized responses tailored to experience level and goals.

The platform integrates background systems like Prisma for data persistence and Inngest for async tasks, wrapped in a sleek, responsive web UI built with Next.js and TailwindCSS.

2. Features

RoseAI includes, but is not limited to:

Gemini AI Career Conversations: Interactive chat interface for career guidance and personalized advice.

Role-Specific Roadmaps: Custom, actionable plans for breaking into fields like Web, ML, and DevOps.

Project & Resume Recommendations: Tailored suggestions to enhance portfolios and resumes.

Responsive UI: Works seamlessly across mobile and desktop.

Persistent Session Memory: Stores conversation history using Prisma ORM.

Async Event Handling: Built with Inngest for scalable background processes.

3. Technologies Used

This project leverages the following tools and frameworks:

Gemini (Google AI) – Backend AI service for conversation and reasoning.

Next.js – React framework for server-side rendering and static generation.

TailwindCSS – Utility-first styling library.

Prisma ORM – Type-safe database access layer.

PostgreSQL – Relational database.

Inngest – Async event workflows.

Vercel – Recommended platform for deployment.

4. Architecture & Folder Structure

A high-level view of the app structure:

/app
  └── routes, pages, components
/components
  └── UI and reusable elements
/data
  └── static resources, content definitions
/hooks
  └── React hooks for state and side effects
/lib
  └── API utilities and helpers
/prisma
  └── Schema and migrations
/public
  └── Static assets


This layout promotes separation of concerns and scalability.

5. Getting Started

To begin using or developing RoseAI locally:

Clone the repository.

Install dependencies.

Set up environment variables.

Run the development server.

6. Installation

Use npm (or yarn) to install the required dependencies:

git clone https://github.com/rajbandgar/RoseAI.git
cd RoseAI
npm install


Ensure you have Node.js (v18+) installed.

7. Environment Configuration

Create a .env file in your project root and define necessary environment variables. For example:

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key_here
DATABASE_URL=postgresql://user:password@host:port/dbname
INNGEST_SECRET=your_inngest_secret


Customize these to reflect your development or production settings.

8. Usage Instructions

Start the development server:

npm run dev


Open http://localhost:3000
 in a browser to interact with RoseAI.

Users can ask free-form career questions, view enriched roadmaps, and follow resource links provided by the AI assistant.

9. How It Works

When a user asks a question:

The UI sends the prompt to an internal API route.

The API forwards the question to Gemini AI.

Responses are processed, structured with links and roadmap steps.

Results are displayed back to the UI in chat format.

Session state and analytics can be logged to the database for metrics or history.

10. Deployment

RoseAI is optimized for deployment on Vercel:

Push your code to a GitHub branch.

Connect the repo on Vercel.

Configure environment variables in the Vercel dashboard.

Deploy with automatic builds.

This yields a live, production-ready URL.

11. Roadmap

Future improvements may include:

Multi-language support

Plugin-based career modules

Resume builder integrations

Community-sourced resource contributions

Metrics and analytics dashboard

12. Contributing

Thank you for considering contributing to RoseAI!

To contribute:

Fork the repository.

Create a new feature branch (git checkout -b feature/foo).

Make your changes.

Submit a pull request with a clear description of your changes.

Refer to contribution guidelines if available.

13. License

This repository does not currently show a license. Add an appropriate open-source license to clarify usage rights. Best practice across GitHub projects is to include a license like MIT, Apache 2.0, or GPL.

14. Contact

If you have questions or need support:

Open an Issue in this repository

Mention contributors in pull requests

Share feedback and suggestions

If you need help generating badges, adding screenshots, diagrams, or more dynamic content (like GitHub stats), I can help integrate those too!

give mo one full file

Understood. Here is one complete README file (clean, no emojis, more than 70 lines, production style). You can copy paste directly into README.md.

RoseAI

RoseAI is an AI powered career guidance and mentoring platform that helps students and professionals make better career decisions. It provides personalized advice, roadmap planning, project ideas, learning resources, and resume improvement suggestions by leveraging modern AI capabilities.

RoseAI is designed to reduce the confusion around career paths, required skills, job readiness, and project building by answering user questions contextually and generating structured action plans.

Table of Contents

Introduction

Key Features

Tech Stack

Architecture Overview

Project Structure

Local Setup Instructions

Environment Variables

Running the Application

Core Concepts

Development Guidelines

Deployment Guide

Roadmap

Contributing

License

Contact

Introduction

Choosing and navigating a tech career can be confusing due to scattered information, changing industry demands, and lack of structured resources. RoseAI organizes everything in one place and uses an intelligent conversational layer for guidance.

Users can ask questions such as:

How do I become a data scientist

What skills are required for DevOps

Suggest me projects for web development

How to improve my resume as a fresher

Which certifications are useful for cloud engineers

RoseAI generates meaningful responses along with actionable steps, roadmaps, and external references when needed.

Key Features

AI based career Q and A

Skill roadmap generation for different domains

Resume and project recommendations

Learning resource aggregation

Lightweight and responsive UI

Extensible and modular codebase

Persistent session based conversations

Structured output formatting

Ready for production deployment on Vercel

Tech Stack

The project uses the following technologies:

Next.js (Application Framework)

React (UI Layer)

TailwindCSS (Styling)

Prisma ORM (Database Access)

PostgreSQL (Database)

Inngest (Async Workflows if enabled)

Gemini AI (Career Intelligence Model)

Vercel (Recommended Deployment Platform)

Architecture Overview

The system is built using a modular approach separating concerns into:

Presentation Layer (Next.js components and pages)

Backend Layer (API Routes and Services)

Database Layer (Prisma schema and migrations)

AI Service Layer (Integration with Gemini model)

Utility Layer (Helper functions and mappers)

This makes the platform scalable and maintainable in the long term.

Project Structure

Example project layout:

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


This structure promotes clarity and separation of concerns.

Local Setup Instructions

Steps to run the project on your machine:

Clone the repository
git clone https://github.com/rajbandgar/RoseAI.git

Navigate into the directory
cd RoseAI

Install dependencies
npm install

Configure environment variables (see below)

Launch development server
npm run dev

Visit http://localhost:3000
 in a browser

Environment Variables

Create a .env file in the root directory with:

NEXT_PUBLIC_GEMINI_API_KEY=
DATABASE_URL=
INNGEST_SECRET=


Optional variables may be added depending on deployment requirements.

Running the Application

Development mode:

npm run dev


Build application:

npm run build


Start production mode:

npm start

Core Concepts

RoseAI is based on three key ideas:

Conversational Interface
The user interacts through natural language and receives personalized responses.

Structured Outputs
Whenever possible, outputs include roadmaps, bullet points, skill lists, and resources.

Extensible Skill Framework
New domains or career paths can be added without significant architectural changes.

Development Guidelines

Use TypeScript where possible to avoid type issues.

Maintain separation between UI components and logic.

Keep AI prompt templates modular for clarity.

Update Prisma schema whenever entities change.

Write reusable hooks instead of repeating logic in components.

Deployment Guide

RoseAI is deployment ready for platforms such as:

Vercel

Railway

Render

Fly.io

Self Hosting (Node + PM2)

Typical Vercel Deployment Steps:

Push repository to GitHub

Import repository into Vercel dashboard

Configure environment variables

Deploy with automatic builds

Roadmap

Potential future enhancements include:

Full resume analysis feature

Downloadable auto generated roadmaps

Project portfolio builder

Internship and job matching suggestions

Mobile app version with offline content

Admin dashboard for content curation

Multi language career guidance

Contributing

Contributions are welcome. To contribute:

Fork the repository

Create a new feature branch

Commit your changes

Push to your fork

Open a pull request with a clear explanation

License

The project currently does not specify an open source license. Consider adding MIT or Apache 2.0 depending on your usage intentions.

Contact

For questions, collaboration or feedback, open an issue on GitHub or reach out through your preferred communication method.
