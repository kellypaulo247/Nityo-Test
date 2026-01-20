import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface FormWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default FormWrapper;