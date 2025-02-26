const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components'],
      },
    },
    argv,
  );

  // Dev server ayarları
  config.devServer = {
    ...config.devServer,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
    https: true, // HTTPS'i aktif et
    host: '0.0.0.0', // Tüm IP'lerden erişime izin ver
  };

  // SSL sertifika hatalarını yoksay (sadece development için)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // Add aliases for React Native Web
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'react-native-web': path.resolve(
      __dirname,
      'node_modules/react-native-web',
    ),
  };

  // Add rule for handling image files
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  });

  return config;
};
