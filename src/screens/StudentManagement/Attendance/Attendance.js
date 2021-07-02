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
import {Header} from 'react-native-elements';

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

const attendance_list = [
  {
    id: '13IT205',
    sdate: '11/18/2020',
    edate: '11/18/2020',
    reason: 'Vacation leave',
    type: 'Leave',
  },
  {
    id: '13IT205',
    sdate: '09/03/2020',
    edate: '09/03/2020',
    reason: 'Holiday leave',
    type: 'Leave',
  },
  {
    id: '13IT205',
    sdate: '05/20/2020',
    edate: '05/20/2020',
    reason: 'Learnathon',
    type: 'OD',
  },
];

const Attendance = () => {
  const navigation = useNavigation();

  const MyCustomLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather
          name="menu"
          size={25}
          color="#476880"
          style={{paddingLeft: 10, top: 5}}
        />
      </TouchableOpacity>
    );
  };

  const MyCustomRightComponent = () => {
    return (
      <TouchableOpacity>
        <Feather
          name="message-circle"
          color="#FFFFFF"
          size={25}
          style={{height: 35, padding: 5}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header
        leftComponent={<MyCustomLeftComponent />}
        rightComponent={<MyCustomRightComponent />}
        centerComponent={{
          text: 'Attendance',
          style: {color: '#476880', fontSize: 20, fontWeight: '700', top: 5},
        }}
        containerStyle={{
          backgroundColor: '#FFFFFF',
          elevation: 5,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        }}
      />
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
            {attendance_list.map(i => (
              <View style={styles.box1}>
                <View style={[styles.box, {marginVertical: 10}]}>
                  <Text style={styles.text3}>STUDENT ID</Text>
                  <Text style={styles.text4}>{i.id}</Text>
                </View>
                <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
                <View style={styles.box}>
                  <Text style={styles.text3}>DATE OF ABSENCE</Text>
                  <Text style={styles.text4}>
                    {i.sdate} - {i.edate}
                  </Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.text3}>REASON</Text>
                  <Text style={styles.text4}>{i.reason}</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.text3}>TYPE</Text>
                  <Text style={styles.text4}>{i.type}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
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
    flex: 1,
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

export default Attendance;
