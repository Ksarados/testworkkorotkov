import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserHeader } from '@widgets/user-header/ui/UserHeader';
import { CategoryTabs } from '@widgets/categoty-tabs/ui/CategoryTabs';
import { CardsCarousel } from '@widgets/card-carousel/ui/CardCarousel';
import { COLORS } from '@shared/lib/constants/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
      <CardsCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
  },
});
