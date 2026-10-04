# Dentary
- Odontología especializada PLUS


## Dev instruction
- Run application command:
`npm run dev`
- Install tailwindcss:
`npm install tailwindcss @tailwindcss/vite`

## Deploy

This project can be deployed to Fly.io using the Fly.io web dashboard and GitHub, without using the terminal or `flyctl` commands.

### Option A: Deploy from GitHub using the Fly.io web dashboard

This is the easiest option if you want to avoid the command line.

1. Push this project to a GitHub repository.
2. Go to https://fly.io and sign in.
3. In the Fly.io dashboard, click Create App.
4. Choose Deploy with GitHub.
5. Connect your GitHub account if it is not already connected.
6. Select the repository that contains this React project.
7. Choose the branch to deploy, usually `main`.
8. Fly.io will detect the project and start the build. For a React/Vite app, you should include a Dockerfile so Fly can run the built frontend correctly.
9. Confirm the app settings and click Deploy.
10. Wait for the build to finish.
11. Once the deploy is complete, Fly.io will give you a public URL for the app.

### Option B: Use a fly.toml file in the repo

Yes, this is possible, and it is a good idea if you want your app metadata stored in the repository.

`fly.toml` is not always mandatory when deploying from the Fly.io web dashboard, but it is commonly used to define the app name and region. You can keep it in the project so the configuration travels with the code.

Example `fly.toml`:

```toml
app = "dentary-app"
primary_region = "iad"

[build]
  dockerfile = "Dockerfile"
```

Example `Dockerfile` for a Vite React app:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Recommended workflow for this project

Because this is a Vite + React app, use this setup:

- GitHub repository
- `Dockerfile` in the project root
- `fly.toml` in the project root if you want project-level configuration
- Fly.io dashboard connected to GitHub
- automatic deploys on push to the selected branch

### Future updates

After the initial deploy:

1. Commit your changes to GitHub.
2. Push to the connected branch.
3. Fly.io detects the new push.
4. It builds the app again and deploys automatically.

This means you do not need to run terminal commands in order to deploy after the initial setup.

### Notes

- `fly.toml` is optional in the web UI flow, but useful for versioning app config in Git.
- The most important requirement for this particular project is a valid `Dockerfile`, because Vite builds static files and Fly needs a container/runtime to serve them.
- If you want to deploy without GitHub, Fly.io also supports other deployment methods, but GitHub is the simplest method for this workflow.

## Develop by 
[iconito.io](https://www.iconito.io/)