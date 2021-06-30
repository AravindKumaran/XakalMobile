import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Attendance from '../../screens/AdminManagement/Attendance/Attendance';
import AddAttendance from '../../screens/AdminManagement/Attendance/AddAttendance';
import AllAttendance from '../../screens/AdminManagement/Attendance/AllAttendance';

const Stack = createStackNavigator();

const AttendanceNavigator = () => {
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
        name="Attendance"
        component={Attendance}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Attendance" component={AddAttendance} />
      <Stack.Screen name="All Attendance" component={AllAttendance} />
    </Stack.Navigator>
  );
};

export default AttendanceNavigator;
