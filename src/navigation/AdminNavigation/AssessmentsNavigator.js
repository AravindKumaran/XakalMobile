import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Assessments from '../../screens/AdminManagement/Assessments/Assessments';
import AddInternal from '../../screens/AdminManagement/Assessments/AddInternal';
import EditInternal from '../../screens/AdminManagement/Assessments/EditInternal';
import AddResults from '../../screens/AdminManagement/Assessments/AddResults';
import SemesterResults from '../../screens/AdminManagement/Assessments/SemesterResults';

const Stack = createStackNavigator();

const AssessmentsNavigator = () => {
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
        name="Assessments"
        component={Assessments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Internal" component={AddInternal} />
      <Stack.Screen name="Edit Internal" component={EditInternal} />
      <Stack.Screen name="Add Results" component={AddResults} />
      <Stack.Screen name="Semester Results" component={SemesterResults} />
    </Stack.Navigator>
  );
};

export default AssessmentsNavigator;
