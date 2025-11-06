import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AvatarIcon from '@shared/assets/icons/AvatarIcon';
import QRcodeIcon from '@shared/assets/icons/QRcodeIcon';
import ArrowRightIcon from '@shared/assets/icons/ArrowRightIcon';
import { COLORS } from '@shared/lib/constants/colors';

type UserHeaderProps = {
  handleAvatar: () => void;
  handleQRcode: () => void;
};

export const UserHeader = ({ handleAvatar, handleQRcode }: UserHeaderProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={handleAvatar} style={styles.button}>
      <AvatarIcon />
      <Text style={styles.text}>Charlotte</Text>
      <ArrowRightIcon />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleQRcode}>
      <QRcodeIcon />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingVertical: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: { color: COLORS.white, fontSize: 16, fontWeight: '500' },
});
