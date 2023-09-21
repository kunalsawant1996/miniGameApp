import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import GuessNumber from './src/components/index';

function App() {
  return (
    <View style={style.container}>
      <View style={style.headerTitle}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Guess a Number
        </Text>
      </View>
      <GuessNumber />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F52678',
    padding: 15,
  },
});

export default App;
