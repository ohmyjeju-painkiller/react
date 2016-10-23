/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import Button from 'apsl-react-native-button'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimension
} from 'react-native';

const styles = {
  wrapper: {

  }

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  image: {
    width,
    height,
    flex: 1
  }
}


export default class extends Component {
  render () {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <Image>
          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 70
            }}
            loop={false}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./images/one.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./images/two.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./images/four.png')}/>
              <Button style={{backgroundColor: 'red', marginBottom: '2'}} textStyle={{fontSize: 18}}>
                Hello!
              </Button>
            </View>
          </Swiper>
        </Image>
      </View>
    )
  }
}

AppRegistry.registerComponent('RecomJeju', () => RecomJeju);
