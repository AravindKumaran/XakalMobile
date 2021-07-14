import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Maintenance from '../../screens/AdminManagement/Maintenance/Maintenance';
import TeachingMaintenance from '../../screens/AdminManagement/Maintenance/TeachingMaintenance';
import NonteachingMaintenance from '../../screens/AdminManagement/Maintenance/NonteachingMaintenance';

const Stack = createStackNavigator();

const MaintenanceNavigator = () => {
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
        name="Maintenance"
        component={Maintenance}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Teaching Maintenance"
        component={TeachingMaintenance}
      />
      <Stack.Screen
        name="Non-Teaching Maintenance"
        component={NonteachingMaintenance}
      />
    </Stack.Navigator>
  );
};

export default MaintenanceNavigator;
