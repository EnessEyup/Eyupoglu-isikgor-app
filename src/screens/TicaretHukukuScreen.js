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

const BulletPoint = ({ title, items }) => (
  <View style={styles.bulletSection}>
    <Text style={styles.bulletTitle}>{title}</Text>
    {items.map((item, index) => (
      <View key={index} style={styles.bulletContainer}>
        <View style={styles.bullet} />
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

const TicaretHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Ticaret ve Şirketler Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          Şirketinizin yasal güvenliği için profesyonel hukuki destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="office-building"
        title="Şirketler Hukuku Nedir?"
        content="Şirketler hukuku, ticari işletmelerin kuruluşundan yönetimine, faaliyetlerinin yürütülmesinden sona ermesine kadar olan tüm yasal süreçleri kapsayan bir hukuk dalıdır. Şirketlerin kurulum şekillerini, ortaklar ve yöneticiler arasındaki ilişkileri düzenleyen şirketler hukuku, işletmelerin yasal çerçevede faaliyet göstermesini sağlar. Aynı zamanda, şirketlerin işleyişine dair hak ve yükümlülükleri belirleyerek yasal güvenlik sunar."
      />

      {/* Temel Unsurlar */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Icon name="file-document-outline" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>
            Şirketler Hukukunun Temel Unsurları
          </Text>
        </View>
        <BulletPoint
          items={[
            'Şirket Kuruluşu ve Belgeleri: Şirketlerin kuruluş sürecini, ana sözleşmelerin hazırlanmasını ve şirket tescil işlemlerini içerir.',
            'Yönetim ve Organlar: Şirketlerin yönetim organlarının oluşturulması, bu organların yetki ve sorumluluklarının belirlenmesi ve faaliyetlerinin denetlenmesini sağlar.',
            'Ortaklık ve Hisse Devirleri: Ortaklık ilişkilerinin düzenlenmesi, hisse devir sözleşmeleri ve hissedar haklarının korunması konularını kapsar.',
          ]}
        />
      </View>

      {/* Uzmanlık Alanları */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Icon name="shield-check" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>Uzmanlık Alanlarımız</Text>
        </View>
        <BulletPoint
          items={[
            'Şirket Kuruluşları ve Belgeleri: Şirket kurulum sürecinin her aşamasında destek sunarak ana sözleşme hazırlığı ve tescil işlemlerini yönetir.',
            'Yönetim ve Organlar: Şirketlerin yönetim organlarının yapılandırılması, görev dağılımı ve yasal denetimi konularında danışmanlık sağlar.',
            'Ortaklık ve Hisse Devirleri: Ortaklık ilişkilerinin korunması ve hisse devir süreçlerinin yasal olarak düzenlenmesi konularında uzman desteği sunar.',
          ]}
        />
      </View>

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: Şirketler Hukukunda Uzman Hukuki
          Destek
        </Text>
        <Text style={styles.highlightContent}>
          Kadıköy merkezli Eyüpoğlu & Işıkgör Hukuk Bürosu, şirketler hukuku
          alanında deneyimli bir kadroya sahiptir ve şirket sahipleri,
          yöneticiler ve ortaklar için kapsamlı hukuki hizmetler sunar.
          Şirketlerin yasal ihtiyaçlarına yönelik çözümler üreten büro, şirket
          kuruluşundan yönetim ve hisse devirlerine kadar geniş bir yelpazede
          hukuki destek sağlar.
        </Text>
      </View>

      {/* Müşteri Odaklı Yaklaşım */}
      <View style={[styles.sectionContainer, styles.lastSection]}>
        <View style={styles.sectionHeader}>
          <Icon name="account-group" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>Müşteri Odaklı Yaklaşım</Text>
        </View>
        <Text style={styles.sectionContent}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu, müvekkillerine kişiselleştirilmiş
          çözümler sunarak şirketlerin ihtiyaçlarını en iyi şekilde karşılar.
          Profesyonel ekibi, şirketler hukukuyla ilgili tüm süreçlerde
          müvekkillerine rehberlik eder ve hukuki güvence sunar.
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
  bulletSection: {
    marginTop: 8,
  },
  bulletTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: 12,
  },
  bulletText: {
    flex: 1,
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
  lastSection: {
    marginBottom: 32,
  },
});

export default TicaretHukukuScreen;
