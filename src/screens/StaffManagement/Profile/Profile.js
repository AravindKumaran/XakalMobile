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
            <Text style={[styles.text3, {fontSize: 18, marginVertical: 20}]}>
              Personal Details
            </Text>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>Name</Text>
              <Text style={styles.text4}>Witcher</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Designation</Text>
              <Text style={styles.text4}>B.E</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Qualification</Text>
              <Text style={styles.text4}>M.Tech</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Blood group</Text>
              <Text style={styles.text4}>O+</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Contact number</Text>
              <Text style={styles.text4}>1234567890</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Emergency contact number</Text>
              <Text style={styles.text4}>1234567890</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Email ID</Text>
              <Text style={styles.text4}>witcher@gmail.com</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Parents/Spouse name</Text>
              <Text style={styles.text4}>Zeus</Text>
            </View>
          </View>
          <View style={styles.box1}>
            <Text style={[styles.text3, {fontSize: 18, marginVertical: 20}]}>
              Career Details
            </Text>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>Staff ID</Text>
              <Text style={styles.text4}>13IT100</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Last semester performance</Text>
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
              Edit Personal Details
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

export default Profile;
