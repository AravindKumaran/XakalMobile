import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Feather from 'react-native-vector-icons/Feather';

const semester_list = [
  {label: 'Semester 1', value: 'Semester 1'},
  {label: 'Semester 2', value: 'Semester 2'},
  {label: 'Semester 3', value: 'Semester 3'},
  {label: 'Semester 4', value: 'Semester 4'},
  {label: 'Semester 5', value: 'Semester 5'},
  {label: 'Semester 6', value: 'Semester 6'},
  {label: 'Semester 7', value: 'Semester 7'},
  {label: 'Semester 8', value: 'Semester 8'},
];

const course_list = [
  {label: 'Physics', value: 'Physics'},
  {label: 'Chemistry', value: 'Chemistry'},
  {label: 'EVS', value: 'EVS'},
  {label: 'Mathematics', value: 'Mathematics'},
  {label: 'OOPS', value: 'OOPS'},
];

const workers = [
  {
    id: '13IT200',
    name: 'Armin',
  },
  {
    id: '13IT201',
    name: 'Levi',
  },
  {
    id: '13IT202',
    name: 'Erwin',
  },
  {
    id: '13IT203',
    name: 'Eren',
  },
  {
    id: '13IT204',
    name: 'Mikasa',
  },
];

const AllWorkers = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          <View style={styles.box1}>
            <View style={[styles.box, {margin: 10}]}>
              <Text style={styles.text3}>User ID</Text>
              <Text style={styles.text3}>Name</Text>
              <Text style={[styles.text3, {left: 20}]}>Details</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            {workers.map(i => (
              <View style={styles.box}>
                <Text style={styles.text6}>{i.id}</Text>
                <Text style={styles.text6}>{i.name}</Text>
                <TouchableOpacity style={styles.touch1}>
                  <Text style={styles.text5}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View>
            <View style={[styles.box2, {margin: 15, elevation: 0}]}>
              <View style={styles.box}>
                <Text style={styles.text3}>Designation</Text>
                <Text style={styles.text4}>Helper</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Department Name</Text>
                <Text style={styles.text4}>CSE</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Qualification</Text>
                <Text style={styles.text4}>10th</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Email ID</Text>
                <Text style={styles.text4}>witcher@gmail.com</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Mobile</Text>
                <Text style={styles.text4}>1234567890</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Emergency contact</Text>
                <Text style={styles.text4}>1234567890</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Parents/Spouse</Text>
                <Text style={styles.text4}>Zeus</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Joining Date</Text>
                <Text style={styles.text4}>20-12-2019</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Blood group</Text>
                <Text style={styles.text4}>O+</Text>
              </View>
            </View>
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
    margin: 20,
  },
  box: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    flex: 1,
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 10,
    marginVertical: 15,
    flexDirection: 'column',
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 18,
    color: '#476880',
    alignSelf: 'center',
    marginVertical: 15,
  },
  touch: {
    height: 50,
    width: 200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 10,
  },
  touch1: {
    height: 30,
    width: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 30,
    marginHorizontal: 10,
    borderLeftColor: '#4e73df',
    borderLeftWidth: 2.5,
  },
  text3: {
    flex: 1,
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#476880',
    alignSelf: 'center',
    margin: 15,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    margin: 15,
  },
  text5: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
  },
  text6: {
    flex: 1,
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    margin: 15,
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    borderRadius: 8,
    color: '#476880',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    borderRadius: 8,
    color: '#476880',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
export default AllWorkers;
