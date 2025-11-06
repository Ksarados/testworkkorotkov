import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@shared/lib/constants/colors';
import { NotificationList } from '@widgets/notification-list/ui/NotificationList';
import { Notice } from '@widgets/notification-list/model/types';

const notices: Notice[] = [
  {
    id: 1,
    name: 'Received from Anna',
    date: '2024-06-20',
    time: '12:00',
    amount: 110,
    totalAmount: 4098.12,
    numberCard: '4385438543854385',
    typeCard: 'Debit',
    typeTransaction: 'income',
    category: 'Payments',
    categoryColor: COLORS.intenseOrange,
    logo: require('@shared/assets/images/notice-1.png'),
    discription: '',
  },
  {
    id: 2,
    name: 'See our limited offer!',
    date: '2024-06-19',
    time: '12:00',
    amount: null,
    totalAmount: null,
    numberCard: '',
    typeCard: '',
    typeTransaction: 'notice',
    category: 'Travel',
    categoryColor: COLORS.orange,
    logo: require('@shared/assets/images/notice-2.png'),
    discription: 'Would you like to visit new countries? Maybe it’s your time!',
  },
  {
    id: 3,
    name: 'Sent to •• 2041',
    date: '2024-06-19',
    time: '12:00',
    amount: 14.62,
    totalAmount: 3987.5,
    numberCard: '4385438543854385',
    typeCard: 'Debit',
    typeTransaction: 'outcome',
    category: 'Payments',
    categoryColor: COLORS.intenseOrange,
    logo: require('@shared/assets/images/notice-3.png'),
    discription: '',
  },
  {
    id: 4,
    name: 'New login into account',
    date: '2024-06-18',
    time: '12:00',
    amount: null,
    totalAmount: null,
    numberCard: '',
    typeCard: '',
    typeTransaction: 'notice',
    category: 'Travel',
    categoryColor: COLORS.orange,
    logo: require('@shared/assets/images/notice-4.png'),
    discription:
      'You have logged in from a new location:iOS 26.0.1 · 109.255.84.7 · Spain',
  },
];

export function AllScreen() {
  return (
    <SafeAreaView edges={['']} style={styles.container}>
      <ScrollView>
        <NotificationList notices={notices} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
