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

const Profile = () => {
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
          text: 'Profile',
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
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18, margin: 20}]}>
              College Details
            </Text>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>College Name</Text>
              <Text style={styles.text4}>IIT</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Address</Text>
              <Text style={styles.text4}>OMR, Chennai, Tamil Nadu, India</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Total courses offered</Text>
              <Text style={styles.text4}>4</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Contact number</Text>
              <Text style={styles.text4}>044-1234-5678</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Contact number</Text>
              <Text style={styles.text4}>1234567890</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Email ID</Text>
              <Text style={styles.text4}>iit@gmail.com</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Awards and accrediations</Text>
              <Text style={styles.text4}>Autonomous</Text>
            </View>
          </View>
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18, margin: 20}]}>
              Other Details
            </Text>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>Colege Code</Text>
              <Text style={styles.text4}>2150</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Total Students</Text>
              <Text style={styles.text4}>244</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Last year performance</Text>
              <Text style={styles.text4}>75%</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Overall performance</Text>
              <Text style={styles.text4}>82%</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                color: '#476880',
                alignSelf: 'center',
                fontWeight: '700',
              }}>
              Edit College Details
            </Text>
          </TouchableOpacity>
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
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 20,
    marginVertical: 15,
    flexDirection: 'column',
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  text1: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
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
});

export default Profile;
