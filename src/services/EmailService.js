import { Platform, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { logger } from '../utils/logger';

const SERVICE_ID = 'service_aoxam6m';
const TEMPLATE_ID = 'template_vdh14im';
const PUBLIC_KEY = 'H2wZhBRGz2dwAsoZW';

const API_URL = Platform.select({
  android: 'https://api.emailjs.com/api/v1.0/email/send',
  default: 'https://api.emailjs.com/api/v1.0/email/send',
});

export const sendEmail = async formData => {
  try {
    // Network bağlantısı kontrolü
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
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        file_number: formData.fileNumber || 'Belirtilmedi',
        message: formData.requestDetails,
      },
    };

    // Axios kullanarak istek yapalım (fetch yerine)
    const response = await axios({
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        Origin:
          Platform.OS === 'web' ? window.location.origin : 'app://hukukapp',
      },
      data: data,
      timeout: 30000, // 30 saniye timeout
    });

    logger.log('Response:', response.data);

    if (response.status === 200) {
      return { success: true, message: 'E-posta başarıyla gönderildi' };
    } else {
      throw new Error('Sunucu hatası: ' + response.status);
    }
  } catch (error) {
    logger.error('Email sending error:', error);

    let errorMessage = 'E-posta gönderilirken bir hata oluştu';

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
