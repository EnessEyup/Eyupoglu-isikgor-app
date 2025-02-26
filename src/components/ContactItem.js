import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const ContactItem = ({
  _icon,
  _title,
  _content,
  onPress,
  color = colors.primary,
}) => (
  <TouchableOpacity
    style={[styles.contactItem, { borderLeftColor: color }]}
    onPress={onPress}
    activeOpacity={0.7}>
    {/* ... component içeriği ... */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  contactItem: {
    borderLeftWidth: 4,
    // ... diğer stiller
  },
});
