import {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions
} from 'react-native';
import SelectedNumber from '../selectedNumber/selectedNumber';
import { useOrientation } from '../../utils/useOrientation';

const StartGame = ({opponentGuess, setSelected}) => {
  const [selectNumber, setSelectNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const {styles} =useStyles();

  const onSelectNumber = text => {
    setSelectNumber(text);
  };

  const reset = () => {
    setSelectNumber();
    setSelectedNumber();
  };
  const onConfirm = () => {
    const re = /^[0-9\b]+$/;
    if (selectNumber === '' || re.test(selectNumber)) {
    setSelectedNumber(selectNumber);
    setSelected(selectNumber);
    setSelectNumber();
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            Start a New Game!
          </Text>
        </View>

        <View style={styles.selectNum}>
          <Text style={{color: 'black'}}>Select a Number</Text>
          <TextInput
            value={selectNumber}
            onChangeText={onSelectNumber}
            keyboardType="number-pad"
            style={{width: 70, borderBottomWidth: 1}}
            maxLength={2}
          />

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Pressable onPress={reset} style={styles.reset}>
              <Text style={styles.text}>RESET</Text>
            </Pressable>
            <Pressable onPress={onConfirm} style={styles.confirm}>
              <Text style={styles.text}>CONFIRM</Text>
            </Pressable>
          </View>
        </View>

        {selectedNumber && (
          <SelectedNumber
            opponentGuess={opponentGuess}
            selectedNumber={selectedNumber}
          />
        )}
      </View>
    </ScrollView>
  );
};
const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const orientation = useOrientation();
  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      // height: width > height ? width : height
    },
    headerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    selectNum: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: orientation === 'LANDSCAPE' ? width - 450 : width - 80,
      height: orientation === 'LANDSCAPE' ? height - 260 : height - 550,
      marginBottom: orientation === 'LANDSCAPE' ? 15 : 20,
      // width: width > height ? width - 450 : width - 80,
      // height: width > height ? height - 260 : height - 550,
      // marginBottom: width > height ? 15 : 20,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#000',
      padding: 10,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 1,
      // elevation: 5,
    },
    reset: {
      marginRight: 40,
      backgroundColor: '#BD5BFA',
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
    },
    confirm: {
      marginRight: 10,
      backgroundColor: '#F52678',
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
    },
    text: {color: 'white', fontSize: 20},
  });
  return {styles}
}

export default StartGame;
