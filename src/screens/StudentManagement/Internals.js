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

const Internals = () => {
  const navigation = useNavigation();

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
                color="#47687F"
                style={{top: 12.5, right: 50}}
              />
            )}
          />
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
        <View>
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18}]}>Physics 1</Text>
            <View style={{borderWidth: 0.5, borderColor: '#47687F'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 1</Text>
              <Text style={styles.text4}>80</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 2</Text>
              <Text style={styles.text4}>66</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 3</Text>
              <Text style={styles.text4}>72</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 4</Text>
              <Text style={styles.text4}>88</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>INTERNALS</Text>
              <Text style={styles.text4}>16</Text>
            </View>
          </View>
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18}]}>Chemistry 1</Text>
            <View style={{borderWidth: 0.5, borderColor: '#47687F'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 1</Text>
              <Text style={styles.text4}>80</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 2</Text>
              <Text style={styles.text4}>66</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 3</Text>
              <Text style={styles.text4}>72</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>MODEL 4</Text>
              <Text style={styles.text4}>88</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>INTERNALS</Text>
              <Text style={styles.text4}>16</Text>
            </View>
          </View>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    height: 330,
    borderRadius: 30,
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
    color: '#47687F',
  },
  text2: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#47687F',
  },
  text3: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#47687F',
    alignSelf: 'center',
    margin: 15,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#47687F',
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
export default Internals;
