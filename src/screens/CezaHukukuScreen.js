import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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

const CezaHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Ceza Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          Toplumsal düzenin teminatı için profesyonel hukuki destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="scale-balance"
        title="Ceza Hukuku Nedir?"
        content="Ceza hukuku, suç işlenmesi durumunda devletin belirlediği yasal düzenlemelere göre suçlulara uygulanan cezaları ve ceza adalet sistemini düzenleyen hukuk dalıdır. Temel amacı, toplum düzenini sağlamak, suç işleyenleri cezalandırmak ve suç oranlarını azaltmaktır."
      />

      {/* Amaç ve Kapsam */}
      <Section
        icon="shield-check"
        title="Amaç ve Kapsam"
        content="Ceza hukuku, suçun tanımını yapar, ceza türlerini belirler ve ceza yargılaması sürecini yönetir. Özellikle ceza hukuku, suç ve cezalar arasındaki dengeyi sağlamak için adil ve etkili bir hukuk sistemi oluşturmayı hedefler. Bu doğrultuda, suç işleyenlerin hakları ile toplumun güvenliği arasında dengeli bir yaklaşım benimser."
      />

      {/* Suç ve Cezalar */}
      <Section
        icon="gavel"
        title="Suç ve Cezalar"
        content="Ceza hukuku, suçların tanımını yapar ve suç işleyenler için öngörülen cezaları belirler. Suçlar, genellikle kanunlar tarafından belirlenen kriterlere göre sınıflandırılır ve cezalar da bu suçların ciddiyetine göre belirlenir."
      />

      {/* Ceza Yargılaması */}
      <Section
        icon="file-document-outline"
        title="Ceza Yargılaması"
        content="Ceza hukuku, suç işleyenlerin yargılanma sürecini yönetir. Suçluların adil bir şekilde yargılanması ve haklarının korunması ceza adaletinin temel prensiplerindendir. Ceza yargılaması sürecinde deliller toplanır, tanıklar dinlenir ve mahkemelerce kararlar verilir."
      />

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: Ceza Hukuku Alanında Profesyonel
          Destek
        </Text>
        <Text style={styles.highlightContent}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu, ceza hukuku alanında uzmanlaşmış
          deneyimli avukatlarıyla müvekillerine profesyonel destek sunmaktadır.
          Kadıköy'de bulunan hukuk bürosu, müvekkillerinin haklarını korumak ve
          adil bir şekilde savunmak için titizlikle çalışmaktadır. Ceza
          yargılaması sürecinde müvekillerine rehberlik eder ve etkili savunma
          stratejileri geliştirir.
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.secondary,
    opacity: 0.9,
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
});

export default CezaHukukuScreen;
