# [Serverless Functions and React](https://gabriels-first-serverless-react-app.netlify.app/)
  - The project consists of React solutions for two examples from the first [Serverless Functions project](https://github.com/ArpadGBondor/John_Smilga-Serverless_Functions_with_Netlify)
    - Basic Setup
      - Uses the first project's serverless function directly
    - Airtable
      - Uses a locally deployed copy of the first project's serverless function.

## Netlify TOML for create-react-app
[build]
  - command = 'npm run build'
  - publish = '/build'
  - functions = './functions'

[[redirects]]
  - from = '/api/\*'
  - to = '/.netlify/functions/:splat'
  - status = 200

[[redirects]]
  - from = '/\*'
  - to = '/index.html'
  - status = 200

#### build Command
  - "build": "CI= react-scripts build"
