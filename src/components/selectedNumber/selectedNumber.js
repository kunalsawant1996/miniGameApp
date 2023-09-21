import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const SelectedNumber = ({selectedNumber, opponentGuess}) => {
  const startGame = () => {
    opponentGuess();
  };

  return (
    <View style={style.selectNum}>
      <Text style={{color: 'black', marginTop: 30, marginBottom: 10}}>
        You selected
      </Text>
      <Text style={style.guessText}>{selectedNumber}</Text>
      <View style={{marginTop: 10}}>
        <Pressable
          onPress={startGame}
          style={style.startGame}>
          <Text style={{color: 'white', fontSize: 20}}>START GAME</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  selectNum: {
    alignItems: 'center',
    marginTop: 10,
    width: 250,
    height: 190,
    marginLeft: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
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
    padding: 10,
    color: '#BD5BFA',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 4,
    borderColor: '#BD5BFA',
    borderRadius: 10,
  },
  startGame: {
    backgroundColor: '#F52678',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  }
});

export default SelectedNumber;
