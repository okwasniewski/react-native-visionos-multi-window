import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';
import {useCounterStore} from './store';

export const Counter = () => {
  const [count, increment, decrement] = useCounterStore(store => [
    store.count,
    store.increment,
    store.decrement,
  ]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{count}</Text>
      <Button onPress={increment} title="Increment" />
      <Button onPress={decrement} title="Decrement" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
