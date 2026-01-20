import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../src/navigation/AuthNavigator';
import { AuthProvider } from '../src/context/AuthContext';
import { strings } from '../src/constants/strings';

describe('Navigation Flow', () => {
  it('navigates from Login to Signup screen', () => {
    const { getByText } = render(
      <AuthProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </AuthProvider>
    );

    fireEvent.press(getByText(strings.links.dontHaveAccount));
    expect(getByText(strings.auth.createAccount)).toBeTruthy();
  });

  it('navigates from Login to Forgot Password screen', () => {
    const { getByText } = render(
      <AuthProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </AuthProvider>
    );

    fireEvent.press(getByText(strings.links.forgotPassword));
    expect(getByText(strings.auth.forgotPassword)).toBeTruthy();
  });
});