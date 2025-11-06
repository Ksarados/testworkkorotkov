import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MastercardIcon from '@shared/assets/icons/MastercardIcon';
import { COLORS } from '@shared/lib/constants/colors';
import { CardDetailsProps } from '../model/types';

export const CardDetails = ({ card }: CardDetailsProps) => {
  return (
    <TouchableOpacity onPress={() => console.log('Press Card')}>
      <ImageBackground source={card.background} style={styles.buttonCard}>
        <MastercardIcon />

        <Text style={styles.textAmount}>
          ${card.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
        <View style={styles.typeCard}>
          <Text style={styles.typeText}>{card.type}</Text>
          <Text style={styles.typeText}>•• {card.number.slice(-4)}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCard: {
    width: 142,
    height: 98,
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
    padding: 12,
    justifyContent: 'space-between',
  },
  textAmount: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 13,
  },
  typeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeText: { color: COLORS.white },
});
