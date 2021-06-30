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
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>LAST SEMESTER PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 75,
                    color: '#404FCD',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>75%</Text>
              </View>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.text1}>OVERALL PERFORMANCE</Text>
              <Pie
                radius={80}
                innerRadius={70}
                sections={[
                  {
                    percentage: 82,
                    color: '#EBD22F',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.box1}>
                <Text style={styles.text2}>82%</Text>
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
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
    height: 100,
    width: '80%',
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
    alignSelf: 'center',
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
    color: '#000',
    fontSize: 24,
  },
});

export default Dashboard;
