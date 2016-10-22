/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Slide from 'react-native-slider';
import Button from 'apsl-react-native-button'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LastSlide extends Component {
  render() {
    return (
      <Image source={require('./images/four.png')}/>
      <Button style={{backgroundColor: 'red', marginBottom: '2'}} textStyle={{fontSize: 18}}>
        Hello!
      </Button>
    )
  }
}


export default class RecomJeju extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slide
          showPagination={false}>
          {
            <Image source={require('./images/one.png')}/>,
            <Image source={require('./images/two.png')}/>,
            <Image source={require('./images/three.png')}/>,
            <LastSlide />
        }
        </Slide>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#525252',
  },
  start_button: {
    fontSize: '10',
    textAlign: 'center',
    color: 'white',
    marginBottom: '1',
  }
});

AppRegistry.registerComponent('RecomJeju', () => RecomJeju);
