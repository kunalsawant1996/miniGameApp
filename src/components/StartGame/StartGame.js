import {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SelectedNumber from '../selectedNumber/selectedNumber';

const StartGame = ({opponentGuess, setSelected}) => {
  const [selectNumber, setSelectNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');

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
      <View>
        <View style={style.headerTitle}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            Start a New Game!
          </Text>
        </View>

        <View style={style.selectNum}>
          <Text style={{color: 'black'}}>Select a Number</Text>
          <TextInput
            value={selectNumber}
            onChangeText={onSelectNumber}
            keyboardType="number-pad"
            style={{width: 70, borderBottomWidth: 1}}
            maxLength={2}
          />

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Pressable onPress={reset} style={style.reset}>
              <Text style={style.text}>RESET</Text>
            </Pressable>
            <Pressable onPress={onConfirm} style={style.confirm}>
              <Text style={style.text}>CONFIRM</Text>
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

const style = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  selectNum: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 150,
    marginLeft: 30,
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

export default StartGame;
