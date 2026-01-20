import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../assets/colors';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      {subtitle ? <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.white,
    fontSize: 12,
    opacity: 0.9,
  },
});

export default Header;
