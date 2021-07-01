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

const department = [
  {
    department: 'CSE',
    hod: 'Witcher',
    email: 'witcher@gmail.com',
    mobile: '1234567890',
    year: '1990',
    capacity: '300',
  },
  {
    department: 'IT',
    hod: 'Angelina',
    email: 'angelina@gmail.com',
    mobile: '2134567890',
    year: '1995',
    capacity: '250',
  },
  {
    department: 'ECE',
    hod: 'Jennifer',
    email: 'jennifer@gmail.com',
    mobile: '3124567890',
    year: '2000',
    capacity: '200',
  },
  {
    department: 'EEE',
    hod: 'Mystery',
    email: 'mystery@gmail.com',
    mobile: '4123567890',
    year: '2005',
    capacity: '150',
  },
];

const AllDepartments = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          {department.map(i => (
            <View style={styles.box1}>
              <View style={[styles.box, {marginVertical: 10}]}>
                <Text style={styles.text3}>{i.department}</Text>
                <TouchableOpacity style={styles.touch1}>
                  <Text
                    style={{
                      color: '#476880',
                      alignSelf: 'center',
                      fontWeight: '700',
                      fontSize: 14,
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
              <View style={styles.box}>
                <Text style={styles.text3}>Head of Department</Text>
                <Text style={styles.text4}>{i.hod}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Email ID</Text>
                <Text style={styles.text4}>{i.email}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Mobile</Text>
                <Text style={styles.text4}>{i.mobile}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Starting Year</Text>
                <Text style={styles.text4}>{i.year}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Student Capacity</Text>
                <Text style={styles.text4}>{i.capacity}</Text>
              </View>
            </View>
          ))}
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
    borderRadius: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 15,
    marginVertical: 15,
    flexDirection: 'column',
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 2.5,
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 12,
    color: '#476880',
  },
  text2: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
  },
  text3: {
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
    borderRadius: 30,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 10,
    marginHorizontal: 10,
    borderLeftColor: '#4e73df',
    borderLeftWidth: 2.5,
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
export default AllDepartments;
