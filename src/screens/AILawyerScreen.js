import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

// predefinedQA'yı kullanıyorsak saklayalım, kullanmıyorsak kaldıralım
// ya da _predefinedQA şeklinde yeniden adlandıralım
const _predefinedQA = {
  boşanma: {
    keywords: ['boşanma', 'boşanmak', 'ayrılık'],
    answer:
      'Boşanma davası açmak için bir avukata başvurmanız gerekir. Anlaşmalı veya çekişmeli boşanma seçenekleri mevcuttur. Her durumda profesyonel hukuki destek almanız önerilir. Size en yakın aile hukuku avukatı ile görüşmenizi tavsiye ederim.',
  },
  icra: {
    keywords: ['icra', 'haciz', 'borç', 'alacak'],
    answer:
      'İcra takibi başlatmak için icra dairesine başvurmanız gerekir. Ancak sürecin doğru yönetilmesi için bir icra hukuku avukatından destek almanız önemlidir. Büromuz bu konuda size yardımcı olabilir.',
  },
  'iş hukuku': {
    keywords: ['iş', 'işten çıkarma', 'tazminat', 'maaş', 'işveren'],
    answer:
      'İş hukuku kapsamında haklarınızı korumak için yasal sürelere dikkat etmelisiniz. İş davası açmadan önce arabuluculuk sürecinden geçilmesi zorunludur. Detaylı bilgi için iş hukuku alanında uzman bir avukata danışmanızı öneririm.',
  },
  kira: {
    keywords: ['kira', 'kiracı', 'ev sahibi', 'tahliye'],
    answer:
      'Kira hukuku ile ilgili sorunlarda, öncelikle karşı tarafla yazılı iletişim kurmanız önemlidir. Anlaşmazlık durumunda, bir gayrimenkul hukuku avukatından destek almanız gerekebilir. Size bu konuda yardımcı olabiliriz.',
  },
  ceza: {
    keywords: ['ceza', 'suç', 'dava', 'şikayet'],
    answer:
      'Ceza hukuku hassas bir alandır ve mutlaka bir avukat eşliğinde hareket edilmelidir. İfade vermeden önce avukatınızla görüşmenizi ve haklarınız konusunda bilgi almanızı öneririm.',
  },
};

const Message = ({ text, isUser, showContactButtons, navigation }) => (
  <View
    style={[
      styles.messageContainer,
      isUser ? styles.userMessage : styles.assistantMessage,
    ]}>
    <Text
      style={[
        styles.messageText,
        isUser ? styles.userMessageText : styles.assistantMessageText,
      ]}>
      {text}
    </Text>
    {showContactButtons && (
      <View style={styles.contactButtons}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL('tel:+905316838536')}>
          <Icon name="phone" size={20} color="#000" />
          <Text style={styles.contactButtonText}>Arayın</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() =>
            Linking.openURL('whatsapp://send?phone=+905316838536')
          }>
          <Icon name="whatsapp" size={20} color="#25D366" />
          <Text style={styles.contactButtonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('Randevu')}>
          <Icon name="calendar" size={20} color="#000" />
          <Text style={styles.contactButtonText}>Randevu</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

const AILawyerScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      text: 'Merhaba! Ben Eyüpoğlu & Işıkgör Hukuk Bürosu asistanıyım. Size nasıl yardımcı olabilirim?',
      isUser: false,
      showContactButtons: false,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      text: inputText,
      isUser: true,
      showContactButtons: false,
    };
    const aiMessage = {
      text: 'Hukuki konularda en doğru ve güvenilir bilgiyi avukatlarımızdan alabilirsiniz. Size özel bir değerlendirme için aşağıdaki seçeneklerden birini kullanarak bizimle iletişime geçebilirsiniz:',
      isUser: false,
      showContactButtons: true,
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInputText('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Hukuki Danışma</Text>
        <Text style={styles.heroSubtitle}>
          Size özel hukuki destek için iletişime geçin
        </Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }>
        {messages.map((message, index) => (
          <Message key={index} {...message} navigation={navigation} />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Hukuki sorunuzu yazın..."
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            !inputText.trim() && styles.sendButtonDisabled,
          ]}
          onPress={handleSend}
          disabled={!inputText.trim()}>
          <Icon name="send" size={24} color={colors.background} />
        </TouchableOpacity>
      </View>

      <View style={styles.disclaimer}>
        <Icon name="information" size={16} color={colors.textLight} />
        <Text style={styles.disclaimerText}>
          En doğru hukuki danışmanlık için avukatlarımızla görüşmenizi öneririz.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroContainer: {
    backgroundColor: '#2C3A47',
    padding: 20,
    paddingTop: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    maxWidth: '85%',
    marginVertical: 8,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#2C3A47',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D4B5B0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    flexWrap: 'wrap',
  },
  assistantMessageText: {
    color: '#FFFFFF',
  },
  userMessageText: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    fontSize: 16,
    color: '#000000',
  },
  sendButton: {
    width: 45,
    height: 45,
    backgroundColor: '#2C3A47',
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 8,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 25,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  contactButtonText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
});

export default AILawyerScreen;
