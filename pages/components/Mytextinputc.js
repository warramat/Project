/*Custom TextInput*/
import React from 'react';
import { View, TextInput } from 'react-native';
const Mytextinputc = props => {
  return (
    <View
      style={{
        //alignItems: 'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#FDF5E6',
        borderWidth: 1,
        borderRadius:15,
        backgroundColor: '#FDF5E6',
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#007FFF"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinputc;