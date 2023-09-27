import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useOrientation} from '../../utils/useOrientation';

const SelectedNumber = ({selectedNumber, opponentGuess}) => {
  const startGame = () => {
    opponentGuess();
  };

  const {styles} = useStyles();

  return (
    <View style={styles.selectNum}>
      <Text style={styles.selected}>You selected</Text>
      <Text style={styles.guessText}>{selectedNumber}</Text>
      <View style={styles.btnStartGame}>
        <Pressable onPress={startGame} style={styles.startGame}>
          <Text style={{color: 'white', fontSize: 20}}>START GAME</Text>
        </Pressable>
      </View>
    </View>
  );
};

const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const orientation = useOrientation();
  const styles = StyleSheet.create({
    selectNum: {
      justifyContent: 'center',
      alignItems: 'center',
      width: orientation === 'LANDSCAPE' ? width - 540 : width - 150,
      height: orientation === 'LANDSCAPE' ? height - 280 : height - 520,
      // width: width > height ? width - 540 : width - 150,
      // height: width > height ? height - 280 : height - 520,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#000',
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 1,
      // elevation: 5,
    },
    guessText: {
      alignItems: 'center',
      padding: orientation === 'LANDSCAPE' ? 5 : 10,
      // padding: width > height ? 5 : 10,
      color: '#BD5BFA',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: orientation === 'LANDSCAPE' ? 2 : 4,
      // borderWidth: width > height ? 2 : 4,
      borderColor: '#BD5BFA',
      borderRadius: 10,
    },
    startGame: {
      backgroundColor: '#F52678',
      padding: orientation === 'LANDSCAPE' ? 5 : 10,
      // padding: width > height ? 5 : 10,
      borderWidth: 1,
      borderRadius: orientation === 'LANDSCAPE' ? 10 : 20,
      // borderRadius: width > height ? 10 : 20,
    },
    selected: {
      color: 'black',
      marginTop: orientation === 'LANDSCAPE' ? 3 : 20,
      marginBottom: orientation === 'LANDSCAPE' ? 5 : 10,
      // marginTop: width > height ? 3 : 20,
      // marginBottom: width > height ? 5 : 10,
    },
    btnStartGame: {
      marginTop: orientation === 'LANDSCAPE' ? 2 : 10,
      marginBottom: orientation === 'LANDSCAPE' ? 5 : 10,
      // marginTop: width > height ? 2 : 10,
      // marginBottom: width > height ? 5 : 10,
    },
  });
  return {styles};
};

export default SelectedNumber;
