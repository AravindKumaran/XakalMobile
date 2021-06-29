import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Academic from '../../screens/StaffManagement/Academic';
import Certifications from '../../screens/StaffManagement/Certifications';
import Awards from '../../screens/StaffManagement/Awards';
import Dashboard from '../../screens/StaffManagement/Dashboard';

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
