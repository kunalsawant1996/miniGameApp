import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const TenInputs = () => {
  const onPressSubmit = () => {
    // Do something about submit operation
  };
  const [state, setState] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    text5: '',
    text6: '',
    text7: '',
    text8: '',
    text9: '',
    text10: '',
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 10 Inputs Screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text1"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text1: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text2"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text2: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text3"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text3: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text4"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text4: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text5"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text5: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text6"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text6: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text7"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text7: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text8"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text8: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text9"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text9: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="text10"
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({text10: text})}
        />
      </View>
      <TouchableOpacity onPress={onPressSubmit} style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#BD5BFA',
    marginTop: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  submitBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
export default TenInputs;
