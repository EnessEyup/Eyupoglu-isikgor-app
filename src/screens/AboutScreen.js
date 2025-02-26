import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

const Section = ({ title, content, icon }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Icon name={icon} size={24} color={colors.primary} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <Text style={styles.sectionContent}>{content}</Text>
  </View>
);

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Hakkımızda</Text>
        <Text style={styles.heroSubtitle}>
          Türkiye'nin önde gelen hukuk firmalarından biri
        </Text>
      </View>

      {/* Main Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/about-image.jpg')}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      {/* Introduction */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>
          Eyüpoğlu & Işıkgör Avukatlık ve Hukuk Bürosu, Türkiye'nin önde gelen
          hukuk firmalarından biridir.
        </Text>
        <Text style={styles.introText}>
          Firmamız, güçlü ve deneyimli avukat kadrosuyla hukuki konularda
          müvekkillerine kusursuz hizmet sunmaktadır. Geniş uzmanlık alanlarına
          sahip olan büromuz, müşteri memnuniyetini her zaman en üst seviyede
          tutmayı ilke edinmiştir.
        </Text>
      </View>

      {/* Our Approach */}
      <Section
        icon="handshake"
        title="Yaklaşımımız"
        content="Hukuk bürosu olarak, şeffaf ve dürüst yaklaşımımızla tanınıyor ve müşterilerimizin tüm ihtiyaçlarına özel çözümler sunuyoruz. Danışmanlık, dava ve temsil hizmetleri alanında uzmanlaşmış olan Eyüpoğlu & Işıkgör Avukatlık ve Hukuk Bürosu, her bir müvekkilinin haklarını en iyi şekilde korumayı ve adaletin sağlanmasını hedeflemektedir."
      />

      {/* Our Values */}
      <Section
        icon="shield-check"
        title="Değerlerimiz"
        content="Profesyonellik, güvenilirlik ve başarı odaklı yaklaşımımız sayesinde müvekkillerimizin bizlere duyduğu güven her zaman en önemli önceliğimiz olmuştur. Hukuk alanındaki gelişmeleri yakından takip ederek, müvekkillerimize etkin ve zamanında çözümler sunmayı amaçlıyoruz."
      />

      {/* Our Mission */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>Misyonumuz</Text>
        <Text style={styles.highlightContent}>
          Eyüpoğlu & Işıkgör Avukatlık ve Hukuk Bürosu, sektörde kendine sağlam
          bir konum edinmiş ve müvekkillerine en iyi hukuki destekleri sağlamak
          için çalışmalarına devam etmektedir. Müvekkillerimizin haklarını
          korumak ve hukuki süreçlerde en iyi sonucu elde etmek için profesyonel
          ve özverili bir şekilde çalışıyoruz.
        </Text>
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
    padding: 24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: colors.secondary,
    opacity: 0.9,
  },
  introContainer: {
    padding: 16,
    marginBottom: 16,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
    lineHeight: 28,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  sectionContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: colors.surface,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 12,
  },
  sectionContent: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
  },
  highlightSection: {
    backgroundColor: colors.primary,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.background,
    marginBottom: 12,
  },
  highlightContent: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.background,
    opacity: 0.9,
  },
  imageContainer: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
});

export default AboutScreen;
