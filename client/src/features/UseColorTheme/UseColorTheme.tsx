/* eslint-disable import/prefer-default-export */

import { useCallback, useState } from 'react';

// Определение типа для темы цвета
type ColorTheme = 'light' | 'dark';

// Объявление константы для тем цвета
const COLOR_THEME: { light: ColorTheme; dark: ColorTheme } = {
  light: 'light',
  dark: 'dark',
};

// Возвращаемый тип хука
type UseColorThemeReturnType = {
  colorTheme: ColorTheme;
  changeColorTheme: (theme: ColorTheme) => void;
  toggleColorTheme: () => void;
};

export const useColorTheme = (): UseColorThemeReturnType => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(COLOR_THEME.dark);

  const changeColorTheme = useCallback((theme: ColorTheme = COLOR_THEME.dark) => {
    setColorTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleColorTheme = useCallback(() => {
    setColorTheme((prevTheme) =>
      prevTheme === COLOR_THEME.dark ? COLOR_THEME.light : COLOR_THEME.dark,
    );
  }, []);

  return { colorTheme, changeColorTheme, toggleColorTheme };
};
