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
              <Text style={styles.text4}>13IT199</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('Academic');
            }}>
            <Text style={styles.text1}>Academic Performance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('Certifications');
            }}>
            <Text style={styles.text1}>Other Certifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('Awards');
            }}>
            <Text style={styles.text1}>Awards</Text>
          </TouchableOpacity>
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
    marginBottom: 30,
    borderRadius: 20,
    height: 100,
    width: '80%',
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
    alignSelf: 'center',
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
