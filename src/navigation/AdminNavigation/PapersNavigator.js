import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Papers from '../../screens/AdminManagement/Papers/Papers';
import AddPapers from '../../screens/AdminManagement/Papers/AddPapers';
import AllPapers from '../../screens/AdminManagement/Papers/AllPapers';

const Stack = createStackNavigator();

const PapersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 5,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#476880',
      }}>
      <Stack.Screen
        name="Papers"
        component={Papers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Papers" component={AddPapers} />
      <Stack.Screen name="All Papers" component={AllPapers} />
    </Stack.Navigator>
  );
};

export default PapersNavigator;
