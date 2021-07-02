import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Pie from 'react-native-pie';

const Dashboard = () => {
  const navigation = useNavigation();

  const MyCustomLeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather
          name="list"
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
          text: 'Dashboard',
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
          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.text3}>LOGIN ID</Text>
              <Text style={styles.text4}>13IT099</Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>LAST SEMESTER PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 60,
                    color: '#404FCD',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>60%</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>OVERALL PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 70,
                    color: '#EBD22F',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>70%</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: 25,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.box2}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.text3}>FOLLOWERS</Text>
                <Text style={styles.text4}>18</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.text3}>FOLLOWING</Text>
                <Text style={styles.text4}>16</Text>
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
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 10,
    marginBottom: 30,
    height: 100,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
  box2: {
    borderLeftColor: '#4e73df',
    borderLeftWidth: 5,
    borderRadius: 10,
    marginBottom: 30,
    height: 100,
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    marginHorizontal: 10,
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 18,
    color: '#476880',
    marginVertical: 15,
  },
  box1: {
    position: 'absolute',
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    backgroundColor: 'transparent',
    color: '#5a5c69',
    fontSize: 24,
  },
  text3: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#4e73df',
    marginHorizontal: 15,
  },
  text4: {
    backgroundColor: 'transparent',
    color: '#5a5c69',
    fontWeight: '700',
    fontSize: 24,
    marginHorizontal: 15,
  },
});

export default Dashboard;
