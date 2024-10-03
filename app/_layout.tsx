import { Slot } from 'expo-router';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider theme={{
      ...DefaultTheme,
      version: 3,
      colors: {
        ...DefaultTheme.colors,
        primary: "#1C396C"
      }
    }}>
      <Slot />
    </PaperProvider>
  );
}