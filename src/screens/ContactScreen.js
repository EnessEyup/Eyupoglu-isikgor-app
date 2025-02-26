import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';
import { colors } from '../theme/colors';
import { ContactScreenItem } from '../components/ContactScreenItem';

const ContactScreen = () => {
  const officeLocation = {
    latitude: 41.03389,
    longitude: 28.99169,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel:+905316838536');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:av.berat@eyupogluisikgor.com');
  };

  const handleLocation = () => {
    const address =
      'Ömer Avni Mah. İnebolu Sok. No:3 Derya Han Daire: 9 Kabataş Set Üstü / Beyoğlu İstanbul';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>İletişim</Text>
          <Text style={styles.heroSubtitle}>
            Size yardımcı olmaktan mutluluk duyarız
          </Text>
        </View>
      </View>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={officeLocation}
          scrollEnabled={false}>
          <Marker
            coordinate={{
              latitude: officeLocation.latitude,
              longitude: officeLocation.longitude,
            }}
            title="Eyüpoğlu Işıkgör Hukuk Bürosu"
            description="Derya Han, Kat: 9"
          />
        </MapView>
        <TouchableOpacity
          style={styles.mapButton}
          onPress={handleLocation}
          activeOpacity={0.8}>
          <Icon name="directions" size={20} color={colors.background} />
          <Text style={styles.mapButtonText}>Yol Tarifi Al</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Cards */}
      <View style={styles.contactsContainer}>
        <ContactScreenItem
          icon="phone"
          title="Bizi Arayın"
          content="+90 531 683 85 36"
          onPress={handlePhoneCall}
          color="#4CAF50"
        />

        <ContactScreenItem
          icon="email-outline"
          title="E-posta Gönderin"
          content="av.berat@eyupogluisikgor.com"
          onPress={handleEmail}
          color="#2196F3"
        />

        <ContactScreenItem
          icon="map-marker-outline"
          title="Ofisimizi Ziyaret Edin"
          content="Ömer Avni Mah. İnebolu Sok. No:3 Derya Han Daire: 9 Kabataş Set Üstü / Beyoğlu İstanbul"
          onPress={handleLocation}
          color="#FF5722"
        />

        <View style={styles.officeInfoContainer}>
          <Text style={styles.officeInfoTitle}>Çalışma Saatleri</Text>
          <View style={styles.officeHoursContainer}>
            <View style={styles.officeHoursItem}>
              <Icon name="clock-outline" size={20} color={colors.primary} />
              <View style={styles.officeHoursContent}>
                <Text style={styles.officeHoursDay}>Pazartesi - Cuma</Text>
                <Text style={styles.officeHoursTime}>09:00 - 18:00</Text>
              </View>
            </View>
            <View style={styles.officeHoursItem}>
              <Icon name="clock-remove" size={20} color={colors.error} />
              <View style={styles.officeHoursContent}>
                <Text style={styles.officeHoursDay}>Cumartesi - Pazar</Text>
                <Text style={styles.officeHoursClosed}>Kapalı</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroContainer: {
    backgroundColor: colors.primary,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: -40,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  heroContent: {
    paddingHorizontal: 24,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.secondary,
    opacity: 0.9,
  },
  mapContainer: {
    margin: 16,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  mapButtonText: {
    color: colors.background,
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
  contactsContainer: {
    padding: 16,
  },
  officeInfoContainer: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    marginTop: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  officeInfoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 16,
  },
  officeHoursContainer: {
    gap: 16,
  },
  officeHoursItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  officeHoursContent: {
    marginLeft: 12,
  },
  officeHoursDay: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  officeHoursTime: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 2,
  },
  officeHoursClosed: {
    fontSize: 14,
    color: colors.error,
    marginTop: 2,
  },
});

export default ContactScreen;
