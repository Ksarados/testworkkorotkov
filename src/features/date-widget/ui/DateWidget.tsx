import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import { formatDate } from '@shared/lib/utils/FormatDate';

export const DateWidget = ({ date }: { date: string }) => {
  // Тестовые даты
  const today = '2024-06-20';
  const yesterday = '2024-06-19';

  const dateHeader = () => {
    if (date === today) return 'Today';
    if (date === yesterday) return 'Yesterday';
    return formatDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dateHeader()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
});
