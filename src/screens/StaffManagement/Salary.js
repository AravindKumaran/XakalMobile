import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';

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

const Salary = () => {
  const navigation = useNavigation();

  const MyCustomLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather
          name="menu"
          size={25}
          color="#47687F"
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
          text: 'Salary',
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
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, width: '33.33%'}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  onValueChange={value => console.log(value)}
                  items={month_list}
                  placeholder={{label: 'Select Month', value: null}}
                  style={customPickerStyles}
                  // Icon={() => (
                  //   <Feather
                  //     name="chevron-down"
                  //     size={25}
                  //     color="#47687F"
                  //     style={{top: 12.5, right: 20}}
                  //   />
                  // )}
                />
              </View>
              <View style={{flex: 1, width: '33.33%'}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  onValueChange={value => console.log(value)}
                  items={year_list}
                  placeholder={{label: 'Select Year', value: null}}
                  style={customPickerStyles}
                  // Icon={() => (
                  //   <Feather
                  //     name="chevron-down"
                  //     size={25}
                  //     color="#47687F"
                  //     style={{top: 12.5, right: 20}}
                  //   />
                  // )}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.touch}>
              <Text
                style={{
                  color: '#47687F',
                  alignSelf: 'center',
                  fontWeight: '700',
                }}>
                Get Results!
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.text}>
                <Text style={styles.text1}>CREDITED AT:</Text>{' '}
                <Text style={styles.text2}>05/05/2019</Text>
              </Text>

              <Text style={styles.text}>
                <Text style={styles.text1}>SALARY STATUS:</Text>{' '}
                <Text style={styles.text2}>Credited</Text>
              </Text>
            </View>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
              <Feather
                name={'arrow-down-circle'}
                size={25}
                color={'#47687F'}
                style={{marginHorizontal: 15}}
              />
            </TouchableOpacity>
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
  text: {
    marginHorizontal: 15,
    marginVertical: 2.5,
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 12,
    color: '#47687F',
  },
  text2: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#47687F',
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
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#47687F',
    borderRadius: 8,
    color: '#47687F',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#47687F',
    borderRadius: 8,
    color: '#47687F',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Salary;
