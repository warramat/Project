import React from 'react';
import { View, Button, Text, DatePickerAndroid,Switch,Alert,StyleSheet,Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
export default class MyApp extends React.Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:"15-05-2018"}

      this.state = {
        switch1Value: false,
     }
     this.state = {
      switch2Value: false,
   }
   }

 toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
 toggleSwitch2 = (value) => {
  this.setState({switch2Value: value})
}

_onPressButton() {
  Alert.alert(
    'แจ้งหยุดการรับ-ส่งนักเรียน',
    'เรียบร้อย!',
    [
      {
        text: 'Ok',
        onPress1: () =>
        that.props.navigation.navigate('Parent'),
      }
    ],
    { cancelable: false }
  );
}

   render() {
      return(         
         <View style={{  flex : 1, alignItems : "center" }}>
           <Image style={styles.bgImage} source={{ uri: "https://www.img.in.th/images/f537e0c63eb5bc4d91107f241845f8d2.jpg" }}/>
           <View style={styles.container}>

  <DatePicker
  style={{width: 200}}
  date={this.state.date} //initial date from state
  mode="date" //The enum of date, datetime and time
  placeholder="select date"
  format="DD-MM-YYYY"
  minDate="01-01-2016"
  maxDate="01-01-2022"
  confirmBtnText="Confirm"
  cancelBtnText="Cancel"
  customStyles={{
    dateIcon: {
      position: 'absolute',
      left: 4,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36
    }
  }}
  onDateChange={(date) => {this.setState({date: date})}}
/>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
</View>
              <View style={{ flexDirection:"row",justifyContent:"space-around", backgroundColor:"#FFE4B5",width:300,height:30,borderRadius:6,margin:10}}>
                  <Text style={{ fontSize:18, alignItems : "center" }} >{"\t"}เดินทางไปส่งที่โรงเรียนเอง</Text> 
                    <View >
                    <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/></View>
              </View>

              <View style={{flexDirection:"row",justifyContent:"space-around", backgroundColor:"#FFE4B5",width:300,height:30,borderRadius:6,margin:10}}>
                  <Text style={{ fontSize:18, alignItems : "center" }} >{"\t"}เดินทางไปรับที่โรงเรียนเอง</Text> 
                    <View >
                    <Switch onValueChange = {this.toggleSwitch2} value = {this.state.switch2Value}/></View>
              </View>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Button		 
                  onPress={this._onPressButton}
                  title="ยืนยัน"
                  color='blue'
              />
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
              <Text >{"\n"}</Text>
         </View>
      );
   }
}

const resizeMode = 'cover';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16
 },
  Input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
}); 