import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("As a student");
  const bodyText = 'I am Precious Malate, I am an IT Student in Grc and my role in sysarch 1 & 2 is more on documentation and design in our system. our title is Pos in Bigbrew. and to our upcoming Capstone 1 we really have no idea how the subject is but we need to be prepared in this subject.';

  const onPressTitle = () => {
    setTitleText("As a Student [pressed]");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
    fontWeight: 'Bold'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }, 

  innerText: {
    color: 'red',
  }
});



export default TextInANest;



 
