import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserHeader } from '@widgets/user-header/ui/UserHeader';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
