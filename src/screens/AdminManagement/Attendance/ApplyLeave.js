import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const department_list = [
  {label: 'CSE', value: 'CSE'},
  {label: 'IT', value: 'IT'},
  {label: 'ECE', value: 'ECE'},
  {label: 'EEE', value: 'EEE'},
];

const student_list = [
  {label: 'Witcher', value: 'Witcher'},
  {label: 'Jennifer', value: 'Jennifer'},
  {label: 'Mikasu', value: 'Mikasu'},
  {label: 'Catherine', value: 'Catherine'},
  {label: 'Thunder', value: 'Thunder'},
];

const type_list = [
  {label: 'OD', value: 'OD'},
  {label: 'Leave', value: 'Leave'},
];

const ApplyLeave = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isSelected, setisSelected] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, width: '33.33%'}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={value => console.log(value)}
                items={department_list}
                placeholder={{label: 'Department', value: null}}
                style={customPickerStyles}
                // Icon={() => (
                //   <Feather
                //     name="chevron-down"
                //     size={25}
                //     color="#476880"
                //     style={{top: 12.5, right: 50}}
                //   />
                // )}
              />
            </View>
            <View style={{flex: 1, width: '33.33%'}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={value => console.log(value)}
                items={semester_list}
                placeholder={{label: 'Semester', value: null}}
                style={customPickerStyles}
                // Icon={() => (
                //   <Feather
                //     name="chevron-down"
                //     size={25}
                //     color="#476880"
                //     style={{top: 12.5, right: 50}}
                //   />
                // )}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, width: '33.33%'}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={value => console.log(value)}
                items={student_list}
                placeholder={{label: 'Student', value: null}}
                style={customPickerStyles}
                // Icon={() => (
                //   <Feather
                //     name="chevron-down"
                //     size={25}
                //     color="#476880"
                //     style={{top: 12.5, right: 50}}
                //   />
                // )}
              />
            </View>
            <View style={{flex: 1, width: '33.33%'}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={value => console.log(value)}
                items={type_list}
                placeholder={{label: 'Type', value: null}}
                style={customPickerStyles}
                // Icon={() => (
                //   <Feather
                //     name="chevron-down"
                //     size={25}
                //     color="#476880"
                //     style={{top: 12.5, right: 50}}
                //   />
                // )}
              />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 10,
            }}>
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.inputView1}>
              <Text
                style={{
                  color: '#476880',
                  fontSize: 15,
                  alignSelf: 'center',
                }}>
                From date
              </Text>
              <Text
                style={{
                  color: '#476880',
                  fontSize: 14,
                  padding: 2,
                  alignSelf: 'center',
                  fontWeight: '400',
                }}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                onChange={onChange}
                neutralButtonLabel="clear"
                placeholder="From"
              />
            )}
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.inputView1}>
              <Text
                style={{
                  color: '#476880',
                  fontSize: 15,
                  alignSelf: 'center',
                }}>
                Until date
              </Text>
              <Text
                style={{
                  color: '#476880',
                  fontSize: 14,
                  padding: 2,
                  alignSelf: 'center',
                  fontWeight: '400',
                }}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                onChange={onChange}
                neutralButtonLabel="clear"
                placeholder="To"
              />
            )}
          </View>
          <View style={[styles.inputView, {width: '85%'}]}>
            <TextInput
              style={styles.inputText}
              placeholder="Description"
              placeholderTextColor="#476880"
            />
          </View>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
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
  inputView: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    fontFamily: 'Proxima-Nova',
    alignSelf: 'center',
  },
  inputView1: {
    width: '50%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    fontFamily: 'Proxima-Nova',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputText: {
    fontSize: 16,
    height: 50,
    color: '#476880',
    fontWeight: '400',
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
export default ApplyLeave;
