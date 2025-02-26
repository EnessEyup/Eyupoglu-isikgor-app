import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/headerStyles';

const makePhoneCall = () => {
  Linking.openURL('tel:+905316838536');
};

export const CustomHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <View style={styles.headerContent}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuButton}>
        <Icon name="menu" size={26} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Eyüpoğlu & Işıkgör</Text>
    </View>

    <TouchableOpacity onPress={makePhoneCall} style={styles.phoneButton}>
      <Icon name="phone" size={16} color="#FFFFFF" />
      <Text style={styles.phoneText}>531 683 85 36</Text>
    </TouchableOpacity>
  </View>
);
