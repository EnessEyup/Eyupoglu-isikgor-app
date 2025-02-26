import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../theme/colors';
import { sendAppointmentEmail } from '../services/AppointmentEmailService';

const AppointmentScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'İsim alanı zorunludur';
    if (!formData.phone) tempErrors.phone = 'Telefon alanı zorunludur';
    if (
      formData.phone &&
      !/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))
    ) {
      tempErrors.phone = 'Geçerli bir telefon numarası giriniz';
    }
    if (!formData.description) tempErrors.description = 'Konu alanı zorunludur';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const appointmentData = {
          name: formData.name,
          phone: formData.phone,
          description: formData.description,
          selectedDate: selectedDate.toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          }),
        };

        await sendAppointmentEmail(appointmentData);

        Alert.alert(
          'Randevu Talebi Alındı',
          'Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.',
          [{ text: 'Tamam', onPress: () => resetForm() }],
        );
      } catch (error) {
        Alert.alert('Hata', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      description: '',
    });
    setSelectedDate(new Date());
    setErrors({});
  };

  const formatDate = date => {
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  };

  const onDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardView}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Text style={styles.heroTitle}>Randevu Al</Text>
          <Text style={styles.heroSubtitle}>
            Size en uygun zamanda görüşelim
          </Text>
        </View>

        <View style={styles.formContainer}>
          {/* Ad Soyad */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad Soyad</Text>
            <View
              style={[styles.inputContainer, errors.name && styles.errorInput]}>
              <Icon
                name="account"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Adınız ve soyadınız"
                value={formData.name}
                onChangeText={text => {
                  setFormData({ ...formData, name: text });
                  if (errors.name) {
                    setErrors({ ...errors, name: null });
                  }
                }}
              />
            </View>
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          {/* Telefon */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefon Numarası</Text>
            <View
              style={[
                styles.inputContainer,
                errors.phone && styles.errorInput,
              ]}>
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
                value={formData.phone}
                onChangeText={text => {
                  setFormData({ ...formData, phone: text });
                  if (errors.phone) {
                    setErrors({ ...errors, phone: null });
                  }
                }}
              />
            </View>
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>

          {/* Tarih */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Randevu Tarihi</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateContainer}>
              <Icon
                name="calendar"
                size={20}
                color={colors.primary}
                style={styles.inputIcon}
              />
              <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={onDateChange}
                minimumDate={new Date()}
              />
            )}
          </View>

          {/* Konu */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Görüşme Konusu</Text>
            <View
              style={[
                styles.inputContainer,
                styles.textAreaContainer,
                errors.description && styles.errorInput,
              ]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Görüşmek istediğiniz konuyu kısaca açıklayınız"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={formData.description}
                onChangeText={text => {
                  setFormData({ ...formData, description: text });
                  if (errors.description) {
                    setErrors({ ...errors, description: null });
                  }
                }}
              />
            </View>
            {errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}
          </View>

          {/* Submit Button */}
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
              <Text style={styles.submitButtonText}>Randevu Talep Et</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  formContainer: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: '600',
  },
  errorInput: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
  submitButtonDisabled: {
    backgroundColor: colors.disabled,
  },
});

export default AppointmentScreen;
