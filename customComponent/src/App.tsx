import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from '../components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Mustafa Kemal Atatürk" text="Ne mutlu 'Türküm' diyene." />
      <Card
        title="Feyyaz Yiğit"
        text="Ben bugün hiç Nazilli'ye gidicek gibi uyanmadım ya."
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
