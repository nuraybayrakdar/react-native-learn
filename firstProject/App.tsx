import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function App() {
  /*
  function sayHello() {
    console.log('merhablarr!!');
  }

  const sayHello2 = (label: string) => {
    console.log('merhablarr!!' + label);
  }; */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box_2}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box_3}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
    /*
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container}>
        <Text>Hello World</Text>
        <Button title="Press Me" onPress={sayHello} disabled={true} />
      </View>
      <View style={styles.bottom_container}>
        <Text>Hello World</Text>
        <Button
          title="Press Me"
          onPress={() => sayHello2('Nuray')}
          color="red"
        />
      </View>
    </SafeAreaView>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upper_container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  bottom_container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  box_1: {
    height: 75,
    width: 75,
    backgroundColor: 'red',
  },
  box_2: {
    height: 75,
    width: 75,
    backgroundColor: 'aqua',
  },
  box_3: {
    height: 75,
    width: 75,
    backgroundColor: 'orange',
  },
});

export default App;
