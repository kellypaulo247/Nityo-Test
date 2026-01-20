import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../src/navigation/AuthNavigator';

describe('Navigation Flow', () => {
  it('navigates from Login to Signup screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );

    fireEvent.press(getByText("Don't have an account? Sign up"));
    expect(getByText('Create an Account')).toBeTruthy();
  });

  it('navigates from Login to Forgot Password screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Forgot Password?'));
    expect(getByText('Reset Your Password')).toBeTruthy();
  });
});