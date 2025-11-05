import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Platform } from 'react-native';
import HomeScreen from '@pages/home/ui/HomeScreen';
import PaymentsScreen from '@pages/payments/ui/PaymentsScreen';
import HistoryScreen from '@pages/history/ui/HistoryScreen';
import AnalyticsScreen from '@pages/analytics/ui/AnalyticsScreen';
import ChatsScreen from '@pages/chats/ui/ChatsScreens';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#FE5900',
        tabBarInactiveTintColor: '#FFF',
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Payments' component={PaymentsScreen} />
      <Tab.Screen name='History' component={HistoryScreen} />
      <Tab.Screen name='Analytics' component={AnalyticsScreen} />
      <Tab.Screen name='Chats' component={ChatsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 88 : 70,
    backgroundColor: '#050402',
  },
  tabBarItemStyle: {
    marginTop: 8,
  },
});

export default RootNavigation;
