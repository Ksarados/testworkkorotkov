import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import { formatDateNotice } from '@shared/lib/utils/FormatDate';

type NoticeItemProps = {
  name: string;
  type: string;
  amount: number;
  date: string;
  time: string;
  image: number;
  categoryColor: string;
  discription: string;
  numberCard: string;
  typeCard: string;
  typeTransaction: string;
  totalAmount: number;
};

export const NoticeItem = ({
  name,
  type,
  amount,
  date,
  time,
  image,
  categoryColor,
  discription,
  typeTransaction,
  numberCard,
  typeCard,
  totalAmount,
}: NoticeItemProps) => {
  const char = typeTransaction === 'income' ? '+' : '-';
  return (
    <View style={styles.container}>
      <View style={styles.logoAndNameView}>
        <Image source={image} style={styles.logo} />
        {typeTransaction !== 'notice' && (
          <View style={styles.nameAndCategory}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.titleAmount}>
              {char}$
              {amount != null
                ? amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : '0'}
            </Text>
            <Text style={styles.categoryText}>
              {typeCard} •• {numberCard.slice(-4)}
            </Text>
            <Text style={styles.categoryText}>
              $
              {totalAmount != null
                ? totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : '0'}
            </Text>
            <View style={styles.date}>
              <Text style={styles.dateText}>
                {formatDateNotice(date)} {date.slice(0, 4)},
              </Text>
              <Text style={styles.dateText}>{time}</Text>
              <Text style={styles.dateText}>• {type}</Text>
            </View>
          </View>
        )}
        {typeTransaction === 'notice' && (
          <View style={styles.noticeContent}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.categoryText}>{discription}</Text>
            <View style={styles.date}>
              <Text style={styles.dateText}>{formatDateNotice(date)},</Text>
              <Text style={styles.dateText}>{time}</Text>
              <Text style={styles.dateText}>{type}</Text>
            </View>
          </View>
        )}
      </View>
      {typeTransaction === 'income' && (
        <View style={styles.categoryView}>
          <View
            style={[styles.categoryCircle, { backgroundColor: categoryColor }]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoAndNameView: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 16,
  },
  nameAndCategory: { gap: 6, paddingRight: 16 },
  title: {
    color: COLORS.white,
    fontWeight: '500',
  },
  titleAmount: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: 21,
  },
  date: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  categoryCircle: {
    marginTop: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  noticeContent: {
    flex: 1,
    flexShrink: 1,
    paddingRight: 16,
    gap: 6,
  },
  categoryText: {
    color: COLORS.amountTotal,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  dateText: { color: COLORS.secondaryText, fontSize: 12 },
  categoryView: { alignItems: 'flex-start', height: '100%' },
});
