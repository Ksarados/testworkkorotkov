import { View, FlatList, StyleSheet } from 'react-native';
import { transactions } from '@pages/home/ui/HomeScreen';
import { DateWidget } from '@features/date-widget/ui/DateWidget';
import { TransactionItem } from '@features/transaction-item/ui/TransactionItem';
import { Transaction } from '@widgets/progress-bar/model/types';

export const TransactionsList = () => {
  const dates = [...new Set(transactions.map((t) => t.date))];
  return (
    <View style={styles.container}>
      <FlatList<string>
        data={dates}
        keyExtractor={(_: string, index: number) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item }: { item: string }) => {
          return (
            <>
              <DateWidget date={item} />
              <FlatList<Transaction>
                data={transactions.filter((t) => t.date === item)}
                keyExtractor={(_: Transaction, index: number) =>
                  index.toString()
                }
                scrollEnabled={false}
                renderItem={({ item }: { item: Transaction }) => (
                  <>
                    <TransactionItem
                      name={item.name}
                      type={item.category}
                      amount={item.amount}
                      date={item.date}
                      time={item.time}
                      image={item.logo}
                      categoryColor={item.categoryColor}
                    />
                  </>
                )}
              />
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 12 },
});
