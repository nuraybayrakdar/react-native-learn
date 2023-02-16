import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <SafeAreaView>
      <Text>Counter: {counter}</Text>
      <Button title="Increase Counter" onPress={increaseCounter}></Button>
      <Button title="Decrease Counter" onPress={decreaseCounter}></Button>
    </SafeAreaView>
  );
}
export default App;
