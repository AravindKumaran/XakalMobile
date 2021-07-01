import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Awards = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View style={styles.box1}>
          <Text style={[styles.text3, {fontSize: 18}]}>Reading Award</Text>
          <Text style={[styles.text3, {fontSize: 16, textAlign: 'center'}]}>
            This is appreciation certificate for Reading contest
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.text3, {fontSize: 14}]}>Date: 10-05-2020</Text>
            <Text style={[styles.text3, {fontSize: 14}]}></Text>
          </View>
        </View>
        <View style={styles.box1}>
          <Text style={[styles.text3, {fontSize: 18}]}>Writing Award</Text>
          <Text style={[styles.text3, {fontSize: 16, textAlign: 'center'}]}>
            This is appreciation certificate for Writing contest
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.text3, {fontSize: 14}]}>Date: 10-05-2020</Text>
            <Text style={[styles.text3, {fontSize: 14}]}></Text>
          </View>
        </View>
        <View style={styles.box1}>
          <Text style={[styles.text3, {fontSize: 18}]}>Listening Award</Text>
          <Text style={[styles.text3, {fontSize: 16, textAlign: 'center'}]}>
            This is appreciation certificate for Listening contest
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.text3, {fontSize: 14}]}>Date: 10-05-2020</Text>
            <Text style={[styles.text3, {fontSize: 14}]}></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    margin: 25,
  },
  box1: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    margin: 25,
  },
  text3: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#476880',
    alignSelf: 'center',
    margin: 10,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    margin: 10,
  },
});

export default Awards;
