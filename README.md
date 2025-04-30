# Journey Builder React Coding Challenge [05bd91]

> A Next.js (React.js) application, written in TypeScript, that retrieves data to render a Directed Acyclic Graph with React Flow. This application manages the prefill settings for when a form has been submitted, the values from the form fields can be used to prefill the fields of downstream forms. The application also offers the ability to change the data source.

## Clone, Install, and Run Project

1. Clone, Install, and Run Server Repo
   With HTTPS Clone URL:
   ```bash
   git clone https://github.com/spenceware-engineer/frontendchallengeserver.git
   cd frontendchallengeserver
   npm install
   npm start
   ```
   OR
   With SSH Clone URL:
   ```bash
   git clone git@github.com:spenceware-engineer/frontendchallengeserver.git
   cd frontendchallengeserver
   npm install
   npm start
   ```
2. Open new terminal window
3. Clone, Install, and Run Journey Builder Project
   With HTTPS Clone URL:
   ```bash
   git clone https://github.com/spenceware-engineer/05bd91.git
   cd 05bd91
   npm install
   npm run dev
   ```
   OR
   With SSH Clone URL:
   ```bash
   git clone git@github.com:spenceware-engineer/05bd91.git
   cd 05bd91
   npm install
   npm run dev
   ```

> The running Journey Builder application can be accessed at http://localhost:3000

> The data provided by the server can be found at http://localhost:3001/api/v1/x/actions/blueprints/x/x/graph

## Run Tests

### Unit Tests (Jest)
```bash
npm run test
```

### Component Tests (Cypress)
1. Open Cypress Testing UI
  ```bash
  npm run cypress:open
  ```
2. _Coming Soon_

### End-to-End (E2E) Tests (Cypress)
1. Open Cypress Testing UI
  ```bash
  npm run cypress:open
  ```
2. _Coming Soon_


## Code Linting and Formatting

### Lint Code (ESLint)
```bash
npm run lint
```

### Format Code (Prettier)
```bash
npm run format
```

---

### Technologies
TypeScript, Next.js, React.js, Zustand, React Flow, Material UI, Axios, Cypress, Jest, CSS Modules, ESLint, Prettier
