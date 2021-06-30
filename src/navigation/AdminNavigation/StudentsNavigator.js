import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Students from '../../screens/AdminManagement/Students/Students';
import AddStudents from '../../screens/AdminManagement/Students/AddStudents';
import AllStudents from '../../screens/AdminManagement/Students/AllStudents';

const Stack = createStackNavigator();

const StudentsNavigator = () => {
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
        name="Students"
        component={Students}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Students" component={AddStudents} />
      <Stack.Screen name="All Students" component={AllStudents} />
    </Stack.Navigator>
  );
};

export default StudentsNavigator;
