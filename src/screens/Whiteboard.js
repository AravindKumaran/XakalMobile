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

const Whiteboard = () => {
  const refRBSheet = useRef();
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
          text: 'Whiteboard',
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
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Text style={styles.text6}>ADD POST</Text>
            </TouchableOpacity>
            <RBSheet
              ref={refRBSheet}
              height={300}
              animationType="fade"
              customStyles={{
                wrapper: {
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                },
                container: {
                  backgroundColor: '#FFFFFF',
                  borderRadius: 25,
                  bottom: 180,
                  width: '90%',
                  alignSelf: 'center',
                  elevation: 10,
                },
              }}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <TextInput
                    style={styles.input1}
                    multiline={true}
                    numberOfLines={5}
                  />
                  <TouchableOpacity
                    style={{
                      height: 50,
                      width: 200,
                      backgroundColor: '#FFFFFF',
                      justifyContent: 'center',
                      borderRadius: 50,
                      marginVertical: 20,
                      alignSelf: 'center',
                      elevation: 10,
                    }}>
                    <Text
                      style={{
                        color: '#47687F',
                        alignSelf: 'center',
                        fontWeight: '700',
                      }}>
                      POST
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </RBSheet>
          </View>
          <View style={styles.box1}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
              <Image
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 50,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <View style={{flexDirection: 'column', alignContent: 'center'}}>
                <Text style={styles.text3}>Mikasu</Text>
                <Text style={styles.text4}>40min ago</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#F8F8F8',
                marginVertical: 5,
              }}
            />
            <Text style={styles.text5}>
              “I'm selfish, impatient and a little insecure. I make mistakes, I
              am out of control and at times hard to handle. But if you can't
              handle me at my worst, then you sure as hell don't deserve me at
              my best.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity style={styles.like}>
                <Feather
                  name="heart"
                  color="#47687F"
                  size={25}
                  style={{
                    marginHorizontal: 5,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.text6}>12</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.like}>
                <Feather
                  name="message-circle"
                  color="#47687F"
                  size={25}
                  style={{
                    marginHorizontal: 5,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.text6}>8</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box1}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
              <Image
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 50,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <View style={{flexDirection: 'column', alignContent: 'center'}}>
                <Text style={styles.text3}>Mikasu</Text>
                <Text style={styles.text4}>40min ago</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#F8F8F8',
                marginVertical: 5,
              }}
            />
            <Text style={styles.text5}>
              “Twenty years from now you will be more disappointed by the things
              that you didn't do than by the ones you did do. So throw off the
              bowlines. Sail away from the safe harbor. Catch the trade winds in
              your sails. Explore. Dream. Discover.”
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity style={styles.like}>
                <Feather
                  name="heart"
                  color="#47687F"
                  size={25}
                  style={{
                    marginHorizontal: 5,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.text6}>18</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.like}>
                <Feather
                  name="message-circle"
                  color="#47687F"
                  size={25}
                  style={{
                    marginHorizontal: 5,
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.text6}>14</Text>
              </TouchableOpacity>
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
  box1: {
    height: 300,
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    margin: 25,
  },
  text3: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 16,
    color: '#47687F',
    marginLeft: 10,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#47687F',
    alignSelf: 'center',
    marginLeft: 10,
  },
  text5: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
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
    width: 300,
    height: 150,
    textAlignVertical: 'top',
    borderRadius: 10,
    alignItems: 'center',
    color: '#47687F',
    fontWeight: '400',
    fontSize: 14,
    borderWidth: 0.5,
    borderColor: '#737373',
    margin: 25,
  },
});

export default Whiteboard;
