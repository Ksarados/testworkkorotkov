import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AvatarIcon from '@shared/assets/icons/AvatarIcon';
import QRcodeIcon from '@shared/assets/icons/QRcodeIcon';
import ArrowRightIcon from '@shared/assets/icons/ArrowRightIcon';
import { COLORS } from '@shared/lib/constants/colors';

export const UserHeader = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <AvatarIcon />
      <Text style={styles.text}>Charlotte</Text>
      <ArrowRightIcon />
    </TouchableOpacity>
    <QRcodeIcon />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: COLORS.background,
    paddingRight: 16,
    paddingVertical: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: { color: COLORS.white, fontSize: 18 },
});
