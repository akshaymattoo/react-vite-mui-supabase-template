# react-vite-mui-supabase-template
This template helps start new projects with basic setup.

# Steps for Setting Up Your Project from an Empty Directory

If you already have a directory or a project:
- Navigate to your folder with `cd <folder>`.
- Create a new Vite project using `npm create vite@latest .`.
- Choose React and TypeScript when prompted.

# Installing Vite Dependencies
- Go to your project's folder `cd <project_name>`.
- Install dependencies with `npm i`.
- Start the project with `npm run dev`.

This command begins a project using Vite, React, and TypeScript.

# Install Material UI
- Add Material UI to your project: `npm install @mui/material @emotion/react @emotion/styled`.

# Add MUI Icons
- Include MUI icons: `npm install @mui/icons-material`.

# Using the MUI Library
- Open `App.tsx` and replace the div's content with `<Button variant="contained">Hello world</Button>`.
- Delete any imports you don't need.
- Start the app with `npm run dev` to see the button.

Now you have a project ready to build on with MUI components.

To create a basic project with login, Supabase Auth, and navigation:
- Focus on mobile design first. This project doesn't have a separate web UI.

# Setting Up Navigation with React Router
- Add react-router: `npm i react-router-dom`.
- Make `Home.tsx` and `Login.tsx` components in the src folder.
- Add `import { BrowserRouter } from "react-router-dom";` in `main.tsx`.
- Surround `<App/>` with `<BrowserRouter>`.
- In `App.tsx`, use `<Routes>` and `<Route>` to add your paths.
- Run `npm run dev` and visit your new routes to see if they work.

# Install Supabase
- Sign up or log in at Supabase.
- Create a new project and follow the instructions.
- When your project is ready, you'll go to a specific URL.
- Make a `.env` file and exclude it from Git with `.gitignore`.
- Add `VITE_APP_SUPABASE_URL` and `VITE_APP_SUPABASE_KEY` to your `.env`.
- Find these settings at a specific Supabase URL.
- Install the Supabase client: `npm i @supabase/supabase-js`.

# Setting Up Supabase Client
- Make a `lib` folder in src.
- Create `api.ts` with Supabase client setup code.
- Make a `constants.ts` for your environment variables.

# Enabling Google Login with Supabase
- Set up Google login at a specific Supabase URL.
- Create a Google Cloud account and project.
- Configure OAuth consent and credentials.
- Add your Supabase URL as the redirect URI.
- Update Supabase with your Google client ID and secret.

# Setting Up Auth with React Context
- Make an Auth module for global user access.
- Create a `hooks` folder and add `Auth.tsx`.
- Use the provided content for `Auth.tsx`.
- Make `ProtectedRoute.tsx` for authenticated routes.
- Wrap your app with `<AuthProvider>` to use `user` anywhere.

# Setting Up Testing with Playwright
- Initialize Playwright for end-to-end testing: `npm init playwright@latest`.
- Run tests with `npx playwright test`.
- Automate tests with GitHub Actions. Configure in `.github/workflows/playwright.yml`.

# Integrating Umami for Analytics
- Sign up at Umami and add your website.
- Insert the provided JavaScript code in your `index.html`'s `<head>` tag.

# To Do
- How to make your react app as PWA.
- Integrate Stripe for payments.