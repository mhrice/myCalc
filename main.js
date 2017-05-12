import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import CButton from './Components/CButton';
import Display from './Components/Display';
class App extends React.Component {


state = {
  number: '0',
  equals: false,
  history: '0'
}


changeName = (x) =>{

if(x=="X"){

  this.setState({
    number: this.state.number+'*'
  })
}
else{
  if(this.state.number == '0' ||isNaN(parseFloat(this.state.number))||this.state.equals){
    this.setState({
      history: this.state.number,
    number: x,
      equals: false
  });

}
  else{
    this.setState({
      number: this.state.number+x,

    })

  }
}
}

clearAll = () =>{
  this.updateEq
this.setState({
  number: '0'
});
}
delete = ()=>{
  this.setState({
    number: this.state.number.substring(0, this.state.number.length-1)
  });
}
equals = ()=>{
correct = true
n = this.state.number;
try{
  eval(n)
}
catch (e){
  correct = false
  this.setState({
    number: 'Syntax Error'
  });
}
finally{
  this.setState({
    equals: true
  })
}
if(correct){
this.setState({

  number: eval(n)
});
}

}
changeSign = ()=>{
  this.setState({
    number: this.state.number*-1
  })
}

updateEq =()=>{
if(this.state.equals){
this.clearAll
console.log("HOI")
this.setState({
  equals: false
})

}

}


  render() {
    return (
      <View style={styles.container}>
      <Display
      text = {this.state.number}
      />
      <View style = {styles.buttonContainer}>
      <View style = {styles.row}>
        <CButton
        number = 'CE'
        onChange = {this.clearAll}
        />
        <CButton
        number = 'C'
        onChange = {this.clearAll}
        />
        <CButton
        number = 'Del'
        onChange = {this.delete}
        />
        <CButton
        number = '/'
        onChange = {this.changeName}
        />
      </View>
      <View style = {styles.row}>
        <CButton
        number = '7'
        onChange = {this.changeName}
        />
        <CButton
        number = '8'
        onChange = {this.changeName}
        />
        <CButton
        number = '9'
        onChange = {this.changeName}
        />
        <CButton
        number = 'X'
        onChange = {this.changeName}
        />
      </View>
      <View style = {styles.row}>
        <CButton
        number = '4'
        onChange = {this.changeName}
        />
        <CButton
        number = '5'
        onChange = {this.changeName}
        />
        <CButton
        number = '6'
        onChange = {this.changeName}
        />
        <CButton
        number = '-'
        onChange = {this.changeName}
        />
        </View>
        <View style = {styles.row}>
        <CButton
        number = '1'
        onChange = {this.changeName}
        />
        <CButton
        number = '2'
        onChange = {this.changeName}
        />
        <CButton
        number = '3'
        onChange = {this.changeName}
        />
        <CButton
        number = '+'
        onChange = {this.changeName}
        />
        </View>
        <View style = {styles.row}>
        <CButton
        number = '+-'
        onChange = {this.changeSign}
        />
        <CButton
        number = '0'
        onChange = {this.changeName}
        />
        <CButton
        number = '.'
        onChange = {this.changeName}
        />
        <CButton
        number = '='
        onChange = {this.equals}
        />
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',


  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 0,
    padding:0


  }
});

Exponent.registerRootComponent(App);
