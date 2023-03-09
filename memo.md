# firebase

- npm install -g firebase-tools
- firebase --version
- firebase projects:list

## authentication

- firebase login --reauth
- firebase logout
- firebase login
- firebase projects:list

## deploy

- firebase init
- firebase deploy
- firebase serve

## .firebaserc

```json
{
  "projects": {
    "default": "react-firebase-tutorial-c25dc"
  }
}
```

## firebase.json

```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## package.json

```json
{
  "scripts": {
    "deploy": "react-scripts build && firebase deploy"
  }
}
```

## GitHub

- For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) jsh-1235/react-firebase-tutorial