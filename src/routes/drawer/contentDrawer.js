import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

export default function ContentDrawer(props) {

  const imageHeader = require('../../../assets/football-icon.jpeg');
  const year = new Date().getFullYear();

  const header = (color, focused) => {
    return <View style={styles.container} >
      <Image source={imageHeader} style={{ width: 50, height: 50 }}/>
      <Text style={styles.textHeaderDrawer}>
        {`Brasileirão ${year}`}
      </Text>
    </View>
  }

  return (
    <DrawerContentScrollView {...props}>
      {header()}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  textHeaderDrawer: {
    textAlign: 'center',
    color: "#00fc43",
    fontSize: 23,
    fontWeight: 'bold',
    margin: 10,
    borderBottomColor: '#00a000',
    borderBottomWidth: 2,
  }
})