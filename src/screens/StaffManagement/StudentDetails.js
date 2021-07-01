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

const year = [
  {label: 'Year 1', value: 'Year 1'},
  {label: 'Year 2', value: 'Year 2'},
  {label: 'Year 3', value: 'Year 3'},
  {label: 'Year 4', value: 'Year 4'},
];

const student = [
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

const StudentDetails = () => {
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
          text: 'Student Details',
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
              items={year}
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
            <View style={styles.box1}>
              <View style={[styles.box, {margin: 10}]}>
                <Text style={styles.text3}>Roll no.</Text>
                <Text style={styles.text3}>Name</Text>
                <Text style={[styles.text3, {left: 20}]}>Details</Text>
              </View>
              <View style={{borderWidth: 0.5, borderColor: '#476880'}} />
              {student.map(i => (
                <View style={styles.box}>
                  <Text style={styles.text6}>{i.id}</Text>
                  <Text style={styles.text6}>{i.name}</Text>
                  <TouchableOpacity style={styles.touch1}>
                    <Text style={styles.text5}>View</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
          <View>
            <View style={[styles.box1, {margin: 15, elevation: 0}]}>
              <View style={styles.box}>
                <Text style={styles.text3}>Degree</Text>
                <Text style={styles.text4}>B.E CSE</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Branch</Text>
                <Text style={styles.text4}>CSE</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Department</Text>
                <Text style={styles.text4}>B.E</Text>
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
                <Text style={styles.text3}>Parents name</Text>
                <Text style={styles.text4}>Zeus</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Admission Date</Text>
                <Text style={styles.text4}>20-12-2019</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text3}>Blood group</Text>
                <Text style={styles.text4}>O+</Text>
              </View>
            </View>
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
    height: 50,
    borderRadius: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    flex: 1,
    borderRadius: 30,
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
    flex: 1,
    height: 30,
    width: 90,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 10,
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
    fontSize: 10,
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

export default StudentDetails;
