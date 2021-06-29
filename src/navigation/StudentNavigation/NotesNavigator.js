import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notes from '../../screens/StudentManagement/Notes';
import ClassNotes from '../../screens/StudentManagement/ClassNotes';
import XakalNotes from '../../screens/StudentManagement/XakalNotes';
import QuestionPapers from '../../screens/StudentManagement/QuestionPapers';

const Stack = createStackNavigator();

const NotesNavigator = () => {
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
        name="Notes"
        component={Notes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ClassNotes" component={ClassNotes} />
      <Stack.Screen name="XakalNotes" component={XakalNotes} />
      <Stack.Screen name="QuestionPapers" component={QuestionPapers} />
    </Stack.Navigator>
  );
};

export default NotesNavigator;
