# CI / GitHub Actions

This project already includes two GitHub Actions workflows:

- `.github/workflows/ci.yml` — runs on push to `main` and on pull requests. It installs dependencies, runs tests, lints, and runs TypeScript checks.
- `.github/workflows/android-build.yml` — builds a debug Android APK on pushes to `main`, on tag pushes matching `v*`, and via manual `workflow_dispatch`. The generated APK is uploaded as an artifact named `app-debug-apk`.

No Play Store or App Store credentials are required for the current workflows — they only build and test inside GitHub Actions and upload artifacts for manual download.

Quick steps to push this repo to GitHub (example):

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

How to trigger workflows:

- Push to `main` or open a Pull Request — the CI workflow will run automatically.
- Push a tag like `v1.0.0` or trigger the `android-build.yml` manually in the Actions tab to produce an APK.

Where to find artifacts:

1. Open the repository on GitHub and go to the `Actions` tab.
2. Select a workflow run and look for the `Artifacts` section to download the generated `app-debug-apk`.

Notes & next steps:

- If your default branch is not `main`, update the workflow branch filters or rename the branch.
- If you later want to publish to Google Play or App Store, I can add secure steps that use repository secrets and service account files.

If you'd like, I can also add a small `CONTRIBUTING.md` and a pre-push Git hook suggestion to run tests locally before pushing.
