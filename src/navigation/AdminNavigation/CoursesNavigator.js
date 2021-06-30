import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Courses from '../../screens/AdminManagement/Courses/Courses';
import AddCourses from '../../screens/AdminManagement/Courses/AddCourses';
import AllCourses from '../../screens/AdminManagement/Courses/AllCourses';

const Stack = createStackNavigator();

const CoursesNavigator = () => {
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
        name="Courses"
        component={Courses}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Courses" component={AddCourses} />
      <Stack.Screen name="All Courses" component={AllCourses} />
    </Stack.Navigator>
  );
};

export default CoursesNavigator;
