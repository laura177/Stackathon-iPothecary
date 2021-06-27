import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text>Welcome to iPothecary</Text>
      <Pressable
        onPress={() => navigation.navigate('MyMeds')}
        style={{ backgroundColor: 'powderblue', padding: 26, marginBottom: 10, marginTop: 10 }}
      >
      <Text>My Meds</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Camera')}
        style={{ backgroundColor: 'powderblue', padding: 30 }}
      >
       <Text>Camera</Text>
      </Pressable>
    </View>
    )
}
