import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Display extends React.Component {
state = {
  display: ' '
}




  render(){
    return(
      <View style = {styles.textContainer}>
      <Text style = {styles.text}> {this.props.text}</Text>
      </View>

    );
  }
  }

  const styles = StyleSheet.create({
textContainer:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
text:{
  fontSize: 30

}

  });
