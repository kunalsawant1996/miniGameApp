import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { gamOverIcon } from '../../utils/constants';

const GameOver = ({listGuessNumber, selectedNumber, opponentGuess}) => {
  const newGame = () => {
    opponentGuess();
  };

  return (
    <View style={Styles.gameContainer}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
        The Game is Over!
      </Text>
      <Image
        style={{top: 30, width: 200, height: 200, borderRadius: 100}}
        source={{
          uri: gamOverIcon,
        }}
      />
      <Text style={{marginTop: 50}}>
        Your phone needed{' '}
        <Text style={{color: '#F52678'}}>{listGuessNumber}</Text> rounds to
        guess the number{' '}
        <Text style={{color: '#F52678'}}>{selectedNumber}</Text>.
      </Text>
      <Pressable onPress={newGame} style={Styles.newGameButton}>
        <Text style={{color: 'white', fontSize: 15}}>NEW GAME</Text>
      </Pressable>
    </View>
  );
};
const Styles = StyleSheet.create({
  gameContainer: {
    position: 'relative',
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newGameButton: {
    backgroundColor: '#F52678',
    padding: 10,
    width: 100,
    borderRadius: 20,
    marginTop: 10,
  },
});

export default GameOver;
