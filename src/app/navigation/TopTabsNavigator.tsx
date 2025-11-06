import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import {
  AllScreen,
  DeliveryScreen,
  PaymentsNoticeScreen,
  SystemScreen,
  TravelScreen,
} from '@pages/history/ui';
import { HeaderNotice } from '@widgets/header-notice/ui/HeaderNotice';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigator() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <HeaderNotice />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            width: 'auto',
          },
          tabBarContentContainerStyle: {
            marginHorizontal: 16,
          },
          tabBarStyle: {
            backgroundColor: COLORS.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.orange,
            height: 2,
            marginHorizontal: 16,
          },
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.white,
        }}
      >
        <Tab.Screen name='All' component={AllScreen} />
        <Tab.Screen name='Payments' component={PaymentsNoticeScreen} />
        <Tab.Screen name='System' component={SystemScreen} />
        <Tab.Screen name='Delivery' component={DeliveryScreen} />
        <Tab.Screen name='Travel' component={TravelScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
});
