import { Platform, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { logger } from '../utils/logger';

const SERVICE_ID = 'service_aoxam6m';
const TEMPLATE_ID = 'template_vdh14im'; // Randevu için yeni template ID
const PUBLIC_KEY = 'H2wZhBRGz2dwAsoZW';

const API_URL = Platform.select({
  android: 'https://api.emailjs.com/api/v1.0/email/send',
  default: 'https://api.emailjs.com/api/v1.0/email/send',
});

export const sendAppointmentEmail = async appointmentData => {
  try {
    // Check network connectivity first
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      throw new Error('İnternet bağlantısı bulunamadı');
    }

    const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        to_email: 'omrfarukeyupoglu@gmail.com',
        recipient: 'omrfarukeyupoglu@gmail.com',
        to_name: 'Ömer Faruk Eyüpoğlu',
        from_name: appointmentData.name,
        from_email: appointmentData.email || 'Belirtilmedi',
        phone_number: appointmentData.phone,
        appointment_date: appointmentData.selectedDate,
        message: appointmentData.description,
      },
    };

    logger.log('Sending appointment email request to:', API_URL);
    logger.log('Request data:', JSON.stringify(data, null, 2));

    const response = await axios({
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        Origin:
          Platform.OS === 'web' ? window.location.origin : 'app://hukukapp',
      },
      data: data,
      timeout: 30000,
    });

    logger.log('Response:', response.data);

    if (response.status === 200) {
      return { success: true, message: 'Randevu talebi başarıyla gönderildi' };
    } else {
      throw new Error('Sunucu hatası: ' + response.status);
    }
  } catch (error) {
    logger.error('Appointment email error:', error);

    let errorMessage = 'Randevu talebi gönderilirken bir hata oluştu';

    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Bağlantı zaman aşımına uğradı';
      } else if (error.response) {
        errorMessage = `Sunucu hatası: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Sunucuya ulaşılamıyor';
      }
    } else if (error.message.includes('İnternet bağlantısı bulunamadı')) {
      errorMessage = error.message;
    }

    Alert.alert('Hata', errorMessage);
    throw new Error(errorMessage);
  }
};
