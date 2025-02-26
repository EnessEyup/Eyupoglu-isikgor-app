import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';
import { sendEmail } from '../services/EmailService';

const DocumentScreen = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    fileNumber: '',
    requestDetails: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Form validasyonu
    if (!formData.fullName.trim()) {
      Alert.alert('Uyarı', 'Lütfen adınızı ve soyadınızı girin.');
      return;
    }
    if (!formData.email.trim()) {
      Alert.alert('Uyarı', 'Lütfen e-posta adresinizi girin.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      Alert.alert('Uyarı', 'Lütfen telefon numaranızı girin.');
      return;
    }
    if (!formData.requestDetails.trim()) {
      Alert.alert('Uyarı', 'Lütfen talebinizi açıklayın.');
      return;
    }

    setLoading(true);
    try {
      await sendEmail(formData);
      Alert.alert(
        'Başarılı',
        'Talebiniz alınmıştır. En kısa sürede e-posta adresiniz üzerinden size dönüş yapılacaktır.',
        [
          {
            text: 'Tamam',
            onPress: () => {
              setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                fileNumber: '',
                requestDetails: '',
              });
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert(
        'Hata',
        'Talep gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Müvekkil Talebi</Text>
        <Text style={styles.heroSubtitle}>
          Talebinizi iletin, size özel çözüm sunalım
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formBox}>
          <View style={styles.formHeader}>
            <Icon name="text-box-check" size={24} color={colors.primary} />
            <Text style={styles.formTitle}>Talep Formu</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad Soyad</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="account"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Adınız ve soyadınız"
                value={formData.fullName}
                onChangeText={text =>
                  setFormData({ ...formData, fullName: text })
                }
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-posta</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="email"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="E-posta adresiniz"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={text => setFormData({ ...formData, email: text })}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefon Numarası</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="phone"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="5XX XXX XX XX"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={text =>
                  setFormData({ ...formData, phoneNumber: text })
                }
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Dosya Numarası (Varsa)</Text>
            <View style={styles.inputContainer}>
              <Icon
                name="folder"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Dosya numaranız"
                value={formData.fileNumber}
                onChangeText={text =>
                  setFormData({ ...formData, fileNumber: text })
                }
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Talebiniz</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Hukuki talebinizi detaylı bir şekilde açıklayın"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                value={formData.requestDetails}
                onChangeText={text =>
                  setFormData({ ...formData, requestDetails: text })
                }
              />
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.submitButton,
              loading && styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={colors.background} />
            ) : (
              <>
                <Text style={styles.submitButtonText}>Talebi Gönder</Text>
                <Icon name="send" size={20} color={colors.background} />
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Icon name="information" size={20} color={colors.textLight} />
          <Text style={styles.infoText}>
            Eyüpoğlu & Işıkgör Hukuk Bürosu'nun bir müvekkili olarak dosya
            numaranızı belirtmeniz durumunda talebinize en yakın zamanda mail
            üzerinden dönüş yapılacaktır.
          </Text>
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
    padding: 24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 16,
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
  formContainer: {
    padding: 16,
  },
  formBox: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 12,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
  },
  textAreaContainer: {
    minHeight: 120,
    alignItems: 'flex-start',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  submitButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
});

export default DocumentScreen;
