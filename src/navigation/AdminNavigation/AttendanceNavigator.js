import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Attendance from '../../screens/AdminManagement/Attendance/Attendance';
import StudentAttendance from '../../screens/AdminManagement/Attendance/StudentAttendance';
import ApplyLeave from '../../screens/AdminManagement/Attendance/ApplyLeave';

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
      <Stack.Screen name="Student Attendance" component={StudentAttendance} />
      <Stack.Screen name="Apply Leave" component={ApplyLeave} />
    </Stack.Navigator>
  );
};

export default AttendanceNavigator;
