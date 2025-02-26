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

const GayrimenkulHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Gayrimenkul Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          Gayrimenkul işlemlerinizde profesyonel hukuki destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="home"
        title="Gayrimenkul Hukuku Nedir?"
        content="Gayrimenkul hukuku, gayrimenkul mülkiyeti ve kullanımıyla ilgili yasal düzenlemeleri içeren bir hukuk dalıdır. Bu alanda, mülk sahiplerinin haklarını korumak, mülklerin satışı ve devri, kira sözleşmeleri, tapu işlemleri ve emlak vergisi gibi konular ele alınır."
      />

      {/* Kapsam */}
      <Section
        icon="file-document-outline"
        title="Gayrimenkul Hukuku Neleri Kapsar?"
        content="Gayrimenkul hukuku, arazi, bina, daire, arsa gibi mülklerin edinilmesi, kullanılması, devri ve miras bırakılması gibi konuları kapsar. Ayrıca kiracı ve ev sahibi hakları, inşaat projeleri, emlak vergisi ve çevre düzenlemeleri gibi konular da gayrimenkul hukukunun içinde yer alır."
      />

      {/* Önemi */}
      <Section
        icon="shield-check"
        title="Gayrimenkul Hukukunun Önemi"
        content="Gayrimenkul hukuku, mülk sahiplerinin haklarını korumak ve yasal süreçlerde adil bir şekilde hareket etmelerini sağlamak için gereklidir. Ayrıca gayrimenkul işlemlerinde yaşanabilecek anlaşmazlıkların çözümünde de önemli bir rol oynar."
      />

      {/* Yasal Düzenlemeler */}
      <Section
        icon="gavel"
        title="Yasal Düzenlemeler"
        content="Gayrimenkul hukuku, genellikle arazi, bina, ev, daire, arsa gibi mülklerin mülkiyetinin ve kullanımının düzenlenmesiyle ilgilenir. Bu kapsamda, tapu sicili kayıtları, mülk satışı ve devri, kira sözleşmeleri, ipotekler ve tapu işlemleri gibi konular gayrimenkul hukukunun odak noktaları arasındadır."
      />

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: Gayrimenkul Hukukunda Uzman Destek
        </Text>
        <Text style={styles.highlightContent}>
          Kadıköy merkezli Eyüpoğlu & Işıkgör Hukuk Bürosu, gayrimenkul hukuku
          alanında uzmanlaşmış bir hukuk bürosudur. Gayrimenkul sahipleri,
          kiracılar, emlakçılar ve diğer ilgili taraflar için çeşitli hukuki
          hizmetler sunarak mülk işlemlerinin yasal süreçlerinde rehberlik
          sağlar. Gayrimenkul hukukuyla ilgili her türlü sorunuz için
          profesyonel destek alabilirsiniz.
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

export default GayrimenkulHukukuScreen;
