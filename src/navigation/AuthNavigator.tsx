import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Lazy load screens for code splitting
const LoginScreen = React.lazy(() => import('../screens/auth/LoginScreen'));
const SignupScreen = React.lazy(() => import('../screens/auth/SignupScreen'));
const ForgotPasswordScreen = React.lazy(() => import('../screens/auth/ForgotPasswordScreen'));

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