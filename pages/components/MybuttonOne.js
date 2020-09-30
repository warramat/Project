/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const MybuttonOne = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#66CCFF',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 10,
  },
  text: {
    color: '#000000',
  },
});
export default MybuttonOne;