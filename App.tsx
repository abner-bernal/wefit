import { StatusBar } from 'expo-status-bar';

import { Theme } from './src/templates/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" animated/>
      <Theme>
        <Routes />
      </Theme>
    </>
  );
}
