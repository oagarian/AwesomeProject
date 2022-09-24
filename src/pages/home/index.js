import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'


export default function App() {
  const image = require('../../../assets/logo-brasileirao.png');


  return (
    <View style={style.container}>
    <LinearGradient style={style.linearGradient} start={[0.4 , 1.7]} end={[0, 0]} colors={['#008000', '#f0fc03', '#035efc']}/>
    <Image source={image} resizeMode='center' style={style.imagem}/>
    <TouchableOpacity style={style.botao} activeOpacity={0.8}>
        <Text style={style.textoBotao}>Rodada atual</Text>
    </TouchableOpacity>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  imagem: {
    height: 400,
    width: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 7,
    shadowRadius: 8,
    
    elevation: 8,
  },

  
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',

  },

  texto: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottom: '2px solid blue'
  },
  botao: {
    width: 140,
    height: 40,
    backgroundColor: '#035efc',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  textoBotao: {
    color: '#af9ee6',
    fontSize: 18,
  },

  

});
