import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../theme/colors';

const PrivacyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aydınlatma Metni</Text>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
          Eyüpoğlu & Işıkgör Hukuk Bürosu olarak, veri sorumlusu sıfatıyla,
          kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve
          dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek,
          saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın
          izin verdiği hallerde üçüncü kişilere açıklayabilecek/aktarabileceğiz.
        </Text>

        <Text style={styles.sectionTitle}>Kişisel Verilerin İşlenme Amacı</Text>
        <Text style={styles.paragraph}>
          Kişisel verileriniz, hukuki danışmanlık ve avukatlık hizmetlerinin
          verilebilmesi, bu hizmetlere ilişkin iletişimin sağlanması, randevu
          organizasyonu ve hizmet kalitesinin artırılması amaçlarıyla
          işlenmektedir.
        </Text>

        <Text style={styles.sectionTitle}>Kişisel Verilerin Aktarılması</Text>
        <Text style={styles.paragraph}>
          Kişisel verileriniz, hukuki yükümlülüklerimizi yerine getirmek
          amacıyla yetkili merciler ve ilgili kamu kurum ve kuruluşları ile
          paylaşılabilecektir.
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
  title: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: 'bold',
    color: colors.primary,
    padding: theme.spacing.lg,
  },
  content: {
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
  paragraph: {
    fontSize: theme.typography.body.fontSize,
    color: colors.text,
    lineHeight: 24,
    marginBottom: theme.spacing.md,
  },
});

export default PrivacyScreen;
