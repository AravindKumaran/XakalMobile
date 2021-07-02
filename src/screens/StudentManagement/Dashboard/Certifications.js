import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const certificate = [
  {
    name: 'Hackathon',
    context: 'This is appreciation certificate for Hackathon contest',
    date: '10-05-2020',
  },
  {
    name: 'Learnathon',
    context: 'This is appreciation certificate for Learnathon contest',
    date: '05-05-2020',
  },
  {
    name: 'Hackathon',
    context: 'This is appreciation certificate for Trylathon contest',
    date: '18-08-2020',
  },
];

const Certifications = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        {certificate.map(i => (
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18, marginVertical: 15}]}>
              {i.name}
            </Text>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <Text style={[styles.text3, {fontSize: 16, textAlign: 'center'}]}>
              {i.context}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text3, {fontSize: 14}]}>Date: {i.date}</Text>
              <Text style={[styles.text3, {fontSize: 14}]}></Text>
            </View>
          </View>
        ))}
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
    flex: 1,
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    width: '100%',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    marginVertical: 25,
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

export default Certifications;
