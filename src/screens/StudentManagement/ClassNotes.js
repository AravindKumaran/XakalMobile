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

const class_notes = [
  {
    description: 'Chapter 1',
    uploaded_by: '10-05-2020',
    uploaded_at: '13IT050',
  },
  {
    description: 'Chapter 2',
    uploaded_by: '05-05-2020',
    uploaded_at: '13IT055',
  },
  {
    description: 'Chapter 3',
    uploaded_by: '18-08-2020',
    uploaded_at: '13IT060',
  },
];

const ClassNotes = () => {
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
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={value => console.log(value)}
            items={course_list}
            placeholder={{label: 'Select Course', value: null}}
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
          {class_notes.map(i => (
            <View style={styles.box}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.text}>
                  <Text style={styles.text1}>DESCRIPTION:</Text>{' '}
                  <Text style={styles.text2}>{i.description}</Text>
                </Text>

                <Text style={styles.text}>
                  <Text style={styles.text1}>UPLOADED DATE:</Text>{' '}
                  <Text style={styles.text2}>{i.uploaded_at}</Text>
                </Text>

                <Text style={styles.text}>
                  <Text style={styles.text1}>UPLOADED BY:</Text>{' '}
                  <Text style={styles.text2}>{i.uploaded_by}</Text>
                </Text>
              </View>
              <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                <Feather
                  name={'arrow-down-circle'}
                  size={25}
                  color={'#4e73df'}
                  style={{marginHorizontal: 15}}
                />
              </TouchableOpacity>
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
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 125,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 0,
    elevation: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
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
  touch: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    height: 50,
    width: 200,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 10,
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
export default ClassNotes;
