import { createContext, useContext, useMemo, useState } from 'react';

const ColorModeContext = createContext({ mode: 'light', toggleMode: () => {} });

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((m) => (m === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
