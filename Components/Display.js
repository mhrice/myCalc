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


changeName = (text) =>{
  return (text.includes('*'))?text.replace("*", "X") : text;
}

  render(){
    var {text}= this.props;
    textStr = String(text);
    return(
      <View style = {styles.textContainer}>
      <Text style = {styles.text}> {this.changeName(textStr)}</Text>
      </View>

    );
  }
  }

  const styles = StyleSheet.create({
textContainer:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,

},
text:{
  fontSize: 50

}

  });
