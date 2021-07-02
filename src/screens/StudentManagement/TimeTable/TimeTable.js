import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNPickerSelect from 'react-native-picker-select';

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

const date = [
  {date: 'MONDAY'},
  {date: 'TUESDAY'},
  {date: 'WEDNESDAY'},
  {date: 'THURADAY'},
  {date: 'FRIDAY'},
];

const timetable = [
  {
    period: '1',
    subject: 'Physics 1',
    staff: 'Mikasu',
    stime: '10:00',
    etime: '11:00',
  },
  {
    period: '2',
    subject: 'Physics 2',
    staff: 'Armin',
    stime: '11:00',
    etime: '12:00',
  },
  {
    period: '1',
    subject: 'Chemistry 1',
    staff: 'Suzaku',
    stime: '12:00',
    etime: '1:00',
  },
  {
    period: '1',
    subject: 'Chemistry 2',
    staff: 'Naruto',
    stime: '1:00',
    etime: '2:00',
  },
  {
    period: '1',
    subject: 'EVS',
    staff: 'Jenny',
    stime: '2:00',
    etime: '3:00',
  },
  {
    period: '1',
    subject: 'Mathematics 1',
    staff: 'John',
    stime: '3:00',
    etime: '4:00',
  },
  {
    period: '1',
    subject: 'Graphics',
    staff: 'Arthur',
    stime: '4:00',
    etime: '5:00',
  },
];

const TimeTable = () => {
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
          text: 'TimeTable',
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
            {date.map(i => (
              <View style={styles.box}>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text style={styles.text1}>{i.date}</Text>
                </View>
                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                  <Feather
                    name={'chevron-down'}
                    size={25}
                    color={'#4e73df'}
                    style={{marginHorizontal: 15}}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View>
            {timetable.map(i => (
              <View style={styles.box1}>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text style={styles.text}>
                    <Text style={styles.text6}>Subject:</Text>{' '}
                    <Text style={styles.text2}>{i.subject}</Text>
                  </Text>

                  <Text style={styles.text}>
                    <Text style={styles.text6}>Staff:</Text>{' '}
                    <Text style={styles.text2}>{i.staff}</Text>
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={[styles.text6, {fontSize: 16}]}>
                    {i.stime} - {i.etime}
                  </Text>
                  {/* <Text style={styles.text7}>-------</Text>
                <Text style={styles.text7}>12:30</Text> */}
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
    margin: 25,
  },
  box: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 0,
    elevation: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
  },
  box1: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 2.5,
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 20,
    color: '#476880',
    margin: 15,
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
    marginLeft: 10,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    marginLeft: 10,
  },
  text5: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    margin: 10,
  },
  text6: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#476880',
    margin: 15,
  },
  text7: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#476880',
    marginHorizontal: 15,
  },
  like: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input1: {
    width: 300,
    height: 150,
    textAlignVertical: 'top',
    borderRadius: 10,
    alignItems: 'center',
    color: '#476880',
    fontWeight: '400',
    fontSize: 14,
    borderWidth: 0.5,
    borderColor: '#737373',
    margin: 25,
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

export default TimeTable;
