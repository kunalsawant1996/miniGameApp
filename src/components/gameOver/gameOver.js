import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {gamOverIcon} from '../../utils/constants';
import { useOrientation } from '../../utils/useOrientation';

const GameOver = ({listGuessNumber, selectedNumber, opponentGuess}) => {
  const newGame = () => {
    opponentGuess();
  };
  const {Styles} = useStyles();
  return (
    <View style={Styles.gameContainer}>
      <View style={Styles.headerTitle}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          The Game is Over!
        </Text>
      </View>
      <Image
        style={Styles.gameOverIcon}
        source={{
          uri: gamOverIcon,
        }}
      />
      <Text style={Styles.textContent}>
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

const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const orientation = useOrientation();
  const Styles = StyleSheet.create({
    gameContainer: {
      // flex:1,
      // position: 'relative',
      // top: 120,
      height: orientation === 'LANDSCAPE' ? height - 87 : height - 207,
      // height: width > height ? height - 87 : height - 207,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    newGameButton: {
      backgroundColor: '#F52678',
      padding: 10,
      width: orientation === 'LANDSCAPE' ? width - 631 : width - 311,
      // width: width > height ? width - 631 : width - 311,
      borderRadius: 20,
      marginTop: 10,
    },
    gameOverIcon: {
      top: orientation === 'LANDSCAPE' ? 20 : 30,
      width: orientation === 'LANDSCAPE' ? 100 : 200,
      height: orientation === 'LANDSCAPE' ? 100 : 200,
      // top: width > height ? 20 : 30,
      // width: width > height ? 100 : 200,
      // height: width > height ? 100 : 200,
      borderRadius: 100,
    },
    textContent: {
      marginTop: 50,
    },
  });
  return {Styles};
};

export default GameOver;
