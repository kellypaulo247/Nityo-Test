import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../src/components/Input';

describe('Input Component', () => {
  it('renders correctly with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" value="" onChangeText={() => {}} />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" value="" onChangeText={onChangeTextMock} />
    );
    fireEvent.changeText(getByPlaceholderText('Enter text'), 'New text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
  });

  it('displays an error message when error prop is provided', () => {
    const { getByText } = render(
      <Input placeholder="Enter text" value="" onChangeText={() => {}} error="Error message" />
    );
    expect(getByText('Error message')).toBeTruthy();
  });

  it('shows the right icon when rightIcon prop is provided', () => {
    const { getByTestId } = render(
      <Input placeholder="Enter text" value="" onChangeText={() => {}} rightIcon="visibility" />
    );
    expect(getByTestId('right-icon')).toBeTruthy();
  });
});