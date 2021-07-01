import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Comments from '../../components/Comments';

const user = [
  {
    image: require('../../assets/images/xakal-logo.png'),
    name: 'Armin',
    created_at: '12min ago',
    message:
      'Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.',
    likes: '12',
    comments: '5',
  },
  {
    image: require('../../assets/images/xakal-logo.png'),
    name: 'Levi',
    created_at: '1day ago',
    message:
      'We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.',
    likes: '22',
    comments: '8',
  },
  {
    image: require('../../assets/images/xakal-logo.png'),
    name: 'Mikasu',
    created_at: '1w ago',
    message:
      'Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.',
    likes: '30',
    comments: '6',
  },
];

const Whiteboard = props => {
  const refRBSheet = useRef();
  const refRBSheet1 = useRef();
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
                        color: '#476880',
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
          {user.map(i => (
            <>
              <View style={styles.box1}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                  }}>
                  <Image
                    source={i.image}
                    style={{
                      height: 75,
                      width: 75,
                      borderRadius: 50,
                      backgroundColor: '#F8F8F8',
                    }}
                  />
                  <View
                    style={{flexDirection: 'column', alignContent: 'center'}}>
                    <Text style={styles.text3}>{i.name}</Text>
                    <Text style={styles.text4}>{i.created_at}</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: '#476880',
                    marginVertical: 5,
                  }}
                />
                <Text style={styles.text5}>"{i.message}"</Text>

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
                      color="#476880"
                      size={25}
                      style={{
                        marginHorizontal: 5,
                        alignSelf: 'center',
                      }}
                    />
                    <Text style={styles.text6}>{i.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.like}
                    onPress={() => refRBSheet1.current.open()}>
                    <Feather
                      name="message-circle"
                      color="#476880"
                      size={25}
                      style={{
                        marginHorizontal: 5,
                        alignSelf: 'center',
                      }}
                    />
                    <Text style={styles.text6}>{i.comments}</Text>
                    <RBSheet
                      ref={refRBSheet1}
                      height={Dimensions.get('window').height - 300}
                      animationType="fade"
                      closeOnDragDown={false}
                      customStyles={{
                        wrapper: {
                          backgroundColor: 'rgba(0,0,0,.6)',
                        },
                        draggableIcon: {
                          backgroundColor: '#C4C4C4',
                        },
                        container: {
                          backgroundColor: '#EBEBEB',
                          borderTopRightRadius: 25,
                          borderTopLeftRadius: 25,
                        },
                      }}>
                      <View style={{marginTop: 22, height: 40, width: 40}}>
                        <TouchableOpacity
                          onPress={() => refRBSheet1.current.close()}
                          style={{
                            top: 0,
                            left: 10,
                            position: 'absolute',
                          }}>
                          <Feather
                            name="chevron-left"
                            size={30}
                            color="#20232A"
                          />
                        </TouchableOpacity>
                      </View>
                      <Comments />
                    </RBSheet>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ))}
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
    color: '#476880',
    marginLeft: 10,
  },
  text4: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    marginLeft: 10,
  },
  text5: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    margin: 10,
  },
  text6: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: 14,
    color: '#476880',
    alignSelf: 'center',
    alignItems: 'center',
  },
  like: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#476880',
  },
  input1: {
    width: 300,
    height: 150,
    textAlignVertical: 'top',
    borderRadius: 10,
    alignItems: 'center',
    color: '#476880',
    fontWeight: '400',
    fontSize: 14,
    borderWidth: 0.5,
    borderColor: '#737373',
    margin: 25,
  },
});

export default Whiteboard;
