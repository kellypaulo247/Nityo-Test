# User Authentication App

A modern React Native application featuring user authentication with a clean, component-based architecture. Built with TypeScript, React Navigation, and best practices for code splitting and maintainability.

## Features

- **User Authentication**: Login, signup, and password recovery
- **Persistent Sessions**: Automatic login state management with AsyncStorage
- **Navigation**: Stack navigation for auth flows, bottom tabs for main app
- **Code Splitting**: Lazy-loaded screens for optimal performance
- **Reusable Components**: Custom Button and Input components
- **TypeScript**: Full type safety throughout the application
- **Context API**: Centralized state management for authentication

## Architecture Highlights

### 🎨 Design System
- **Centralized Colors**: All colors defined in `src/assets/colors.ts` with semantic naming
- **Typography & Strings**: All text content centralized in `src/constants/strings.ts`
- **Reusable Components**: `Button` and `Input` components with consistent styling

### 📋 Form Validation & Schema
- **Yup Schemas**: Robust validation schemas in `src/constants/schemas.ts`
- **Formik Integration**: Advanced form handling with real-time validation
- **Type Safety**: Full TypeScript support with inferred types from schemas

### 🔄 State Management
- **Context API**: Clean authentication state management
- **Persistent Storage**: AsyncStorage for session persistence
- **Loading States**: Proper loading indicators throughout the app

### 🚀 Performance Optimizations
- **Code Splitting**: Lazy-loaded screens for optimal bundle sizes
- **React.lazy()**: Dynamic imports for authentication and main app sections
- **Suspense Boundaries**: Graceful loading states

### 🏗️ Project Structure
```
src/
├── assets/              # Centralized design tokens
│   └── colors.ts       # Color palette and theme
├── components/         # Reusable UI components
├── constants/          # App constants and schemas
│   ├── strings.ts      # Localized strings
│   └── schemas.ts      # Validation schemas
├── context/            # React Context providers
├── navigation/         # Navigation configuration
└── screens/            # Screen components
```

### 🔧 Key Technologies

- **React Native 0.83.1** with modern architecture
- **TypeScript** for type safety
- **React Navigation** with stack and bottom tabs
- **Formik + Yup** for form management
- **AsyncStorage** for local persistence
- **React Context** for state management

## Getting Started

### Prerequisites

- Node.js >= 20
- React Native development environment set up
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Install dependencies:
```sh
npm install
```

2. For iOS, install CocoaPods:
```sh
cd ios && bundle exec pod install
```

### Running the App

1. Start Metro bundler:
```sh
npm start
```

2. Run on Android:
```sh
npm run android
```

3. Run on iOS:
```sh
npm run ios
```

## Usage

1. **First Launch**: The app shows the login screen
2. **Sign Up**: Create a new account with email, password, and name
3. **Login**: Use your credentials to access the app
4. **Forgot Password**: Request a password reset (mock implementation)
5. **Main App**: Navigate between Home, Profile, and Settings tabs
6. **Logout**: Sign out from the Settings screen

## Development

### Code Splitting

The app uses React.lazy() for lazy loading screens, improving initial bundle size and load times:

```tsx
const LoginScreen = React.lazy(() => import('../screens/auth/LoginScreen'));
```

### Component Reusability

Custom components like `Button` and `Input` promote consistency and maintainability:

```tsx
<Button title="Login" loading={isLoading} onPress={handleLogin} />
<Input placeholder="Email" value={email} onChangeText={setEmail} error={error} />
```

### State Management

Authentication state is managed through React Context, providing a clean API for components:

```tsx
const { user, login, logout } = useAuth();
```

## Testing

Run tests with:
```sh
npm test
```

## Linting

Check code quality with:
```sh
npm run lint
```

## Contributing

1. Follow the established project structure
2. Use TypeScript for all new code
3. Implement proper error handling
4. Add appropriate validation
5. Test on both iOS and Android


## CI/CD Pipeline

This project uses a GitHub Actions workflow for continuous integration and code quality checks. The workflow runs on every push and pull request to the `main` branch, and includes:

- Dependency installation
- Linting
- Type checking
- Unit tests

See `.github/workflows/ci.yml` for the workflow definition, and [README_PIPELINES.md](README_PIPELINES.md) for a detailed breakdown of the pipeline steps.

---
## License

This project is licensed under the MIT License.

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

