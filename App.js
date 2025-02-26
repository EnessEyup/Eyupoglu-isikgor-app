import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import AppointmentScreen from './src/screens/AppointmentScreen';
import ContactScreen from './src/screens/ContactScreen';
import DocumentScreen from './src/screens/DocumentScreen';
import FAQScreen from './src/screens/FAQScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import IcraHukukuScreen from './src/screens/IcraHukukuScreen';
import TicaretHukukuScreen from './src/screens/TicaretHukukuScreen';
import AileHukukuScreen from './src/screens/AileHukukuScreen';
import IsHukukuScreen from './src/screens/IsHukukuScreen';
import GayrimenkulHukukuScreen from './src/screens/GayrimenkulHukukuScreen';
import CezaHukukuScreen from './src/screens/CezaHukukuScreen';
import AboutScreen from './src/screens/AboutScreen';
import AILawyerScreen from './src/screens/AILawyerScreen';
import { colors } from './src/theme/colors';
import { CustomHeader } from './src/components/CustomHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Randevu"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="İletişim"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Müvekkil Talebi"
        component={DocumentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="file-document" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B3358',
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: '75%',
        },
        drawerActiveTintColor: '#1B3358',
        drawerInactiveTintColor: '#666666',
        drawerActiveBackgroundColor: '#F5F5F5',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
          fontWeight: '500',
        },
        drawerItemStyle: {
          borderRadius: 8,
          paddingVertical: 5,
          marginVertical: 2,
          marginHorizontal: 10,
        },
      }}>
      <Drawer.Screen
        name="AnaSayfa"
        component={TabNavigator}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          drawerLabel: 'Ana Sayfa',
          header: props => <CustomHeader {...props} navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="AILawyer"
        component={AILawyerScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Icon name="robot" color={color} size={size} />
          ),
          drawerLabel: 'AI Hukuk Asistanı',
          header: props => <CustomHeader {...props} navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Hakkimizda"
        component={AboutScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Icon name="information" color={color} size={size} />
          ),
          drawerLabel: 'Hakkımızda',
          header: props => <CustomHeader {...props} navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="SSS"
        component={FAQScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Icon name="frequently-asked-questions" color={color} size={size} />
          ),
          drawerLabel: 'Sıkça Sorulan Sorular',
          header: props => <CustomHeader {...props} navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Aydinlatma"
        component={PrivacyScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Icon name="shield-check" color={color} size={size} />
          ),
          drawerLabel: 'Aydınlatma Metni',
          header: props => <CustomHeader {...props} navigation={navigation} />,
        })}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#1B3358" />
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
          <Stack.Screen
            name="IcraHukuku"
            component={IcraHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'İcra ve İflas Hukuku',
            }}
          />
          <Stack.Screen
            name="TicaretHukuku"
            component={TicaretHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'Ticaret ve Şirketler Hukuku',
            }}
          />
          <Stack.Screen
            name="AileHukuku"
            component={AileHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'Aile Hukuku',
            }}
          />
          <Stack.Screen
            name="IsHukuku"
            component={IsHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'İş Hukuku',
            }}
          />
          <Stack.Screen
            name="GayrimenkulHukuku"
            component={GayrimenkulHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'Gayrimenkul Hukuku',
            }}
          />
          <Stack.Screen
            name="CezaHukuku"
            component={CezaHukukuScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#1B3358',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '600',
              },
              title: 'Ceza Hukuku',
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
