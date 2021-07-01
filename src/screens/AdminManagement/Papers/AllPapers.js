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

const papers = [
  {
    code: 'CSE001',
    name: 'Paper 1',
    credits: '4',
    semester: 'Semester 3',
    department: 'CSE',
    elective: 'No',
  },
  {
    code: 'IT005',
    name: 'Paper 2',
    credits: '4',
    semester: 'Semester 5',
    department: 'IT',
    elective: 'Yes',
  },
  {
    code: 'ECE010',
    name: 'Paper 3',
    credits: '4',
    semester: 'Semester 2',
    department: 'ECE',
    elective: 'No',
  },
  {
    code: 'EEE015',
    name: 'Paper 4',
    credits: '4',
    semester: 'Semester 6',
    department: 'EEE',
    elective: 'Yes',
  },
];

const AllPapers = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={value => console.log(value)}
            items={semester_list}
            placeholder={{label: 'Select Semester', value: null}}
            style={customPickerStyles}
            Icon={() => (
              <Feather
                name="chevron-down"
                size={25}
                color="#476880"
                style={{top: 12.5, right: 50}}
              />
            )}
          />
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Get Results!
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {papers.map(i => (
            <View style={styles.box1}>
              <View style={[styles.box, {marginVertical: 10}]}>
                <Text style={styles.text3}>{i.code}</Text>
                <TouchableOpacity style={styles.touch1}>
                  <Text
                    style={{
                      color: '#476880',
                      alignSelf: 'center',
                      fontWeight: '700',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
              <View style={styles.box}>
                <Text style={styles.text3}>Name</Text>
                <Text style={styles.text4}>{i.name}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Credits</Text>
                <Text style={styles.text4}>{i.credits}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Semester</Text>
                <Text style={styles.text4}>{i.semester}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Department</Text>
                <Text style={styles.text4}>{i.department}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Elective</Text>
                <Text style={styles.text4}>{i.elective}</Text>
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
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
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
export default AllPapers;
