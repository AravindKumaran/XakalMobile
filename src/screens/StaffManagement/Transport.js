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

const Transport = () => {
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
          text: 'Transport',
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
            <TextInput
              style={styles.input1}
              placeholder="Enter bus number or ID"
            />
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.text2}>Get Routes!</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.box1}>
              <View style={styles.box}>
                <Text style={styles.text3}>DESTINATION</Text>
                <Text style={styles.text4}>AMBATTUR</Text>
              </View>
              <View style={{borderWidth: 0.5, borderColor: '#47687F'}} />
              <Text style={styles.text5}>
                College - ECR - Thiruvanmiyur - Loyola - Nungambakkam - Guindy -
                T.Nagar - Ambattur
              </Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  box1: {
    height: 230,
    borderRadius: 30,
    marginVertical: 15,
    flexDirection: 'column',
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  text2: {
    color: '#47687F',
    alignSelf: 'center',
    fontWeight: '700',
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
  text5: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 16,
    color: '#47687F',
    alignSelf: 'center',
    margin: 10,
  },
  text6: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#47687F',
    alignSelf: 'center',
    alignItems: 'center',
  },
  like: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input1: {
    width: '80%',
    textAlignVertical: 'top',
    borderRadius: 10,
    alignSelf: 'center',
    color: '#47687F',
    fontWeight: '400',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#737373',
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

export default Transport;
