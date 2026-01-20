import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// In tests, React.lazy + dynamic import can cause issues (requires experimental flags).
// Load screens synchronously when running under Jest or when NODE_ENV=test to keep tests stable.
const isTest = typeof process !== 'undefined' && (process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === 'test');

const LoginScreen = isTest
  ? require('../screens/auth/LoginScreen').default
  : React.lazy(() => import('../screens/auth/LoginScreen'));
const SignupScreen = isTest
  ? require('../screens/auth/SignupScreen').default
  : React.lazy(() => import('../screens/auth/SignupScreen'));
const ForgotPasswordScreen = isTest
  ? require('../screens/auth/ForgotPasswordScreen').default
  : React.lazy(() => import('../screens/auth/ForgotPasswordScreen'));

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#4F46E5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Forgot Password' }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;