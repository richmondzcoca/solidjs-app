import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.solidjs.app',
  appName: 'solidjs-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://richmondzcoca.github.io/solidjs-app',
    cleartext: true
  }
};

export default config;
