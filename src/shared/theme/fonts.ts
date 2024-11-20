import {TextStyle} from 'react-native';

type FontStyle = Omit<TextStyle, 'fontSize' | 'lineHeight' | 'fontWeight'> & {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
};

const createFontStyle = (
  fontSize: number,
  lineHeight: number,
  fontFamily: string,
): FontStyle => ({
  fontFamily,
  fontSize,
  lineHeight,
});

export const FONTS = {
  title: createFontStyle(22, 32, 'Poppins-SemiBold'),
  subtitle: createFontStyle(18, 28, 'Poppins-SemiBold'),
  bodyMSemibold: createFontStyle(14, 22, 'Poppins-SemiBold'),
  bodyMMedium: createFontStyle(14, 22, 'Poppins-Medium'),
  bodyMRegular: createFontStyle(14, 22, 'Poppins-Regular'),
  bodySSemibold: createFontStyle(12, 18, 'Poppins-SemiBold'),
  bodySMedium: createFontStyle(12, 18, 'Poppins-Medium'),
  bodySRegular: createFontStyle(12, 18, 'Poppins-Regular'),
  tabBar: createFontStyle(11, 16, 'Poppins-Medium'),
};
