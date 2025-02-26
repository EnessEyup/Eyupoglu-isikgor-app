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

const IsHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>İş Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          İşçi ve işveren haklarının korunması için profesyonel hukuki destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="briefcase"
        title="İş Hukuku Nedir?"
        content="İş hukuku, iş ilişkileriyle ilgili yasal düzenlemeleri içeren bir hukuk dalıdır. Temel amacı, işçi ve işveren arasındaki ilişkileri düzenlemek, işçilerin haklarını korumak ve işverenlerin sorumluluklarını belirlemektir. İş hukuku, çalışma hayatının düzenlenmesi ve adil bir iş ilişkisi ortamı sağlanması için önemlidir."
      />

      {/* Kapsam ve Düzenlemeler */}
      <Section
        icon="file-document-outline"
        title="Kapsam ve Düzenlemeler"
        content="İş hukuku kapsamında işçi ve işveren arasındaki ana unsurlar olan iş sözleşmeleri, çalışma saatleri, ücret ve yan haklar gibi konular düzenlenir. Ayrıca işçi sendikalarının hakları ve işyerindeki sağlık ve güvenlik standartları da iş hukuku çerçevesinde ele alınır."
      />

      {/* İş Hukukunun Önemi */}
      <Section
        icon="shield-check"
        title="İş Hukukunun Önemi"
        content="İş hukuku, işverenlerin çalışanlarını istihdam etme, işçilerin haklarını koruma, iş yerindeki sağlık ve güvenlik koşullarını düzenleme gibi konularda standartlar oluşturur. Ayrıca işçi ve işveren arasındaki anlaşmazlıkların çözümünde de iş hukuku önemli bir rol oynar."
      />

      {/* Uyuşmazlık Çözümü */}
      <Section
        icon="handshake"
        title="Uyuşmazlık Çözümü"
        content="Bu kapsamda arabuluculuk, tahkim ve dava yoluyla uyuşmazlıkların çözümü gibi yöntemler iş hukukunun alanına girer. İşçi veya işveren olarak, haklarınızı korumak veya iş yasalarına uygun hareket etmek için profesyonel hukuki destek almak önemlidir."
      />

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: İş Hukukunda Uzman Destek
        </Text>
        <Text style={styles.highlightContent}>
          İş hukukuyla ilgili birçok karmaşık konu ve durum bulunmaktadır. İşçi
          veya işveren olarak, haklarınızı korumak veya iş yasalarına uygun
          hareket etmek için bir iş hukuku avukatından profesyonel destek almak
          önemlidir. Özellikle işçi haklarının ihlal edildiği durumlarda veya
          işverenle yaşanan anlaşmazlıklarda bir avukatın yardımı hayati önem
          taşır.
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

export default IsHukukuScreen;
