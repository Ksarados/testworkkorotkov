import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserHeader } from '@widgets/user-header/ui/UserHeader';
import { CategoryTabs } from '@widgets/categoty-tabs/ui/CategoryTabs';
import { CardsCarousel } from '@widgets/card-carousel/ui/CardCarousel';
import { ProgressBar } from '@widgets/progress-bar/ui/ProgressBar';
import { TransactionsList } from '@widgets/transactions-list/ui/TransactionsList';
import { COLORS } from '@shared/lib/constants/colors';
import { Transaction } from '@widgets/progress-bar/model/types';

export const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Matthew Billson',
    date: '2024-06-20',
    time: '12:00',
    amount: 500,
    category: 'Money Transfer',
    categoryColor: COLORS.intenseOrange,
    logo: require('@shared/assets/images/transaction-image-1.png'),
  },
  {
    id: 2,
    name: 'Starbucks',
    date: '2024-06-19',
    time: '12:00',
    amount: 670,
    category: 'Food',
    categoryColor: COLORS.orange,
    logo: require('@shared/assets/images/transaction-image-2.png'),
  },
  {
    id: 3,
    name: 'Netflix',
    date: '2024-06-19',
    time: '12:00',
    amount: 200,
    category: 'Entertainment',
    categoryColor: COLORS.lightOrange,
    logo: require('@shared/assets/images/transaction-image-3.png'),
  },
  {
    id: 4,
    name: 'Rent car',
    date: '2024-06-18',
    time: '12:00',
    amount: 300,
    category: 'car',
    categoryColor: COLORS.yellow,
    logo: require('@shared/assets/images/transaction-image-1.png'),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserHeader
          handleAvatar={() => console.log('Press Avatar')}
          handleQRcode={() => console.log('Press QRcode')}
        />
        <CategoryTabs
          handleTravel={() => console.log('Press Travel')}
          handleDelivery={() => () => console.log('Press Delivery')}
          handleBonuses={() => () => console.log('Press Bonuses')}
          handleSupport={() => () => console.log('Press Support')}
        />
        <View style={styles.contentCard}>
          <CardsCarousel />
        </View>
        <ProgressBar transactions={transactions} />
        <TransactionsList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
  },
  contentCard: {
    height: 122,
  },
});
