import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import PlusIcon from '@shared/assets/icons/PlusIcon';
import { CardDetails } from '@features/card-details/ui/CardDetails';

export const CardsCarousel = () => {
  const cards = [
    {
      id: 1,
      type: 'Debit',
      amount: 4098.12,
      number: '4385438543854385',
      background: require('@shared/assets/images/card-debit.png'),
    },
    {
      id: 2,
      type: 'Virtual',
      amount: 14.71,
      number: '4385438543859081',
      background: require('@shared/assets/images/card-virtual.png'),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {cards.map((card) => (
        <CardDetails key={card.id} card={card} />
      ))}
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => console.log('Press Add Card')}
      >
        <PlusIcon />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  buttonAdd: {
    width: 40,
    height: 98,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: COLORS.secondaryBackground,
  },
});
