import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
} from 'react-native';
// import TimeAgo from 'react-native-timeago';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const Comments = ({postId, postUserId, curUser, route, setCommentss}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cmtText, setCmtText] = useState('');
  const [user, setUser] = useState(null);
  const [message] = useState('Please login first');

  const navigation = useNavigation();

  const refScrollView = useRef(null);
  const moveTo = () => {
    refScrollView.current.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          marginVertical: 10,
          fontWeight: '700',
          marginTop: -35,
        }}>
        Comments
      </Text>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        ref={refScrollView}>
        <View style={styles.cmList}>
          {comments.length > 0 &&
            comments.map(cm => (
              <View styles={styles.cmCard} key={cm.id}>
                <View style={styles.cmCardContent}>
                  <View style={{width: 40, padding: 5}}>
                    <Image
                      source={{uri: cm?.user?.imageUri}}
                      style={{
                        height: 35,
                        width: 35,
                        borderRadius: 20,
                        top: 20,
                      }}
                    />
                  </View>

                  <View style={{flex: 1}}>
                    <Text style={{top: 20, marginBottom: 15, margin: 5}}>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          fontSize: 12,
                          fontWeight: '700',
                          color: '#20232A',
                          // top: 5,
                        }}>
                        Witcher
                      </Text>
                      <Text
                        style={{
                          color: '#030303',
                          fontWeight: '400',
                          color: '#20232A',
                          fontSize: 12,
                          // left: 110,
                          // bottom: 20,
                        }}>
                        Good one
                      </Text>
                    </Text>
                    <Text
                      style={{
                        color: '#476880',
                        fontSize: 12,
                        fontWeight: '400',
                        marginBottom: 20,
                        top: 0,
                      }}>
                      12min ago
                      {/* <TimeAgo time={cm.createdAt} /> */}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={moveTo}>
        <Feather
          name="chevron-down"
          size={30}
          color="#476880"
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}
        />
      </TouchableOpacity>

      <View style={styles.commentForm}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
          <TextInput
            // style={{color: '#FEFEFE'}}
            placeholder="Type your comment here..."
            autoCapitalize="none"
            autoCorrect={false}
            // numberOfLines={3}
            value={cmtText}
            name={cmtText}
            // multiline={true}
            maxLength={200}
            onChangeText={text => setCmtText(text)}
            // onSubmitEditing={handleSumbit}
          />
        </KeyboardAvoidingView>
        {/* <AppButton
          btnStyle={{
            width: 150,
            height: 30,
            marginHorizontal: 10,
            marginVertical: 15,
            alignSelf: 'center',
          }}
          onPress={handleSumbit}
          title="Submit"
        /> */}
        {/* <Image
          source={require('../../assets/images/Bline.png')}
          size={25}
          style={{alignSelf: 'center'}}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#EBEBEB',
  },
  cmList: {
    marginTop: 5,
  },
  cmCardContent: {
    flexDirection: 'row',
    marginVertical: -15,
    borderBottomColor: '#ebe9e9',
    // borderBottomWidth: 2,
  },
  commentForm: {
    flexDirection: 'column',
    bottom: 10,
  },
});

export default Comments;
