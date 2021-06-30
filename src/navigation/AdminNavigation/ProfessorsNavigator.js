import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Professors from '../../screens/AdminManagement/Professors/Professors';
import AddProfessors from '../../screens/AdminManagement/Professors/AddProfessors';
import AllProfessors from '../../screens/AdminManagement/Professors/AllProfessors';

const Stack = createStackNavigator();

const ProfessorsNavigator = () => {
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
        name="Professors"
        component={Professors}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Professors" component={AddProfessors} />
      <Stack.Screen name="All Professors" component={AllProfessors} />
    </Stack.Navigator>
  );
};

export default ProfessorsNavigator;
