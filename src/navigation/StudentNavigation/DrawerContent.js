import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rounded}>
          <Feather name="user" size={30} color="#476880" />
        </View>
        <Text style={{marginBottom: 20, color: '#476880'}}>Witcher</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Logout"
        labelStyle={{color: '#476880'}}
        icon={({color, size}) => (
          <Feather name="log-out" color={'#476880'} size={size} />
        )}
        // onPress={handleLogout}
        style={styles.footer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 10,
    marginVertical: 20,
  },
  footer: {
    marginLeft: 60,
  },
  header: {
    marginTop: 50,
    borderBottomWidth: 0.5,
    padding: 10,
    borderBottomColor: '#476880',
    alignItems: 'center',
  },
  rounded: {
    backgroundColor: '#f1f1f1',
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default DrawerContent;
