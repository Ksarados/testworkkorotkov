import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@shared/lib/constants/colors';
import ArrowBackIcon from '@shared/assets/icons/ArrowBackIcon';
import MessageIcon from '@shared/assets/icons/MessageIcon';

export const HeaderNotice = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Press Back')}>
        <ArrowBackIcon />
      </TouchableOpacity>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity onPress={() => console.log('Press Notice')}>
        <MessageIcon />
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
