# react-vite-mui-supabase-template
This is a  template code to use for future projects which will give me a boiler plate code to start with

# Steps for building the project from empty directory 

If you alredy have a directory or got project
- cd <folder>
- npm create vite@latest .
- Fill the prompts and continue with React + Typescript

# Install vite dependenies 
- cd <project_name>
- npm i
- npm run dev

The above command will start a vite + react + typescript project

# [Install](https://mui.com/material-ui/getting-started/installation/) [Material UI](https://mui.com/material-ui/getting-started/)
- npm install @mui/material @emotion/react @emotion/styled

# Install MUI icons 
- npm install @mui/icons-material


# Usage of MUI library 
- Open App.tsx file and replace the div content with  `<Button variant="contained">Hello world</Button>`
- Remove the unused imports
- run ` nom run dev` and check if the button is rendered 

We have a project with MUI components installed and we can start building anything on top of it. 

The steps below are to be followed if we want to have a skelton project with 
- Login 
- Supabase Auth
- Navigation between routes 
I am following a mobile design first approach. This project doesn't have a seperate web UI to be rendered. 


# Install react router and have our app naviagte between pages

- npm i react-router-dom
- Create a component Home.tsx and Login.tsx in the src directory
- Add `import { BrowserRouter } from "react-router-dom";` in main.tsx
- Wrap <App/> with <BrowserRouter>
- Open App.tsx and add <Routes> <Route path="/home" element={<Home/>}> </Route></Routes> and other routes you wish to add
- run `npm run dev` and go the route you have added like http://localhost:5173/home or http://localhost:5173/login
- Check if the text is rendered

# Install [Supabase](https://supabase.com/) 
- Signin or create an account with Supabase
- Once logged in you will land on [page](https://supabase.com/dashboard/projects) to create a New Project 
- Click New project and follow the prompts.
- Once the project is created you will land on [page] (https://supabase.com/dashboard/project/<project_id>/building)
- Create .env file and add it to .gitignore
- Create two variables VITE_APP_SUPABASE_URL and VITE_APP_SUPABASE_KEY. 
- Copy the values from the URL into these two keys
- If you are not able to find the settings for the project go to [URL](https://supabase.com/dashboard/project/<project_id>/settings/api)
- run ` npm i @supabase/supabase-js` this will install the supabase client in the project

# Project setup to access supabase client
- Create a folder `lib` under src 
- Create a file `api.ts` and paste the content 
```
import { createClient } from "@supabase/supabase-js";
import { VITE_APP_SUPABASE_KEY, VITE_APP_SUPABASE_URL } from "./constants";

export const supabase = createClient(
  VITE_APP_SUPABASE_URL,
  VITE_APP_SUPABASE_KEY
); 
```
- Create another file `constants.ts` and paste the content ```export const { VITE_APP_SUPABASE_URL, VITE_APP_SUPABASE_KEY } = import.meta.env;```

# Enable Google login on supabase
- Go to https://supabase.com/dashboard/project/<pid>/auth/providers
- Go to https://console.cloud.google.com/ and create an account
- Create a project and once done select that project.
- Now search Oauth in the search bar and select Oauth consent screen
- Follow the prompts to complete the form.
- Now select Credentials and select web application in Application Type.
- In redirect uri put the same SUPABASE_URL/auth/v1/callback like `https://aleatiwhijoemckkppiw.supabase.co/auth/v1/callback`
- Once you hit create you will be prompted with client Id and secret which we need to update in the supabase. 
- These steps will enable goggle login on supabase project. 

# Setup Auth.tsx with React Context

In this section we will setup Auth module so the user details are available on any component via a react hook

- Create a folder `hooks` in the src directory 
- Create a file `Auth.tsx` in the older. 
- Copy the content from [here]().
- Create a file ProtectedRoute.tsx and copy the contents from [here]().
- Now in the App.tsx if you want your route to be not shown until the user has logger in wrap it with `<ProtectedRoute> <Home /> </ProtectedRoute>`. 
- Wrap the whole in App.tsx with  `<AuthProvider> </AuthProvider>`. This will ensure we can access `user` anywhere in the app. 


