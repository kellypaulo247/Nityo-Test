## CI / GitHub Actions

This repository already includes GitHub Actions workflows to run tests and build an Android debug APK.

- **`.github/workflows/ci.yml`** — runs on push to `main` and on pull requests. It installs dependencies, runs tests, runs lint, and performs TypeScript checks.
- **`.github/workflows/android-build.yml`** — builds a debug Android APK on pushes to `main`, on tags matching `v*`, and via manual `workflow_dispatch`. The generated APK is uploaded as an artifact named `app-debug-apk`.

No Play Store or App Store credentials are required for these workflows — they only run inside GitHub Actions and upload artifacts for manual download.

How to push this repo to GitHub (example):

```bash
# initialize (if not already a git repo)
git init
git add .
git commit -m "Initial commit"
# add your GitHub remote (replace URL with your repository)
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
# ensure main branch
git branch -M main
git push -u origin main
```

Triggering workflows:

- Push to `main` or open a Pull Request — the CI workflow will run automatically.
- Push a tag like `v1.0.0` or trigger the `android-build.yml` manually in the Actions tab to produce an APK.

Where to find artifacts:

1. Open the repository on GitHub and go to the **Actions** tab.
2. Select a workflow run and look for the **Artifacts** section to download `app-debug-apk`.

Notes:

- If your default branch is not `main`, update the workflow branch filters or rename the branch.
- When you're ready to publish to the Play Store or App Store, I can add secure deployment steps that use repository secrets and service account files.

