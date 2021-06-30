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
              <Text style={styles.text3}>COLLEGE CODE</Text>
              <Text style={styles.text4}>2150</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.text3}>TOTAL STUDENTS</Text>
              <Text style={styles.text4}>244</Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>LAST YEAR PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 70,
                    color: '#404FCD',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>70%</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>OVERALL PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 75,
                    color: '#EBD22F',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>75%</Text>
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
    marginBottom: 30,
    borderRadius: 5,
    height: 100,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
  text1: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 18,
    color: '#47687F',
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
    marginHorizontal: 10,
  },
  text4: {
    backgroundColor: 'transparent',
    color: '#5a5c69',
    fontWeight: '700',
    fontSize: 24,
    marginHorizontal: 10,
  },
});

export default Dashboard;
