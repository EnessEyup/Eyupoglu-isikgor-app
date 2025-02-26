import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

export const ContactScreenItem = ({
  icon,
  title,
  content,
  onPress,
  color = colors.primary,
}) => (
  <TouchableOpacity
    style={[styles.contactItem, { borderLeftColor: color }]}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
      <Icon name={icon} size={24} color={color} />
    </View>
    <View style={styles.contactContent}>
      <Text style={[styles.contactTitle, { color }]}>{title}</Text>
      <Text style={styles.contactText}>{content}</Text>
    </View>
    {onPress && (
      <View style={styles.arrowContainer}>
        <Icon
          name="chevron-right"
          size={20}
          color={color}
          style={styles.arrowIcon}
        />
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  contactItem: {
    borderLeftWidth: 4,
    backgroundColor: colors.surface,
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  arrowIcon: {
    opacity: 0.7,
  },
  // ... diğer stiller
});
