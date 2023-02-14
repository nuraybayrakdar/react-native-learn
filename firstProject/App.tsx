import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
function App() {
  function sayHello() {
    console.log('merhablarr!!');
  }

  const sayHello2 = (label: string) => {
    console.log('merhablarr!!' + label);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
      <Button title="Press Me" onPress={sayHello} disabled={true} />
      <Button title="Press Me" onPress={() => sayHello2('Nuray')} color="red" />
    </SafeAreaView>
  );
}

export default App;
