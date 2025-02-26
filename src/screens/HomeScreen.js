import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

// Import images based on platform
const heroImage = Platform.select({
  web: require('../../assets/hero-image.jpg'),
  default: require('../../assets/hero-image.jpg'),
});

const logoImage = Platform.select({
  web: require('../../assets/logo.png'),
  default: require('../../assets/logo.png'),
});

const PracticeArea = ({ icon, title, onPress }) => (
  <TouchableOpacity
    style={styles.practiceAreaCard}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={28} color={colors.primary} />
    </View>
    <Text style={styles.practiceAreaTitle}>{title}</Text>
    <Icon
      name="chevron-right"
      size={20}
      color={colors.textLight}
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

const Tweet = ({ tweet }) => {
  const openTwitterProfile = () => {
    Linking.openURL('https://x.com/eyupogluisikgor');
  };

  return (
    <TouchableOpacity style={styles.tweetCard} activeOpacity={0.7}>
      <View style={styles.tweetHeader}>
        <View style={styles.tweetAuthor}>
          <Image source={logoImage} style={styles.logo} resizeMode="contain" />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>Eyüpoğlu & Işıkgör</Text>
            <Text style={styles.tweetType}>{tweet.type}</Text>
          </View>
        </View>
        <View style={styles.tweetMetrics}>
          <Icon name="eye-outline" size={14} color={colors.textLight} />
          <Text style={styles.viewCount}>{tweet.views}</Text>
          <Text style={styles.tweetDate}>{tweet.date}</Text>
        </View>
      </View>
      <Text style={styles.tweetTitle}>{tweet.title}</Text>
      <Text style={styles.tweetContent} numberOfLines={4}>
        {tweet.content}
      </Text>
      <View style={styles.tweetFooter}>
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={openTwitterProfile}>
          <Text style={styles.readMoreText}>Devamını Oku</Text>
          <Icon name="chevron-right" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const openTwitterProfile = () => {
    Linking.openURL('https://x.com/eyupogluisikgor');
  };

  const openWebsite = () => {
    Linking.openURL('https://eyupogluisikgor.com/calisma-alanlarimiz/');
  };

  const practiceAreas = [
    {
      icon: 'gavel',
      title: 'İCRA VE İFLAS HUKUKU',
      onPress: () => navigation.navigate('IcraHukuku'),
    },
    {
      icon: 'office-building',
      title: 'TİCARET VE ŞİRKETLER HUKUKU',
      onPress: () => navigation.navigate('TicaretHukuku'),
    },
    {
      icon: 'account-group',
      title: 'AİLE HUKUKU',
      onPress: () => navigation.navigate('AileHukuku'),
    },
    {
      icon: 'briefcase',
      title: 'İŞ HUKUKU',
      onPress: () => navigation.navigate('IsHukuku'),
    },
    {
      icon: 'home',
      title: 'GAYRİMENKUL HUKUKU',
      onPress: () => navigation.navigate('GayrimenkulHukuku'),
    },
    {
      icon: 'scale-balance',
      title: 'CEZA HUKUKU',
      onPress: () => navigation.navigate('CezaHukuku'),
    },
  ];

  const tweets = [
    {
      title: 'AYRI AYLARIN ÖDENMEYEN KİRALARI İLE 2 HAKLI İHTAR OLUŞUR MU?',
      content:
        'Muaccel hale gelen kira bedelleri, genellikle tek bir haklı ihtarın konusu olur. Ancak, muaccel kira bedelleri için gönderilen ihtardan sonra, aynı kira yılı içinde bir başka eksik ödeme daha gerçekleşirse, iki haklı ihtar sebebiyle tahliye hakkı doğabilir. Yine de bu yöntem, etkili bir tahliye yolu olarak görülmemektedir. Şartların sağlanması zaman alır ve dava süreci sulh hukuk mahkemelerinde yürütüldüğü için oldukça uzun sürebilir.',
      date: '8 Oca 2025',
      views: '4.554',
      type: 'Kira Hukuku',
    },
    {
      title:
        'İSTİNAFA AÇIK TAHLİYE KARARLARINDA DİKKAT: TAHLİYE DURDURULMUŞ MU?',
      content:
        'Tahliye kararı aldınız ve borçlu, icra dairesine son 3 aylık kira bedelini teminat olarak yatırarak mehil vesikası aldı. Ancak, bu süre içerisinde borçlu tarafından icra hukuk mahkemesinden "tehiri icra" kararı alınmamış olabilir. Bu durumda, 3 aylık süre dolduktan sonra istinaf süreci devam ediyor olsa bile tahliye işlemini gerçekleştirme hakkınız doğar.',
      date: '7 Oca 2025',
      views: '24,8B',
      type: 'İcra Hukuku',
    },
    {
      title: 'Kira Hukuku Bilgilendirmesi',
      content:
        'Kira hukuku ve uygulama süreçleri hakkında birçok yanlış bilgi dolaşmakta ve hatalı yorumlar yapılmaktadır. Bu yanlış bilgilendirmelere cevap vermiyoruz. Ancak sıradaki yayınımızda, güncel yargılama sürelerini, tahliye işlemlerinde hangi kanun yollarının ne kadar sürdüğünü, kira sözleşmesi hazırlanırken dikkat edilmesi gereken noktaları ve kiracıyı istediğiniz zaman tahliye edebilmek için yapılması gerekenleri detaylı bir şekilde ele alacağız.',
      date: '6 Oca 2025',
      views: '20B',
      type: 'Kira Hukuku',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroSection}>
        <Image source={heroImage} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Hukuki Çözüm Ortağınız</Text>
          <Text style={styles.heroSubtitle}>
            Profesyonel ve Güvenilir Hizmet
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Faaliyet Alanlarımız</Text>
          <TouchableOpacity style={styles.seeAllButton} onPress={openWebsite}>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
            <Icon name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.practiceAreasGrid}>
          {practiceAreas.map((area, index) => (
            <PracticeArea key={index} {...area} />
          ))}
        </View>
      </View>

      <View style={[styles.section, styles.tweetsSection]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Güncel Paylaşımlarımız</Text>
          <TouchableOpacity
            style={styles.seeAllButton}
            onPress={openTwitterProfile}>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
            <Icon name="chevron-right" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
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
  heroSection: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(44, 58, 71, 0.7)',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.secondary,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.primary,
    fontSize: 14,
    marginRight: 4,
  },
  practiceAreasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  practiceAreaCard: {
    width: cardWidth,
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  practiceAreaTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 24,
  },
  arrowIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -10,
  },
  tweetsSection: {
    backgroundColor: colors.card,
    paddingVertical: 20,
  },
  tweetCard: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tweetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tweetAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 2,
  },
  tweetType: {
    fontSize: 12,
    color: colors.textLight,
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  tweetMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCount: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 4,
    marginRight: 8,
  },
  tweetDate: {
    fontSize: 12,
    color: colors.textLight,
  },
  tweetTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 22,
  },
  tweetContent: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
    marginBottom: 16,
  },
  tweetFooter: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  readMoreText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    marginRight: 4,
  },
});

export default HomeScreen;
