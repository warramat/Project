/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FF99CC',
    color: '#FF3399',
    padding: 10,
    marginTop: 16,
    marginLeft: 80,
    marginRight: 80,
    borderRadius:10,
  },
  text: {
    color: '#000000',
  },
});
export default Mybutton;