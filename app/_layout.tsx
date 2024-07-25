import { useEffect } from 'react';

import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/shared/tokens';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          statusBarColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: 24,
          },
          headerShown: false,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="addTodo"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="editTodo"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
