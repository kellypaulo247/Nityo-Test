export const strings = {
  // App titles
  appName: 'User Authentication App',

  // Auth screens
  auth: {
    welcomeBack: 'Welcome Back',
    createAccount: 'Create Account',
    forgotPassword: 'Forgot Password',
    resetPasswordDescription: 'Enter your email address and we\'ll send you a link to reset your password.',
    passwordResetSent: 'Password reset email sent',
    loginSuccess: 'Login successful',
    signupSuccess: 'Account created successfully',
  },

  // Form labels
  form: {
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
  },

  // Buttons
  buttons: {
    login: 'Login',
    signup: 'Sign Up',
    sendResetLink: 'Send Reset Link',
    logout: 'Logout',
    backToLogin: 'Back to Login',
  },

  // Placeholders
  placeholders: {
    email: 'Enter your email',
    password: 'Enter your password',
    confirmPassword: 'Confirm your password',
    fullName: 'Enter your full name',
  },

  // Error messages
  errors: {
    fillAllFields: 'Please fill in all fields',
    invalidEmail: 'Please enter a valid email',
    passwordMismatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 6 characters',
    nameTooShort: 'Name must be at least 2 characters',
    invalidCredentials: 'Invalid email or password',
    loginFailed: 'Login Failed',
    signupFailed: 'Signup Failed',
    genericError: 'An error occurred',
  },

  // Success messages
  success: {
    login: 'Login successful',
    signup: 'Account created successfully',
    passwordReset: 'Password reset email sent',
  },

  // Links
  links: {
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: 'Don\'t have an account? Sign Up',
    alreadyHaveAccount: 'Already have an account? Login',
  },

  // Main screens
  main: {
    home: {
      title: 'Welcome',
      subtitle: 'You are successfully logged in.',
    },
    profile: {
      title: 'Profile Details',
      name: 'Name:',
      email: 'Email:',
      userId: 'User ID:',
    },
    settings: {
      title: 'Settings',
      logoutConfirm: 'Are you sure you want to logout?',
      logout: 'Logout',
      cancel: 'Cancel',
    },
  },

  // Navigation
  navigation: {
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
    login: 'Login',
    signup: 'Sign Up',
    forgotPassword: 'Forgot Password',
  },

  // Loading
  loading: 'Loading...',

  // Validation
  validation: {
    required: 'This field is required',
    emailInvalid: 'Please enter a valid email address',
    passwordMinLength: 'Password must be at least 6 characters',
    nameMinLength: 'Name must be at least 2 characters',
  },

  // Forgot Password screen
  forgotPasswordSuccess: 'Password reset email sent',
  forgotPasswordFailed: 'Failed to send password reset email',

  // Reset Password screen
  resetPassword: 'Reset Password',
} as const;