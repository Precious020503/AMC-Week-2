import React from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text> Malate,Precious
    
    }}</Text>
      <View>
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
       <Text>doraemon</Text>
       <Image
       source={{
        uri:'https://www.freepngimg.com/thumb/doraemon/80623-area-nobi-doraemon-cartoon-line-nobita.png'
       }}
       style= {{
         width: 200, height: 200
      
       }}
       
        />
        </View>
        <TextInput
        style={{
          height:40,
          borderColor: 'gray',
          borderWidth: 1,
        
        }}
        defaultValue="you can type me"
        />
        </ScrollView>
  )
}