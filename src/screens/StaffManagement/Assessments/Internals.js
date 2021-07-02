import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  {label: 'OS', value: 'OS'},
  {label: 'Maths', value: 'Maths'},
  {label: 'EVS', value: 'EVS'},
  {label: 'Chemistry', value: 'Chemistry'},
  {label: 'OOAD', value: 'OOAD'},
];

const model_list = [
  {label: 'Model 1', value: 'Model 1'},
  {label: 'Model 2', value: 'Model 2'},
  {label: 'Model 3', value: 'Model 3'},
];

const student = [
  {
    id: '13IT200',
    mark: '80',
    uploaded_at: '10-5-2019',
    uploaded_by: '13IT100',
  },
  {
    id: '13IT201',
    mark: '85',
    uploaded_at: '10-5-2019',
    uploaded_by: '13IT101',
  },
  {
    id: '13IT202',
    mark: '90',
    uploaded_at: '10-5-2019',
    uploaded_by: '13IT102',
  },
];

const Internals = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, width: '33.33%'}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={value => console.log(value)}
                items={semester_list}
                placeholder={{label: 'Select Semester', value: null}}
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
                items={course_list}
                placeholder={{label: 'Select Course', value: null}}
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
                items={model_list}
                placeholder={{label: 'Select Model', value: null}}
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
          {student.map(i => (
            <View style={styles.box1}>
              <View style={[styles.box, {marginVertical: 0}]}>
                <Text style={styles.text3}>{i.id}</Text>
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
                <Text style={styles.text3}>Marks obtaines</Text>
                <Text style={styles.text4}>{i.mark}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Uploaded at</Text>
                <Text style={styles.text4}>{i.uploaded_at}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Uploaded by</Text>
                <Text style={styles.text4}>{i.uploaded_by}</Text>
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
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 20,
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
  touch1: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    height: 30,
    width: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 10,
    marginHorizontal: 10,
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    borderRadius: 8,
    color: '#476880',
    width: '33.33%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputAndroid: {
    flex: 1,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#476880',
    borderRadius: 8,
    color: '#476880',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
export default Internals;
