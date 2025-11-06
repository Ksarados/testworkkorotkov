import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import { ProgressBarProps } from '@widgets/progress-bar/model/types';

export const ProgressBar = ({ transactions }: ProgressBarProps) => {
  // Вычисляем общую сумму
  const totalAmount = transactions?.reduce(
    (sum, transaction) => sum + Math.abs(transaction.amount),
    0
  );

  // Если нет транзакций, показываем пустую прогресс-бар
  if (totalAmount === 0) {
    return (
      <View style={styles.container}>
        <View style={[styles.progressBar, styles.emptyBar]} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text style={styles.header}>Expenses in </Text>
          <Text style={[styles.header, styles.month]}>June</Text>
        </View>
        <Text style={styles.amount}>
          ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </View>
      <View style={styles.progressBar}>
        {transactions.map((transaction, index) => {
          // Вычисляем ширину сегмента в процентах
          const widthPercent =
            (Math.abs(transaction.amount) / totalAmount) * 100;

          return (
            <View
              key={index}
              style={[
                styles.segment,
                {
                  width: `${widthPercent}%`,
                  backgroundColor: transaction.categoryColor,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 0,
    gap: 16,
    marginTop: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
  },
  header: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: '500',
  },
  month: {
    color: COLORS.orange,
  },
  amount: {
    color: COLORS.amountTotal,
    fontSize: 18,
    fontWeight: '500',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.background,
    borderRadius: 3,
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 2,
  },
  segment: {
    height: '100%',
    borderRadius: 3,
  },
  emptyBar: {
    backgroundColor: COLORS.lightGray,
  },
});
