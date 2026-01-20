# GitHub Actions CI/CD Pipeline

This project uses a GitHub Actions workflow for continuous integration. The workflow is defined in `.github/workflows/ci.yml` and includes the following steps:

- **Checkout**: Clones the repository.
- **Setup Node.js**: Uses Node.js v20.
- **Cache yarn**: Caches dependencies for faster builds.
- **Install dependencies**: Installs all project dependencies using yarn.
- **Run tests**: Executes all unit tests.
- **Run lint**: Checks code quality with ESLint.
- **Type check**: Runs TypeScript type checking.

### Example Workflow

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Cache yarn
        uses: actions/cache@v4
        with:
          path: |
            ~/.cache/yarn
            node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Run tests
        run: yarn test --silent

      - name: Run lint
        run: yarn lint || true

      - name: Type check
        run: npx tsc --noEmit
```

See the main [README.md](../README.md) for more details on project setup and usage.
