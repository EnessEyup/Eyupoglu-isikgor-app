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

const BulletPoint = ({ text }) => (
  <View style={styles.bulletContainer}>
    <View style={styles.bullet} />
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const IcraHukukuScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>İcra Hukuku</Text>
        <Text style={styles.heroSubtitle}>
          Alacaklarınızın tahsili için profesyonel hukuki destek
        </Text>
      </View>

      {/* Ana Tanım */}
      <Section
        icon="scale-balance"
        title="İcra Hukuku Nedir?"
        content="İcra Hukuku, alacaklıların alacaklarını tahsil etmek için başvurdukları yasal süreçleri ve bu süreçlerin yönetimini düzenleyen hukuk dalıdır. Borçlunun borcunu yerine getirmemesi durumunda, alacaklılar icra yoluyla alacaklarını tahsil etmeye çalışırlar. İcra hukuku, icra takiplerinin nasıl yapılacağını, alacak tahsilatı için hangi adımların izleneceğini ve borçlu ile alacaklı arasındaki ilişkileri belirler."
      />

      {/* İcra Takipleri */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Icon name="file-document-outline" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>İcra Takipleri Nasıl İşler?</Text>
        </View>
        <BulletPoint text="İcra takipleri, alacaklıların icra müdürlüklerine başvurmasıyla başlar. Alacaklı, icra takibi için gerekli belgelerle başvurur ve icra müdürlüğü tarafından başlatılır." />
        <BulletPoint text="Borçluya ödeme emri tebliğ edilir ve borçlu bu ödeme emrine karşı itirazda bulunabilir. İtiraz durumunda, icra takibi mahkemeye intikal eder ve yargı süreci başlar." />
        <BulletPoint text="Mahkeme kararıyla alacaklı lehine hüküm verilirse, alacak tahsili için icra müdürlüğü tarafından icra işlemleri gerçekleştirilir." />
      </View>

      {/* Haklar */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Icon name="shield-check" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>Alacaklı ve Borçlu Hakları</Text>
        </View>
        <BulletPoint text="İcra Hukuku, hem alacaklıların hem de borçluların haklarını korur. Alacaklılar, alacaklarını tahsil etmek için yasal yolları kullanabilirler." />
        <BulletPoint text="Borçlular da icra takibine karşı savunma haklarına sahiptirler. İtiraz etme ve icra takibini durdurma gibi haklara sahiptirler." />
      </View>

      {/* Hukuk Bürosu */}
      <View style={[styles.sectionContainer, styles.highlightSection]}>
        <Text style={styles.highlightTitle}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu: İcra Hukuku Konusunda Profesyonel
          Destek
        </Text>
        <Text style={styles.highlightContent}>
          Eyüpoğlu & Işıkgör Hukuk Bürosu, icra hukuku konusunda uzmanlaşmış bir
          hukuk firmasıdır. Müvekkillerine icra takipleri sürecinde profesyonel
          danışmanlık ve destek sağlar. İcra takiplerinin başarılı bir şekilde
          yürütülmesi için gerekli hukuki adımları atar ve müvekkillerinin
          haklarını korur.
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
});

export default IcraHukukuScreen;
