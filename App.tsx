import { StatusBar } from 'expo-status-bar';

import { AppDataProvider } from './src/hooks/appData';
import { Theme } from './src/templates/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" animated/>
      <AppDataProvider>
        <Theme>
          <Routes />
        </Theme>
      </AppDataProvider>
    </>
  );
}
