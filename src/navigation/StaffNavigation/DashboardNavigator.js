import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/StaffManagement/Dashboard/Dashboard';

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
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
