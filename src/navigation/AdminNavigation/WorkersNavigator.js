import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Workers from '../../screens/AdminManagement/Workers/Workers';
import AddWorkers from '../../screens/AdminManagement/Workers/AddWorkers';
import AllWorkers from '../../screens/AdminManagement/Workers/AllWorkers';

const Stack = createStackNavigator();

const WorkersNavigator = () => {
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
        name="Workers"
        component={Workers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Workers" component={AddWorkers} />
      <Stack.Screen name="All Workers" component={AllWorkers} />
    </Stack.Navigator>
  );
};

export default WorkersNavigator;
