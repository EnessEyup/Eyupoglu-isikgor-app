import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity
        style={styles.questionContainer}
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.7}>
        <View style={styles.questionHeader}>
          <Icon
            name={isExpanded ? 'minus-circle' : 'plus-circle'}
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
          <Text style={styles.question}>{question}</Text>
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQScreen = () => {
  const faqs = [
    {
      question: 'İlk görüşme ücretli midir?',
      answer:
        'İlk görüşmemiz tanışma ve hukuki süreç hakkında bilgilendirme amaçlı olup ücretsizdir. Bu görüşmede hukuki sorununuzu dinler, çözüm önerilerimizi paylaşır ve izlenecek yol haritasını belirleriz.',
    },
    {
      question: 'Dava süreçleri ne kadar sürer?',
      answer:
        'Dava süreleri, davanın türüne, karmaşıklığına ve yargı sisteminin iş yüküne göre değişiklik gösterir. Örneğin, basit bir boşanma davası 3-6 ay sürebilirken, karmaşık ticari davalar 1-2 yıl veya daha uzun sürebilir. Size özel süreç değerlendirmesi için detaylı görüşme yapılması gerekir.',
    },
    {
      question: 'Hangi hukuki alanlarda hizmet veriyorsunuz?',
      answer:
        'Büromuz; İcra ve İflas Hukuku, Ticaret Hukuku, Aile Hukuku, İş Hukuku, Gayrimenkul Hukuku, Ceza Hukuku başta olmak üzere geniş bir yelpazede hukuki hizmet sunmaktadır. Her alanda uzman avukatlarımızla profesyonel destek sağlıyoruz.',
    },
    {
      question: 'Online hukuki danışmanlık hizmeti veriyor musunuz?',
      answer:
        'Evet, teknolojinin sunduğu imkanları kullanarak online hukuki danışmanlık hizmeti veriyoruz. Video konferans yöntemiyle görüşme yapabilir, hukuki süreçlerinizi uzaktan yönetebiliriz. Bu hizmet özellikle farklı şehirlerdeki müvekkillerimiz için büyük kolaylık sağlamaktadır.',
    },
    {
      question: 'Ücret ve ödeme koşullarınız nasıl?',
      answer:
        'Ücretlendirme, davanın türüne, karmaşıklığına ve gerektirdiği iş yüküne göre değişiklik gösterir. Her dava/iş için özel bir değerlendirme yapılır ve ücret bilgisi baştan netleştirilir. Ödeme koşulları konusunda da müvekkillerimize esneklik sağlıyoruz.',
    },
    {
      question: 'Acil durumlarda size nasıl ulaşabiliriz?',
      answer:
        'Acil durumlar için 7/24 ulaşılabilir durumdayız. Büromuzun telefon numarası ve mobil uygulamamız üzerinden bize her zaman ulaşabilirsiniz. Acil durumlar için nöbetçi avukat sistemimiz mevcuttur.',
    },
    {
      question: 'Dava sürecinde neler yapmam gerekiyor?',
      answer:
        'Dava sürecinde sizden beklenen temel görev, gerekli belgeleri zamanında temin etmek ve duruşma tarihlerinde hazır bulunmaktır. Tüm hukuki süreçleri biz yönetiriz ve sizi her aşamada bilgilendiririz. Süreç boyunca yapmanız gerekenleri detaylı şekilde anlatır ve yönlendiririz.',
    },
    {
      question: 'Büronuzda kaç avukat görev yapıyor?',
      answer:
        'Büromuzda farklı hukuk dallarında uzmanlaşmış deneyimli avukatlarımız görev yapmaktadır. Her hukuk dalı için ayrı uzman avukatlarımız mevcut olup, gerektiğinde ekip çalışması da yapılmaktadır.',
    },
    {
      question: 'Davamın başarı şansı nedir?',
      answer:
        'Davanın başarı şansı, her vakanın kendine özgü koşullarına, mevcut delillere ve hukuki duruma göre değişiklik gösterir. İlk görüşmede dosyanızı detaylı inceleyerek size gerçekçi bir değerlendirme sunarız. Başarı şansı düşük davalarda bunu açıkça belirtir, alternatif çözüm önerileri sunarız.',
    },
    {
      question: 'Büronuzun çalışma saatleri nedir?',
      answer:
        'Büromuz hafta içi 09:00-18:00 saatleri arasında hizmet vermektedir. Ancak randevu ile mesai saatleri dışında da görüşme yapılabilir. Acil durumlar için 7/24 ulaşılabilir durumdayız.',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroTitle}>Sıkça Sorulan Sorular</Text>
        <Text style={styles.heroSubtitle}>
          Merak ettiklerinize hızlı cevaplar
        </Text>
      </View>

      <View style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
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
  faqContainer: {
    padding: 16,
  },
  faqItem: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionContainer: {
    padding: 16,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    lineHeight: 24,
  },
  answerContainer: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: colors.surface,
  },
  answer: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
    paddingLeft: 36,
  },
});

export default FAQScreen;
