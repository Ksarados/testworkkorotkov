import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS } from '@shared/lib/constants/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <StatusBar
            barStyle='light-content'
            backgroundColor={COLORS.background}
            translucent={false}
          />
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
