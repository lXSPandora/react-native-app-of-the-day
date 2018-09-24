import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
} from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
const { width, height } = Dimensions.get('window')

class AppDetails extends Component {
  render() {
    const { image, title, description } = this.props.navigation.state.params
    console.log(image)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
          <Image source={require('../assets/close.png')} style={styles.backButton} />
        </TouchableWithoutFeedback>
        <Transition shared={title}>
          <ImageBackground source={image} style={styles.card}>
            <Text style={styles.cardTitle}>{title.toUpperCase()}</Text>
          </ImageBackground>
        </Transition>
        <Transition appear="bottom">
          <View style={styles.textContainer}>
            <Text style={styles.appDescription}>{description}</Text>
          </View>
        </Transition>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  appDescription: {
    fontSize: 22,
    color: 'grey',
    width: width - 30,
  },
  textContainer: {
    height: height - width,
    width,
    padding: 20,
  },
  backButton: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 300,
  },
  card: {
    justifyContent: 'flex-end',
    width: width,
    height: width,
  },
  cardTitle: {
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 29,
    color: 'white',
    shadowOffset: { width: 1, height: 0.5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
  },
})

export default AppDetails
