import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class CButton extends React.Component {


onButtonPress = () =>{

  this.props.onChange(this.props.number);
}



render(){
  return(
    <View style = {styles.view}>
    <TouchableOpacity
    onPress = {this.onButtonPress}
    >
    <View style = {styles.button}>
    <Text style = {{fontSize:16}}>{this.props.number}</Text>
    </View>
    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
 view: {
   padding: 0,
   margin: 0,
   flex: 2,


 },
button:{
backgroundColor: '#32c937',
padding: 30,



}
});
