import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({onPress, title}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
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
