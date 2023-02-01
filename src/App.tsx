/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './Navigation';

export function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
