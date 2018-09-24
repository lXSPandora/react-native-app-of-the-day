import React, { Component } from 'react'
import {
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import moment from 'moment'
import { Transition } from 'react-navigation-fluid-transitions'
import Header from './Header'
import { ROUTE_NAMES } from '../Routes'

const { width } = Dimensions.get('window')

interface Feed {
  id: number
  title: string
  image: string
  price: string
  description: string
}

const Feed: Array<Feed> = [
  {
    id: 1,
    title: 'Fortnite Battle Royale',
    image: require('../assets/fortnite.png'),
    price: 'FREE',
    description:
      'Fortnite Battle Royale is a player-versus-player battle royale game for up to 100 players, allowing one to play alone, in a duo, or in a squad (Usually consisting of three or four players). (Players airdrop from a "Battle Bus" that crosses the games map without any weapons.',
  },
  {
    id: 2,
    title: 'Starbucks',
    image: require('../assets/starbucks.png'),
    price: 'FREE',
    description:
      "The Starbucks® app is a convenient way to pay in store or skip the line and order ahead. Rewards are built right in, so you'll collect Stars and start earning free drinks and food with every purchase. Save time and earn Rewards when you pay with the Starbucks® app at many stores in the U.S.",
  },
  {
    id: 3,
    title: 'Monument Valley ',
    image: require('../assets/monument.png'),
    price: '$3.99',
    description:
      'Monument Valley (video game) Monument Valley is an indie puzzle game developed and published by Ustwo Games. The player leads the princess Ida through mazes of optical illusions and impossible objects while manipulating the world around her to reach various platforms.',
  },
]

class AppList extends Component {
  _renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => this.props.navigation.navigate(ROUTE_NAMES.DETAILS, item)}
    >
      <View style={styles.cardOverflow}>
        <Transition shared={item.title}>
          <ImageBackground style={styles.card} source={item.image}>
            <Text style={styles.cardTitle}>{item.title.toUpperCase()}</Text>
          </ImageBackground>
        </Transition>
      </View>
    </TouchableWithoutFeedback>
  )
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <Header title="Today" description={moment().format('LL')} userInitials="LF" />
          }
          contentContainerStyle={styles.container}
          data={Feed}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    justifyContent: 'flex-end',
    width: width - 20,
    height: width - 20,
    borderRadius: 30,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    shadowOffset: { width: 1, height: 0.5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    margin: 30,
  },
  cardOverflow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    height: width - 20,
    overflow: 'hidden',
    borderRadius: 30,
    marginVertical: 10,
  },
})

export default AppList
