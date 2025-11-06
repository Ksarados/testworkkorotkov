import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Platform } from 'react-native';
import HomeScreen from '@pages/home/ui/HomeScreen';
import PaymentsScreen from '@pages/payments/ui/PaymentsScreen';
import HistoryScreen from '@pages/history/ui/HistoryScreen';
import AnalyticsScreen from '@pages/analytics/ui/AnalyticsScreen';
import ChatsScreen from '@pages/chats/ui/ChatsScreens';
import { BottomTabParamList } from './types';
import { COLORS } from '@shared/lib/constants/colors';
import HomeIcon from '@shared/assets/icons/tab-bar/HomeIcon';
import PaymentIcon from '@shared/assets/icons/tab-bar/PaymentIcon';
import HistoryIcon from '@shared/assets/icons/tab-bar/HistoryIcon';
import AnalyticsIcon from '@shared/assets/icons/tab-bar/AnalyticsIcon';
import ChatIcon from '@shared/assets/icons/tab-bar/ChatIcon';
import {
  HOME,
  PAYMENTS,
  HISTORY,
  ANALYTICS,
  CHATS,
} from '@shared/lib/constants/screens';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.white,
      }}
    >
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <HomeIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={PAYMENTS}
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <PaymentIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={HISTORY}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <HistoryIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ANALYTICS}
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <AnalyticsIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={CHATS}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <ChatIcon color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 82 : 64,
    backgroundColor: COLORS.background,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default RootNavigation;
