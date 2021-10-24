import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const htmlPath = "file:///android_asset/index.html"; //file path from native directory;

  return (
    <WebView
      style={styles.container}
      source={{ html: require('./assets/index.js')() }}
      originWhitelist={['*']}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
