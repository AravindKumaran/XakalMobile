import React from 'react';
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
import DocumentPicker from 'react-native-document-picker';

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

const staff_list = [
  {label: 'Witcher', value: 'Witcher'},
  {label: 'Jennifer', value: 'Jennifer'},
  {label: 'Mikasu', value: 'Mikasu'},
  {label: 'Catherine', value: 'Catherine'},
  {label: 'Thunder', value: 'Thunder'},
];

const month_list = [
  {label: 'January', value: 'January'},
  {label: 'February', value: 'February'},
  {label: 'March', value: 'March'},
  {label: 'April', value: 'April'},
  {label: 'May', value: 'May'},
  {label: 'June', value: 'June'},
  {label: 'July', value: 'July'},
  {label: 'August', value: 'August'},
  {label: 'September', value: 'September'},
  {label: 'October', value: 'October'},
  {label: 'November', value: 'November'},
  {label: 'December', value: 'December'},
];

const year_list = [
  {label: '2018', value: '2018'},
  {label: '2019', value: '2019'},
  {label: '2020', value: '2020'},
  {label: '2021', value: '2021'},
];

const department_list = [
  {label: 'CSE', value: 'CSE'},
  {label: 'IT', value: 'IT'},
  {label: 'ECE', value: 'ECE'},
  {label: 'EEE', value: 'EEE'},
];

const WorkersAccount = () => {
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={value => console.log(value)}
            items={staff_list}
            placeholder={{label: 'Select Staff', value: null}}
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
            items={month_list}
            placeholder={{label: 'Select Month', value: null}}
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
            items={year_list}
            placeholder={{label: 'Select Year', value: null}}
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
          <TouchableOpacity onPress={selectFile}>
            <View style={styles.button}>
              <Feather name="arrow-up-circle" size={20} color="#4e73df" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#476880',
                  fontWeight: '700',
                  marginHorizontal: 10,
                }}>
                Choose File
              </Text>
            </View>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
    width: 320,
    height: 60,
    marginVertical: 20,
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
export default WorkersAccount;
