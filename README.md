# React Coding Challenge – Blog Viewer (Next.js)

A small **Next.js** app that fetches posts from [JSONPlaceholder](https://jsonplaceholder.org) and renders the results in a simple list/card UI. The project uses:

- **TypeScript**
- **Bootstrap** for styling
- **Storybook** for component docs
- **ESLint** for linting
- **Prettier** for code formatting
- **Vitest + React Testing Library** for tests

---

## Project Setup

This app uses the **Next.js App Router**.

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn** (examples use npm)

### Installation

```bash
git clone https://github.com/caboddie1/nextjs-blog-viewer.git
cd nextjs-blog-viewer
npm install
```

---

## Running the App

Start the dev server:

```bash
npm run dev
```

App runs at: http://localhost:3000

---

## Storybook

Run Storybook to view components in isolation:

```bash
npm run storybook
```

Storybook runs at: http://localhost:6006

Build static Storybook:

```bash
npm run build-storybook
```

---

## Tests

This project uses **Vitest** + **React Testing Library**.

Run tests:

```bash
npm test
```

## Continuous Integration (CI)

This project includes a simple **GitHub Actions** CI pipeline.

### Workflow

- Runs on **pull requests** (for validation before merge).
- Runs on **push to `main`** (to ensure the main branch always stays green).

### Pipeline Tasks

The pipeline checks:

1. **Install dependencies**
2. **Lint**
3. **Run tests** (Vitest + React Testing Library)

This ensures that broken code never gets merged into `main`.

---

## API

Data is fetched from **JSONPlaceholder** (blog example):

- Base: https://jsonplaceholder.org
- Example endpoint (posts): `/posts`

---

## Available Scripts

- `dev` – Run Next.js in development
- `build` – Build the app for production
- `start` – Start the production server
- `lint` – Run linting
- `test` – Run tests (Vitest)
- `storybook` – Run Storybook
- `build-storybook` – Build static Storybook

---

## What This Demonstrates

- **Next.js App Router** structure
- **Fetching** from JSONPlaceholder
- **Loading & error** states
- **List/Card** UI for posts
- **Reusable UI components** (typed & accessible)
- **Reusable Hooks** (typed)
- **Bootstrap** styling
- **Storybook** component docs
- **Vitest + RTL** tests

---

## Implementation Notes

- Components and utilities are **TypeScript**-typed.
- Accessibility: form elements have labels and appropriate attributes.
- Tests cover rendering and user interactions.

---

## Nice-to-Haves / Future Work

- Post details route (`/posts/[id]`)
- Comments & authors integration
- Expanded accessibility tests and interaction tests in Storybook
- Retry on error logic

---

## Submission Checklist

- [x] README updated (this file)
- [x] App runs locally (`npm run dev`)
- [x] Storybook runs locally (`npm run storybook`)
- [x] Tests pass locally (`npm test`)
- [x] Pushed to GitHub (public)
- [ ] Submitted

---
