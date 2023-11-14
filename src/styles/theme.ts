type Screen = 'mobile' | 'tablet' | 'laptop' | 'desktop';
export const breakPoints: Record<Screen, string> = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1440px',
};

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000',
    purple: {
      primary: '#635FC7',
      secondary: '#A8A4FF',
    },
    red: {
      primary: '#EA5555',
      secondary: '#FF9898',
    },
    grey: {
      100: '#F4F7FD',
      200: '#E4EBFA',
      300: '#828FA3',
      400: '#3E3F4E',
      500: '#2B2C37',
      600: '#20212C',
      700: '#20212C',
      800: '#000112',
    },
  },
  width: breakPoints,
  minWidth: breakPoints,
  maxWidth: breakPoints,
  minHeight: breakPoints,
  maxHeight: breakPoints,
  screens: breakPoints,
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  },
  keyframes: {
    'accordion-down': {
      from: { height: 0 },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: 0 },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
} as const;

export default theme;
