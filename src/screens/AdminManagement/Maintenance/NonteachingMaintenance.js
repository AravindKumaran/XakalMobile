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

const maitenance_list = [
  {
    type: 'Benches',
    name: 'Kawasaki',
    designation: 'Non-teaching worker',
    from: '244',
    to: '394',
  },
  {
    type: 'Chairs',
    name: 'Buttowski',
    designation: 'Non-teaching worker',
    from: '244',
    to: '394',
  },
  {
    type: 'Cleaning',
    name: 'Alan',
    designation: 'Non-teaching worker',
  },
];

const NonteachingMaintenance = () => {
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        {maitenance_list.map(i => (
          <View style={styles.box1}>
            <View style={[styles.box, {marginVertical: 10}]}>
              <Text style={styles.text3}>Type</Text>
              <Text style={styles.text4}>{i.type}</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#4e73df'}} />
            <View style={styles.box}>
              <Text style={styles.text3}>Incharge</Text>
              <Text style={styles.text4}>{i.name}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text3}>Designation</Text>
              <Text style={styles.text4}>{i.designation}</Text>
            </View>
            {i.type === 'Cleaning' ? (
              <></>
            ) : (
              <>
                <View style={styles.box}>
                  <Text style={styles.text3}>From</Text>
                  <Text style={styles.text4}>{i.from}</Text>
                </View>
                <View style={styles.box}>
                  <Text style={styles.text3}>To</Text>
                  <Text style={styles.text4}>{i.to}</Text>
                </View>
              </>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.touch}>
          <Text
            style={{
              color: '#476880',
              alignSelf: 'center',
              fontWeight: '700',
            }}>
            Edit Maintenance Details
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default NonteachingMaintenance;
