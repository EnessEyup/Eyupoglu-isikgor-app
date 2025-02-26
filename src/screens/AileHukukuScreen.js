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

const AileHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Aile Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          Ailenizin hukuki güvenliği için profesyonel destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="account-group"
        title="Aile Hukuku Nedir?"
        content="Aile hukuku, aile ilişkilerini ve aile içi sorunları düzenleyen bir hukuk dalıdır. Evlilik, boşanma, velayet, vesayet ve nafaka gibi konuları içerir ve aile üyelerinin haklarını ve sorumluluklarını tanımlar."
      />

      {/* Evlilik */}
      <Section
        icon="ring"
        title="Evlilik"
        content="Evlilik, aile hukukunun temel taşlarından biridir. Evlilik sözleşmesi, çiftlerin evlilik sürecindeki hak ve sorumluluklarını düzenler. Evlilik birliğindeki haklar ve sorumluluklar, aile hukuku tarafından belirlenir ve güvence altına alınır."
      />

      {/* Boşanma */}
      <Section
        icon="file-document-edit"
        title="Boşanma"
        content="Boşanma, evlilik birliğinin sona ermesini ifade eder. Aile hukuku kapsamında incelenen boşanma davalarında çiftlerin hakları ve yükümlülükleri belirlenir. Boşanma sürecinde tarafların haklarının korunması ve anlaşmazlıkların çözülmesi aile hukuku çerçevesinde gerçekleşir."
      />

      {/* Çocukla İlgili Konular */}
      <Section
        icon="account-child"
        title="Çocukla İlgili Konular"
        content="Aile hukuku, çocukların velayetini, vesayetini ve bakımını düzenler. Çocukların en iyi çıkarlarını korumayı hedefleyen velayet davaları, ebeveyn hak ve sorumluluklarını dikkate alarak çözümlenir."
      />

      {/* Nafaka */}
      <Section
        icon="cash"
        title="Nafaka"
        content="Nafaka, boşanma veya ayrılık durumlarında bir eşin diğerine maddi destek sağlaması amacıyla ödenen tutardır. Aile hukuku, nafaka miktarını belirler ve bu ödemelerin düzenli bir şekilde gerçekleşmesini sağlar."
      />

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: Aile Hukukunda Uzmanlık ve Güven
        </Text>
        <Text style={styles.highlightContent}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu, aile hukuku alanında uzmanlaşmış bir
          hukuk firmasıdır. Müvekkillerine, evlilik, boşanma, velayet gibi
          konularda profesyonel destek sunar. Karmaşık aile hukuku süreçlerinde
          müvekkillerine rehberlik ederek, haklarının korunmasına yardımcı olur
          ve çözüm odaklı bir yaklaşım benimser.
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

export default AileHukukuScreen;
