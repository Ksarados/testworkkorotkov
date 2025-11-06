import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';

export const HeaderNotice = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    color: COLORS.white,
  },
});
