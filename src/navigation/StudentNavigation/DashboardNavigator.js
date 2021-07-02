import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Academic from '../../screens/StudentManagement/Dashboard/Academic';
import Certifications from '../../screens/StudentManagement/Dashboard/Certifications';
import Awards from '../../screens/StudentManagement/Dashboard/Awards';
import Dashboard from '../../screens/StudentManagement/Dashboard/Dashboard';

const Stack = createStackNavigator();

const DashboardNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 10,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#476880',
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Academic"
        component={Academic}
        options={{
          title: 'Academic',
        }}
      />
      <Stack.Screen
        name="Certifications"
        component={Certifications}
        options={{
          title: 'Certifications',
        }}
      />
      <Stack.Screen
        name="Awards"
        component={Awards}
        options={{
          title: 'Awards',
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
