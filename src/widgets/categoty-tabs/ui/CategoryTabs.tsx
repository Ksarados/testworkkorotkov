import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EarthIcon from '@shared/assets/icons/EarthIcon';
import TransferIcon from '@shared/assets/icons/TransferIcon';
import GiftIcon from '@shared/assets/icons/GiftIcon';
import HeadphonesIcon from '@shared/assets/icons/HeadphonesIcon';
import { COLORS } from '@shared/lib/constants/colors';

type CategoryTabsProps = {
  handleTravel: () => void;
  handleDelivery: () => void;
  handleBonuses: () => void;
  handleSupport: () => void;
};

export const CategoryTabs = ({
  handleTravel,
  handleDelivery,
  handleBonuses,
  handleSupport,
}: CategoryTabsProps) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleTravel}>
      <EarthIcon />
      <Text style={styles.text}>Travel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleDelivery}>
      <TransferIcon />
      <Text style={styles.text}>Delivery</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleBonuses}>
      <GiftIcon />
      <Text style={styles.text}>Bonuses</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleSupport}>
      <HeadphonesIcon />
      <Text style={styles.text}>Support</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: COLORS.background,
    padding: 8,
  },
  button: {
    alignItems: 'center',
    gap: 8,
  },
  text: { color: COLORS.white, fontWeight: '500' },
});
