import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import { formatDateNotice } from '@shared/lib/utils/FormatDate';

export const DateNoticeWidget = ({ date }: { date: string }) => {
  // Тестовые даты
  const today = '2024-06-20';
  const yesterday = '2024-06-19';

  const dateHeader = () => {
    if (date === today) return 'Today';
    if (date === yesterday) return 'Yesterday';
    return formatDateNotice(date);
  };

  return (
    <View style={styles.container}>
      {(date === today || date === yesterday) && (
        <>
          <Text style={styles.text}>{dateHeader()}, </Text>
          <Text style={styles.text}>{formatDateNotice(date)}</Text>
        </>
      )}
      {date !== today && date !== yesterday && (
        <>
          <Text style={styles.text}>{formatDateNotice(date)}, </Text>
          <Text style={styles.text}>{date.slice(0, 4)}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 24, paddingHorizontal: 16 },
  text: {
    color: COLORS.amountTotal,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 16,
  },
});
