/* eslint-disable react-native/no-inline-styles */
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
  Image,
} from 'react-native';
import { Appbar, Divider, TouchableRipple, } from 'react-native-paper';

const heartLogo = {
  uri: 'https://cdn4.iconfinder.com/data/icons/medical-set-4/100/91-512.png',
};

const bottleLogo = {
  uri: 'https://image.flaticon.com/icons/png/512/30/30351.png',
};

function CustomNavigationBar(){
    return (
        <Appbar.Header>
            <Appbar.Content title='iPothecary' />
        </Appbar.Header>
    )
}

export default function Home({navigation}){
    return(
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aliceblue',
      }}>
      <Image
        source={bottleLogo}
        style={{height: 100, width: 100, marginTop: -300}}
      />
      <Divider />
      <Text style={{fontFamily: 'HelveticaNeue', fontSize: 25}}>Welcome to iPothecary</Text>
      <Pressable
        onPress={() => navigation.navigate('MyMeds')}
        style={{ backgroundColor: 'powderblue', padding: 26, marginBottom: 10, marginTop: 10 }}
      >
      <Text>My Meds</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Camera')}
        style={{ backgroundColor: 'powderblue', padding: 30}}
        >
       <Text>Camera</Text>
      </Pressable>
    </View>
    )
}
