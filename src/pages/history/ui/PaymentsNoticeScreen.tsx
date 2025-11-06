import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@shared/lib/constants/colors';

export function PaymentsNoticeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PaymentsNoticeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  text: { color: COLORS.white },
});
