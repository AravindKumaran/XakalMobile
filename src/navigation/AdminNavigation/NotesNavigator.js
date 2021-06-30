import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notes from '../../screens/AdminManagement/Notes/Notes';
import AddNotes from '../../screens/AdminManagement/Notes/AddNotes';
import AllNotes from '../../screens/AdminManagement/Notes/AllNotes';

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
      <Stack.Screen name="Add Notes" component={AddNotes} />
      <Stack.Screen name="All Notes" component={AllNotes} />
    </Stack.Navigator>
  );
};

export default NotesNavigator;
