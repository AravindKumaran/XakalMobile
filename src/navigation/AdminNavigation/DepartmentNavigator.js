import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Department from '../../screens/AdminManagement/Department/Department';
import AddDepartment from '../../screens/AdminManagement/Department/AddDepartment';
import AllDepartment from '../../screens/AdminManagement/Department/AllDepartment';
const Stack = createStackNavigator();

const DepartmentNavigator = () => {
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
        name="Department"
        component={Department}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Department" component={AddDepartment} />
      <Stack.Screen name="All Department" component={AllDepartment} />
    </Stack.Navigator>
  );
};

export default DepartmentNavigator;
