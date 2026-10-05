# Dentary
- Odontología especializada PLUS


## Dev instruction
- Run application command:
`npm run dev`
- Install tailwindcss:
`npm install tailwindcss @tailwindcss/vite`

## Deploy

There are two valid ways to deploy this app:

1. Use the Fly.io dashboard + GitHub integration
2. Use GitHub Actions + a `FLY_API_TOKEN` secret

This project is already set up for the GitHub Actions approach. If you want the build to show up in the GitHub Actions tab, this is the setup you need.

### 1) Create the Fly app and get the API token

1. Go to https://fly.io.
2. Sign in with your GitHub account.
3. Create or open your app in Fly.
4. In the Fly dashboard, open the app settings or account settings.
5. Look for the option to create a token or access token.
6. Copy the token value.

This token is the value that must be stored in GitHub as a secret.

### 2) Add the secret in GitHub

In your GitHub repository:

1. Open the repo.
2. Go to Settings.
3. Open Secrets and variables.
4. Open Actions.
5. Click New repository secret.
6. Name the secret exactly:

```text
FLY_API_TOKEN
```

7. Paste the Fly token you copied.
8. Save it.

This is required because the workflow reads:

```yaml
env:
  FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

### 3) GitHub Actions workflow

The workflow file is at:

```text
.github/workflows/deploy.yml
```

It should look like this:

```yaml
name: Deploy to Fly.io

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Flyctl
        uses: superfly/flyctl-actions/setup-flyctl@master

      - name: Deploy to Fly.io
        run: flyctl deploy --remote-only --config fly.toml
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

This workflow triggers every time you push to `main`.

### 4) Make sure the repo contains the Fly config

Your project should include these files:

- `fly.toml`
- `Dockerfile`

Example `fly.toml`:

```toml
app = 'dentary-front'
primary_region = 'dfw'

[build]
  dockerfile = 'Dockerfile'

[http_service]
  internal_port = 80
  force_https = true
  auto_stop_machines = 'stop'
  auto_start_machines = true

[[vm]]
  memory = '256mb'
  cpu_kind = 'shared'
  cpus = 1
```

Example `Dockerfile` for a Vite app:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app

COPY dentary/package*.json ./
RUN npm install

COPY dentary ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 5) Push to GitHub to trigger the deploy

After saving the secret, do this:

1. Commit your changes.
2. Push to the `main` branch.
3. Go to GitHub > Actions.
4. You should see the `Deploy to Fly.io` workflow running.

### 6) If it still does not trigger

Check these items:

- The branch is `main`
- The GitHub secret is named exactly `FLY_API_TOKEN`
- The token is valid
- The app name in `fly.toml` matches the app in Fly.io
- The repository is the correct one connected to Fly

### Notes

- The GitHub Actions workflow is the method that makes deploys show up in the GitHub Actions tab.
- If you prefer the web-based Fly deployment, you can skip the workflow and use the Fly dashboard instead.
- In either case, the `FLY_API_TOKEN` secret is the key that lets GitHub or Fly authenticate to your Fly account.

## Develop by 
[iconito.io](https://www.iconito.io/)
## Develop by 
[iconito.io](https://www.iconito.io/)