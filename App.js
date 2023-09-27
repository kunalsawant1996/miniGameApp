import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View,StatusBar,ScrollView, useWindowDimensions} from 'react-native';

import GuessNumber from './src/components/index';
import TenInputs from './src/components/tenInputs/tenInputs';

function App() {
  const {styles} = useStyles();
  return (
    // <View style={styles.container}>
    //   <TenInputs />
    // </View>
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
      />
      <View style={styles.headerTitle}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Guess a Number
        </Text>
      </View>
      <GuessNumber />
    </KeyboardAvoidingView>
  );
}

const useStyles = () => {
  const {height, width} = useWindowDimensions()
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // height:width > height ? width : height
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F52678',
    padding: 15,
  },
});
return {styles}
}

export default App;
