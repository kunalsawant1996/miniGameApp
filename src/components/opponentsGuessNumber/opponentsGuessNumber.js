import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import GameOver from '../gameOver/gameOver';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useOrientation} from '../../utils/useOrientation';

const opponentsGuessNumber = ({opponentGuess, selectedNumber}) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10),
  );
  const [showPopUp, setShowPopUp] = useState(false);
  const [listGuessNumber, setListGuessNumber] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const onMinus = () => {
    if (randomNumber > selectedNumber) {
      setListAndRamdonNumber();
    } else {
      setShowPopUp(true);
    }
  };
  const onPlus = () => {
    if (randomNumber < selectedNumber) {
      setListAndRamdonNumber();
    } else {
      setShowPopUp(true);
    }
  };

  useEffect(() => {
    if (randomNumber == selectedNumber) {
      setGameOver(!gameOver);
    }
  }, [randomNumber]);

  const setListAndRamdonNumber = () => {
    setListGuessNumber(prevState => [...prevState, randomNumber]);
    setRandomNumber(Math.floor(Math.random() * 10));
  };
  const {styles} = useStyles();

  return (
    <View>
      {gameOver ? (
        <GameOver
          listGuessNumber={listGuessNumber.length}
          selectedNumber={selectedNumber}
          opponentGuess={opponentGuess}
        />
      ) : (
        <View style={styles.opponentContainer}>
          <Text style={styles.opponentText}>Opponent`s Guess</Text>
          <Text style={styles.randomText}>{randomNumber}</Text>
          <View style={styles.buttonContainer}>
            <Pressable onPress={onMinus} style={styles.minusButton}>
              <FontAwesome5 name="minus" color="white" />
            </Pressable>
            <Pressable onPress={onPlus} style={styles.plusButton}>
              <FontAwesome5 name="plus" color="white" />
            </Pressable>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={listGuessNumber}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.listItem}>
                    <Text style={{marginRight: 80}}>#{index + 1}</Text>
                    <Text style={{}}>{item}</Text>
                  </View>
                );
              }}
              keyExtractor={(item, id) => id + 1}
              inverted={true}
              contentContainerStyle={{flexDirection: 'column-reverse'}}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showPopUp}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setShowPopUp(!showPopUp);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginBottom: 5,
                  }}>
                  Don`t lie!
                </Text>
                <Text style={styles.modalText}>
                  You know that this is wrong...
                </Text>
                <Pressable
                  style={{left: 250, marginTop: 20}}
                  onPress={() => setShowPopUp(!showPopUp)}>
                  <Text style={{color: '#29B0CB'}}>SORRY!</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const orientation = useOrientation();
  const styles = StyleSheet.create({
    opponentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    opponentText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
    },
    randomText: {
      alignItems: 'center',
      padding: 8,
      color: '#BD5BFA',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: 2,
      borderColor: '#BD5BFA',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: orientation === 'LANDSCAPE' ? width - 480 : width - 161,
      height: orientation === 'LANDSCAPE' ? height - 450 : height - 607,
      // width: width > height ? width - 480 : width - 161,
      // height: width > height ? height - 450 : height - 607,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    },
    minusButton: {
      marginRight: 20,
      backgroundColor: '#F52678',
      padding: 20,
      borderRadius: 10,
    },
    plusButton: {
      marginLeft: 30,
      backgroundColor: '#F52678',
      padding: 20,
      borderRadius: 10,
    },
    listContainer: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: orientation === 'LANDSCAPE' ? -(height - 250) : -(height - 357),
      // bottom: width > height ? -(height - 250) : -(height - 357),
      flexDirection: 'column',
      height: orientation === 'LANDSCAPE' ? height - 250 : height - 357,
      // height: width > height ? height - 250 : height - 357,
      alignItems: 'center',
    },
    listItem: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      padding: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120,
    },
    modalView: {
      backgroundColor: 'white',
      width: width - 50,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  return {styles};
};

export default opponentsGuessNumber;
