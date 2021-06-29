import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Academic = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View style={styles.box1}>
          <Text style={styles.text3}>CGPA</Text>
          <Text style={[styles.text3, {fontSize: 22}]}>8 for 10</Text>
        </View>
        <View>
          <Text style={[styles.text3, {fontSize: 18}]}>Semester Details</Text>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 1</Text>
            <Text style={styles.text4}>80%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 2</Text>
            <Text style={styles.text4}>66%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 3</Text>
            <Text style={styles.text4}>72%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 4</Text>
            <Text style={styles.text4}>88%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 5</Text>
            <Text style={styles.text4}>75%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 6</Text>
            <Text style={styles.text4}>77%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 7</Text>
            <Text style={styles.text4}>90%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text3}>Semester 8</Text>
            <Text style={styles.text4}>82%</Text>
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
  box: {
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  box1: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20,
    height: 100,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  text3: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#47687F',
    alignSelf: 'center',
    margin: 15,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#47687F',
    alignSelf: 'center',
    margin: 15,
  },
});

export default Academic;
