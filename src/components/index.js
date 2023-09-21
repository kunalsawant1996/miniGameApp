import {useState} from 'react';
import {View} from 'react-native';
import StartGame from './StartGame/StartGame';
import OpponentsGuessNumber from './opponentsGuessNumber/opponentsGuessNumber';

const index = () => {
  const [selectedNumber, setSelectedNumber] = useState('');

  const setSelected = text => {
    setSelectedNumber(text);
  };

  const [openOpponentGuess, setOpenOpponentGuess] = useState(false);

  const opponentGuess = () => {
    setOpenOpponentGuess(!openOpponentGuess);
  };

  return (
    <View>
      {!openOpponentGuess ? (
        <StartGame opponentGuess={opponentGuess} setSelected={setSelected} />
      ) : (
        <OpponentsGuessNumber
          opponentGuess={opponentGuess}
          selectedNumber={selectedNumber}
        />
      )}
    </View>
  );
};

export default index;
