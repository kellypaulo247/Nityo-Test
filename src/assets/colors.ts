export const colors = {
  // Primary colors
  primary: '#4F46E5',
  primaryLight: '#6366F1',
  primaryDark: '#3730A3',

  // Secondary colors
  secondary: '#6B7280',
  secondaryLight: '#9CA3AF',
  secondaryDark: '#374151',

  // Accent colors
  accent: '#F59E0B',
  danger: '#dc3545',
  success: '#10B981',
  warning: '#F59E0B',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Background colors
  background: {
    primary: '#f5f5f5',
    secondary: '#FFFFFF',
    card: '#FFFFFF',
  },

  // Text colors
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    light: '#9CA3AF',
    inverse: '#FFFFFF',
  },

  // Border colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Status colors
  status: {
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const;

export type ColorScheme = typeof colors;