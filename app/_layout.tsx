import 'react-native-reanimated';

import '../global.css';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: '',
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes('Slides'),
              }}
            />
          ))}
        </Stack>
        {/* </ThemeProvider> */}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
