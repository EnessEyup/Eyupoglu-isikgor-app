import { TurboModuleRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import App from './App';
import { logger } from './src/utils/logger';

if (TurboModuleRegistry == null) {
  logger.log('Bridgeless mode is disabled.');
}

if (__DEV__) {
  // Development ortamında log'ları görmezden gel
}

registerRootComponent(App);
