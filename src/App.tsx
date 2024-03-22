import {WindowManager} from '@callstack/react-native-visionos';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import {useCounterStore} from './store';

const counterWindow = WindowManager.getWindow('Counter');

function App(): React.JSX.Element {
  const [count, increment, decrement] = useCounterStore(store => [
    store.count,
    store.increment,
    store.decrement,
  ]);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        React Native visionOS multi window example
      </Text>
      <View style={styles.row}>
        <Button title="Open Window" onPress={() => counterWindow.open()} />
        <Button title="Close Window" onPress={() => counterWindow.close()} />
      </View>
      <Text style={styles.title}>Count: {count}</Text>

      <View style={styles.row}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    marginBottom: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#F3F3F320',
  },
});

export default App;
