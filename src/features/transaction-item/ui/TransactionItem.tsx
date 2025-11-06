import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import { formatDate } from '@shared/lib/utils/FormatDate';

type TransactionItemProps = {
  name: string;
  type: string;
  amount: number;
  date: string;
  time: string;
  image: number;
  categoryColor: string;
};

export const TransactionItem = ({
  name,
  type,
  amount,
  date,
  time,
  image,
  categoryColor,
}: TransactionItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndNameView}>
        <Image source={image} style={styles.logo} />
        <View style={styles.nameAndCategory}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.category}>
            <View
              style={[
                styles.categoryCircle,
                { backgroundColor: categoryColor },
              ]}
            />
            <Text style={styles.categoryText}>{type}</Text>
          </View>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.title}>${amount.toFixed(2)}</Text>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{formatDate(date)},</Text>
          <Text style={styles.categoryText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoAndNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 12,
  },
  nameAndCategory: { gap: 4 },
  title: {
    color: COLORS.white,
    fontWeight: '500',
  },
  category: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  categoryCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  categoryText: { color: COLORS.amountTotal },
  amount: { alignItems: 'flex-end', gap: 4 },
});
