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

const course_list = [
  {label: 'Physics', value: 'Physics'},
  {label: 'Chemistry', value: 'Chemistry'},
  {label: 'EVS', value: 'EVS'},
  {label: 'Mathematics', value: 'Mathematics'},
  {label: 'OOPS', value: 'OOPS'},
];

const department = [
  {label: 'CSE', value: 'CSE'},
  {label: 'IT', value: 'IT'},
  {label: 'ECE', value: 'ECE'},
  {label: 'EEE', value: 'EEE'},
];

const AddProfessors = () => {
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
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={value => console.log(value)}
            items={department}
            placeholder={{label: 'Select Department', value: null}}
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
        <View style={{marginHorizontal: 20}}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#476880"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Designation"
              placeholderTextColor="#476880"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Qualification"
              placeholderTextColor="#476880"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Mobile"
              placeholderTextColor="#476880"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#476880"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Emergency Contact"
              placeholderTextColor="#476880"
            />
          </View>
          {/* <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Joining Date"
              placeholderTextColor="#476880"
            />
          </View> */}
          <View>
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.inputView1}>
              <Text style={[styles.inputText, {flex: 1}]}>Joining date</Text>
              <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
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
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity style={styles.touch1}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch1}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch1}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Cancel
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
  touch1: {
    height: 50,
    width: '30%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 10,
    marginHorizontal: 10,
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
  inputText: {
    fontSize: 16,
    height: 50,
    color: '#476880',
    fontWeight: '400',
  },
  inputView1: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    fontFamily: 'Proxima-Nova',
    alignSelf: 'center',
    flexDirection: 'row',
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
export default AddProfessors;
