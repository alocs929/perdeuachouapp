import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <PaperProvider>

        <AppStack />
        <StatusBar style="light" />
      </PaperProvider>
    </>
  );
}

