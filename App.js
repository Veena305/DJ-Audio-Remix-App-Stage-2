import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';

class RedButton extends Component {

  render() {

    return <Button title = "Sound 1" color = "red"></Button>

  }
}

class BlueButton extends Component {

  render() {

  return <Button title = "Sound 2" color = "blue"></Button>

  }
}

class PurpleButton extends Component {

  render() {

    return <Button title = "Sound 3" color = "purple"></Button>

  }
}

class GreenButton extends Component {

  render() {

    return <Button title = "Sound 4" color = "green"></Button>

  }
}

export default class App extends Component {
  render() {
    return (

        <View style = {{marginLeft : 50 , marginRight : 50 , marginTop : 50}}>
        <RedButton/>

        <View style = {{marginLeft : 0 , marginRight : 0 , marginTop : 40}}>
        <BlueButton/>
        </View>

        <View style = {{marginLeft : 0 , marginRight : 0 , marginTop : 40}}>
        <PurpleButton/>
        </View>

        <View style = {{marginLeft : 0 , marginRight : 0 , marginTop : 40}}>
        <GreenButton/>
        </View>

        </View>

    );
  }
}